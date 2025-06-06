/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { generateUniqueUsername } from "@/utils/generator";

export async function POST(req: Request) {
	try {
		const { email, password, firstName, lastName } = await req.json();

		const existingUser = await prisma.user.findUnique({
			where: { email },
		});

		if (existingUser) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 400 }
			);
		}

		const hashedPassword = await hash(password, 12);
		const username = await generateUniqueUsername(firstName);

		const user = await prisma.user.create({
			data: {
				email,
				password: hashedPassword,
				firstName,
				lastName,
				username,
			},
		});

		const { password: _, ...userWithoutPassword } = user;

		return NextResponse.json(
			{
				user: userWithoutPassword,
				message: "User created successfully",
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Registration error:", error);
		return NextResponse.json({ error: "Error creating user" }, { status: 500 });
	}
}

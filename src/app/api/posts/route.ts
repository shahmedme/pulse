import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const session = await getServerSession(authOptions);

		if (!session?.user?.id) {
			return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
		}

		const body = await request.json();
		const { title, content, type } = body;

		const post = await prisma.post.create({
			data: {
				title,
				content,
				type,
				authorId: Number(session.user.id),
			},
		});

		return NextResponse.json({ success: true, data: post });
	} catch (error) {
		console.error("Error creating post:", error);
		return NextResponse.json(
			{ error: "Failed to create post" },
			{ status: 500 }
		);
	}
}

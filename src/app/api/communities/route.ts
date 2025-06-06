import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const communities = await prisma.community.findMany({
			select: {
				id: true,
				name: true,
				image: true,
				slug: true,
				_count: {
					select: {
						members: true,
						posts: true,
					},
				},
			},
			orderBy: {
				members: {
					_count: "desc",
				},
			},
			take: 10,
		});

		return NextResponse.json(communities);
	} catch (error) {
		console.error("Error fetching communities:", error);
		return NextResponse.json(
			{ error: "Failed to fetch communities" },
			{ status: 500 }
		);
	}
}

import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { CommunityHeader } from "@/app/p/[slug]/CommunityHeader";
import { PostList } from "@/app/p/[slug]/PostList";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getCommunity(slug: string) {
	const community = await prisma.community.findUnique({
		where: { slug },
		include: {
			_count: {
				select: {
					members: true,
					posts: true,
				},
			},
		},
	});

	if (!community) {
		notFound();
	}

	return community;
}

async function getCommunityPosts(slug: string) {
	const posts = await prisma.post.findMany({
		where: {
			communities: {
				some: {
					slug,
				},
			},
		},
		include: {
			author: {
				select: {
					id: true,
					username: true,
					image: true,
				},
			},
			communities: {
				select: {
					id: true,
					name: true,
					slug: true,
					image: true,
				},
			},
			_count: {
				select: {
					pollOptions: true,
				},
			},
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return posts;
}

export default async function CommunityPage({ params }: any) {
	const community = await getCommunity(params.slug);
	const posts = await getCommunityPosts(params.slug);

	return (
		<main className="container mx-auto px-4 py-8">
			<CommunityHeader community={community} />
			<div className="mt-8">
				<PostList posts={posts} />
			</div>
		</main>
	);
}

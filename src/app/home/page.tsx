import PostBox from "@/components/feed/PostBox";
import { prisma } from "@/lib/prisma";
import Sidebar from "./Sidebar";

export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getPosts() {
	const posts = await prisma.post.findMany({
		include: {
			author: true,
			media: true,
			pollOptions: true,
		},
		orderBy: {
			createdAt: "desc",
		},
	});

	return posts.map((post) => ({
		...post,
		id: post.id.toString(),
		authorId: post.authorId.toString(),
		title: post.title || "",
		content: post.content || "",
		author: {
			username: post.author.username,
			avatar: post.author.image || "",
			avatarFallback: "G",
		},
		subreddit: "t/general",
		postedAt: post.createdAt.toISOString(),
		stats: {
			likes: 0,
			comments: 0,
		},
	}));
}

export default async function HomePage() {
	const posts = await getPosts();

	return (
		<div className="flex">
			<div className="divide-y border-r flex-1 min-h-[calc(100vh-69px)]">
				{posts?.length ? (
					posts.map((post) => <PostBox key={post.id} post={post} />)
				) : (
					<div className="flex items-center justify-center h-full my-16">
						<p className="text-gray-500">No posts found</p>
					</div>
				)}
			</div>
			<Sidebar />
		</div>
	);
}

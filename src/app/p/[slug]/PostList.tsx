"use client";

import { Post } from "@prisma/client";
import { PostCard } from "./PostCard";

interface PostListProps {
	posts: (Post & {
		author: {
			id: number;
			username: string;
			image: string | null;
		};
		communities: {
			id: number;
			name: string;
			slug: string;
			image: string | null;
		}[];
		_count: {
			pollOptions: number;
		};
	})[];
}

export function PostList({ posts }: PostListProps) {
	if (posts.length === 0) {
		return (
			<div className="text-center py-8">
				<p className="text-gray-500">No posts yet in this community.</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
}

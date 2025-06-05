"use client";

import PostBox from "@/components/feed/Post";
import { posts } from "@/lib/data";
import Sidebar from "./views/Sidebar";

export default function HomePage() {
	return (
		<div className="flex">
			<div className="divide-y border-r flex-1">
				{posts.map((post) => (
					<PostBox key={post.id} post={post} />
				))}
			</div>
			<Sidebar />
		</div>
	);
}

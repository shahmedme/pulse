import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Post, posts } from "@/lib/data";
import _ from "lodash";

export default function RecentPosts() {
	return (
		<div className="p-4">
			<div className="flex items-center justify-between mb-4">
				<h3 className="font-medium">Recent Posts</h3>
			</div>
			{_.cloneDeep(posts)
				.reverse()
				.slice(0, 4)
				.map((post) => (
					<RecentPost key={post.id} post={post} />
				))}
		</div>
	);
}

function RecentPost({ post }: { post: Post }) {
	return (
		<div className="mb-4 pb-4 border-b">
			<div className="flex items-center gap-2 mb-2">
				<Avatar className="w-6 h-6">
					<AvatarImage src="/placeholder.svg?height=24&width=24" />
					<AvatarFallback>A</AvatarFallback>
				</Avatar>
				<span className="text-sm">s/anime</span>
			</div>
			<h4 className="text-sm font-medium mb-1">{post.title}</h4>
			<div className="flex items-start justify-between">
				<p className="text-xs">{_.truncate(post.content, { length: 110 })}</p>
				{post.attachments?.map((attachment, id) => (
					<div
						key={id}
						className="w-16 min-w-16 h-16 min-h-16 bg-gray-200 rounded"
					></div>
				))}
			</div>
		</div>
	);
}

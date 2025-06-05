"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Post } from "@/lib/data";
import {
	AlertTriangle,
	MessageCircle,
	MoreHorizontal,
	Share2,
	ThumbsUp,
} from "lucide-react";

type PostProps = {
	post: Post;
};

export default function PostBox({ post }: PostProps) {
	const { author, subreddit, postedAt, title, content, attachments, stats } =
		post;

	return (
		<div className="p-4">
			<div className="flex items-center gap-2 mb-2">
				<Avatar className="w-8 h-8 cursor-pointer">
					<AvatarImage src={author.avatar} />
					<AvatarFallback>{author.avatarFallback}</AvatarFallback>
				</Avatar>
				<span className="font-medium cursor-pointer">{subreddit}</span>
				<span className="text-sm text-gray-500">· {postedAt}</span>
				<div className="ml-auto flex items-center gap-2">
					<Button
						size="sm"
						className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-4 cursor-pointer"
					>
						Follow
					</Button>
					<Button variant="ghost" size="icon" className="cursor-pointer">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</div>
			</div>
			<h2 className="text-lg font-medium mb-1 cursor-pointer">{title}</h2>
			<p className="text-sm mb-2">{content}</p>
			{attachments?.map((attachment, id) => (
				<div
					key={id}
					className="bg-gray-100 rounded-lg overflow-hidden mb-3 cursor-pointer"
				>
					<div className="aspect-video h-[300px]"></div>
				</div>
			))}
			<div className="flex items-center gap-4 text-sm text-gray-600">
				<div className="flex items-center gap-1 cursor-pointer">
					<ThumbsUp className="h-4 w-4" />
					<span>{stats.likes}</span>
				</div>
				<div className="flex items-center gap-1 cursor-pointer">
					<MessageCircle className="h-4 w-4" />
					<span>{stats.comments}</span>
				</div>
				<Button variant="ghost" size="sm" className="text-sm cursor-pointer">
					<Share2 className="mr-1 h-4 w-4" />
					Share
				</Button>
				<Button variant="ghost" size="sm">
					<AlertTriangle className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}

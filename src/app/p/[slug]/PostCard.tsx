"use client";

import { Post } from "@prisma/client";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Globe } from "lucide-react";
import { formatDate } from "@/utils/formatter";

interface PostCardProps {
	post: Post & {
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
	};
}

export function PostCard({ post }: PostCardProps) {
	const community = post.communities[0];

	return (
		<Card className="p-4">
			<div className="flex items-start space-x-4">
				<Avatar className="h-10 w-10">
					<AvatarImage src={post.author.image || undefined} />
					<AvatarFallback>
						{post.author.username.slice(0, 2).toUpperCase()}
					</AvatarFallback>
				</Avatar>
				<div className="flex-1 space-y-1">
					<div className="flex items-center space-x-2 text-sm text-gray-500">
						<Link
							href={`/p/${community.slug}`}
							className="flex items-center hover:underline"
						>
							{community.image ? (
								<img
									src={community.image}
									alt={community.name}
									className="mr-1 h-4 w-4 rounded-full"
								/>
							) : (
								<Globe className="mr-1 h-4 w-4 text-indigo-600" />
							)}
							p/{community.slug}
						</Link>
						<span>•</span>
						<span>Posted by u/{post.author.username}</span>
						<span>•</span>
						<span>{formatDate(post.createdAt.toISOString())} ago</span>
					</div>
					<Link href={`/p/${community.slug}/comments/${post.id}`}>
						<h2 className="text-lg font-semibold hover:underline">
							{post.title}
						</h2>
					</Link>
					{post.content && (
						<p className="text-gray-700 line-clamp-3">{post.content}</p>
					)}
					{post.type === "POLL" && (
						<p className="text-sm text-gray-500">
							{post._count.pollOptions} poll options
						</p>
					)}
				</div>
			</div>
		</Card>
	);
}

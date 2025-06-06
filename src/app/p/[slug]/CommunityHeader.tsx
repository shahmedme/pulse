"use client";

import { Community } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

interface CommunityHeaderProps {
	community: Community & {
		_count: {
			members: number;
			posts: number;
		};
	};
}

export function CommunityHeader({ community }: CommunityHeaderProps) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center space-x-4">
				{community.image ? (
					<img
						src={community.image}
						alt={community.name}
						className="h-16 w-16 rounded-full"
					/>
				) : (
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100">
						<Globe className="h-8 w-8 text-indigo-600" />
					</div>
				)}
				<div>
					<h1 className="text-2xl font-bold">{community.name}</h1>
					<p className="text-sm text-gray-500">
						p/{community.slug} • {community._count.members} members •{" "}
						{community._count.posts} posts
					</p>
				</div>
			</div>
			<Button>Join Community</Button>
		</div>
	);
}

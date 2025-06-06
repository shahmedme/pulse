"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Search, X } from "lucide-react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

interface Community {
	id: number;
	name: string;
	icon: string;
}

const communities: Community[] = [
	{ id: 1, name: "Programming", icon: "P" },
	{ id: 2, name: "Technology", icon: "T" },
	{ id: 3, name: "Science", icon: "S" },
	{ id: 4, name: "Art", icon: "A" },
	{ id: 5, name: "Music", icon: "M" },
	{ id: 6, name: "Gaming", icon: "G" },
	{ id: 7, name: "Sports", icon: "S" },
	{ id: 8, name: "Movies", icon: "M" },
];

export default function CommunitySelect() {
	const [selectedCommunities, setSelectedCommunities] = useState<Community[]>(
		[]
	);
	const [searchQuery, setSearchQuery] = useState("");

	const filteredCommunities = useMemo(() => {
		return communities.filter((community) =>
			community.name.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery]);

	const toggleCommunity = (community: Community) => {
		setSelectedCommunities((prev) => {
			const isSelected = prev.some((c) => c.id === community.id);
			if (isSelected) {
				return prev.filter((c) => c.id !== community.id);
			} else {
				return [...prev, community];
			}
		});
	};

	const removeCommunity = (communityId: number) => {
		setSelectedCommunities((prev) => prev.filter((c) => c.id !== communityId));
	};

	const visibleCommunities = selectedCommunities.slice(0, 2);
	const hiddenCount = selectedCommunities.length - 2;

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="rounded-full bg-gray-100 border-gray-200 text-gray-800 flex items-center gap-2 pl-2 pr-4 py-4 cursor-pointer min-w-[200px]"
				>
					{selectedCommunities.length > 0 ? (
						<div className="flex items-center gap-1 flex-wrap">
							{visibleCommunities.map((community) => (
								<Badge
									key={community.id}
									variant="secondary"
									className="flex items-center gap-1 px-2 py-1"
								>
									<div className="bg-gray-800 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
										{community.icon}
									</div>
									{community.name}
									<button
										onClick={(e) => {
											e.stopPropagation();
											removeCommunity(community.id);
										}}
										className="ml-1 bg-gray-200 rounded-full p-0.5"
									>
										<X className="h-3 w-3" />
									</button>
								</Badge>
							))}
							{hiddenCount > 0 && (
								<Badge variant="secondary" className="px-2 py-1">
									+{hiddenCount} more
								</Badge>
							)}
						</div>
					) : (
						<>
							<div className="bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">
								P
							</div>
							<span className="font-medium">Select communities</span>
						</>
					)}
					<ChevronDown className="ml-1 h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0" align="start">
				<div className="p-2 border-b">
					<div className="relative">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							placeholder="Search communities..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8"
						/>
					</div>
				</div>
				<div className="py-2 max-h-[300px] overflow-y-auto">
					{filteredCommunities.length > 0 ? (
						filteredCommunities.map((community) => {
							const isSelected = selectedCommunities.some(
								(c) => c.id === community.id
							);
							return (
								<button
									key={community.id}
									className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 ${
										isSelected ? "bg-gray-50" : ""
									}`}
									onClick={() => toggleCommunity(community)}
								>
									<div className="bg-gray-800 text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold text-xs">
										{community.icon}
									</div>
									<span className="text-sm">{community.name}</span>
									{isSelected && (
										<div className="ml-auto">
											<div className="w-2 h-2 bg-blue-500 rounded-full" />
										</div>
									)}
								</button>
							);
						})
					) : (
						<div className="px-4 py-2 text-sm text-gray-500 text-center">
							No communities found
						</div>
					)}
				</div>
			</PopoverContent>
		</Popover>
	);
}

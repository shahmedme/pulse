"use client";

import { Button } from "@/components/ui/button";
import { useGetCommunitiesQuery } from "@/store/apis/communityApi";
import { Globe } from "lucide-react";
import Link from "next/link";

export default function Communities() {
	const { data: communities, isLoading, error } = useGetCommunitiesQuery();

	return (
		<div className="mt-6">
			<div className="flex items-center justify-between mb-2">
				<h3 className="font-medium">Communities</h3>
				{/* <ChevronDown className="h-4 w-4" /> */}
			</div>
			<div className="space-y-1">
				{communities?.length ? (
					communities?.map(({ id, image, name, slug }) => (
						<Link href={`/p/${slug}`} key={id}>
							<Button
								variant="ghost"
								className="w-full justify-start cursor-pointer"
							>
								{image ? (
									<img src={image} alt={name} className="mr-2 h-4 w-4" />
								) : (
									<Globe className="text-indigo-600 mr-2" />
								)}
								p/{slug}
							</Button>
						</Link>
					))
				) : isLoading ? (
					<div className="space-y-1">
						{[...Array(5)].map((_, i) => (
							<div
								key={i}
								className="h-8 w-full animate-pulse bg-gray-200 rounded"
							/>
						))}
					</div>
				) : error ? (
					<div className="text-sm">Failed to load communities</div>
				) : null}
			</div>
		</div>
	);
}

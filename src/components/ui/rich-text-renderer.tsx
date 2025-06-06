"use client";

import { cn } from "@/utils";
import { useState } from "react";

interface RichTextRendererProps {
	content: string;
	className?: string;
	truncate?: boolean;
}

export default function RichTextRenderer({
	content,
	className,
	truncate = false,
}: RichTextRendererProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={className}>
			<article
				dangerouslySetInnerHTML={{ __html: content }}
				style={{
					display: "-webkit-box",
					WebkitLineClamp: truncate && !isExpanded ? 5 : "none",
					WebkitBoxOrient: "vertical",
					overflow: truncate && !isExpanded ? "hidden" : "visible",
					textOverflow: "clip",
				}}
				className={cn(
					"cursor-pointer",
					truncate && !isExpanded ? "[&>*:last-child]:after:content-none" : ""
				)}
				onClick={toggleExpand}
			/>
			{truncate && !isExpanded && (
				<span
					onClick={toggleExpand}
					className="h-[30px] flex items-end cursor-pointer text-[#4f39f6] hover:text-blue-800 text-sm font-medium bg-white"
				>
					see more
				</span>
			)}
		</div>
	);
}

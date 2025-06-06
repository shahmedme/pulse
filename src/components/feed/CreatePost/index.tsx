"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCreatePostMutation } from "@/store/apis/postApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CommunitySelect from "./CommunitySelect";
import PostArticle from "./PostArticle";
import PostLink from "./PostLink";
import PostMedia from "./PostMedia";
import PostPoll from "./PostPoll";
import PostText from "./PostText";
import { PostFormData, postSchema } from "./types";
import { toast } from "sonner";
import { cn } from "@/utils";

const postTypes = [
	{
		label: "Text",
		value: PostType.TEXT,
		isUpcoming: false,
	},
	{
		label: "Article",
		value: PostType.ARTICLE,
		isUpcoming: true,
	},
	{
		label: "Images & Video",
		value: PostType.IMAGES,
		isUpcoming: true,
	},
	{
		label: "Link",
		value: PostType.LINK,
		isUpcoming: true,
	},
	{
		label: "Poll",
		value: PostType.POLL,
		isUpcoming: true,
	},
] as const;

export default function CreatePost() {
	const [activeTab, setActiveTab] = useState<PostType>(PostType.TEXT);
	const [createPost, { isLoading }] = useCreatePostMutation();
	const router = useRouter();

	const methods = useForm<PostFormData>({
		resolver: zodResolver(postSchema),
		defaultValues: {
			type: activeTab,
			content: "",
			communities: [],
			tags: [],
		},
	});

	const onSubmit = async (data: PostFormData) => {
		try {
			const result = await createPost(data).unwrap();

			if (result.success) {
				router.push("/");
				toast.success("Post created successfully");
			}
		} catch (error) {
			console.error("Error creating post:", error);
			toast.error("Error creating post");
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="px-12 py-6">
				<Tabs
					defaultValue={activeTab}
					className="mb-6"
					onValueChange={(value) => {
						setActiveTab(value as PostType);
						methods.setValue("type", value as PostType);
					}}
				>
					<TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 h-auto">
						{postTypes.map((postType) => (
							<TabsTrigger
								key={postType.value}
								value={postType.value}
								className="rounded-none border-b-2 border-transparent data-[state=active]:border-b-[#4f39f6] data-[state=active]:text-[#4f39f6] data-[state=active]:shadow-none px-4 py-2 font-medium cursor-pointer"
								disabled={postType.isUpcoming}
							>
								{postType.label}
								<Badge
									variant="outline"
									className={cn(!postType.isUpcoming && "invisible")}
								>
									🚧
								</Badge>
							</TabsTrigger>
						))}
					</TabsList>
					<PostText />
					<PostArticle />
					<PostMedia />
					<PostLink />
					<PostPoll />
				</Tabs>

				<div className="flex justify-between items-center gap-3 mt-4">
					<div className="flex gap-3">
						<CommunitySelect />
						<Button
							variant="outline"
							type="button"
							className="rounded-full bg-gray-100 border-gray-200 text-gray-500 text-sm cursor-pointer"
						>
							Add tags
						</Button>
					</div>

					<div className="flex gap-3">
						<Button
							variant="outline"
							type="button"
							className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 cursor-pointer"
							disabled={isLoading}
						>
							Save Draft
						</Button>
						<Button
							type="submit"
							variant="outline"
							className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-200 cursor-pointer"
							disabled={isLoading}
						>
							{isLoading ? "Posting..." : "Post"}
						</Button>
					</div>
				</div>
			</form>
		</FormProvider>
	);
}

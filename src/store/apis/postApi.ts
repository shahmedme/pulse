import { MediaType, PostType } from "@prisma/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Media {
	id: number;
	url: string;
	type: MediaType;
	postId: number;
	createdAt: string;
	updatedAt: string;
}

export interface Post {
	id: number;
	title?: string;
	content?: string;
	type: PostType;
	media: Media[];
	linkUrl?: string;
	pollOptions?: string[];
	tags?: string[];
	authorId: number;
	createdAt: string;
	updatedAt: string;
}

export interface CreatePostRequest {
	title?: string;
	content?: string;
	type: PostType;
	media?: Array<{
		url: string;
		type: MediaType;
	}>;
	linkUrl?: string;
	pollOptions?: {
		text: string;
	}[];
	tags?: string[];
}

export const postApi = createApi({
	reducerPath: "postApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		createPost: builder.mutation<
			{ success: boolean; data: Post },
			CreatePostRequest
		>({
			query: (post) => ({
				url: "/posts",
				method: "POST",
				body: post,
			}),
			invalidatesTags: ["Post"],
		}),
	}),
});

export const { useCreatePostMutation } = postApi;

import { MediaType, PostType } from "@prisma/client";
import { z } from "zod";

const basePostSchema = z.object({
	communities: z.array(z.number()).optional(),
	tags: z.array(z.string()).optional(),
});

export const textPostSchema = basePostSchema.extend({
	content: z.string().min(1, "Content is required"),
});

export const articlePostSchema = basePostSchema.extend({
	title: z.string().min(1, "Title is required"),
	content: z.string().min(1, "Content is required"),
});

export const mediaPostSchema = basePostSchema.extend({
	content: z.string().optional(),
	media: z
		.array(
			z.object({
				url: z.string().url(),
				type: z.enum([
					MediaType.AUDIO,
					MediaType.VIDEO,
					MediaType.IMAGE,
					MediaType.DOCUMENT,
				]),
			})
		)
		.min(1, "At least one media is required"),
});

export const linkPostSchema = basePostSchema.extend({
	title: z.string().min(1, "Title is required"),
	content: z.string().optional(),
	linkUrl: z.string().url("Invalid URL"),
});

export const pollPostSchema = basePostSchema.extend({
	title: z.string().min(1, "Title is required"),
	content: z.string().optional(),
	pollOptions: z
		.array(
			z.object({
				text: z.string().min(1, "Option text is required"),
			})
		)
		.min(2, "At least 2 options are required")
		.max(6, "Maximum 6 options allowed"),
});

export const postSchema = z.discriminatedUnion("type", [
	z.object({ type: z.literal(PostType.TEXT) }).merge(textPostSchema),
	z.object({ type: z.literal(PostType.ARTICLE) }).merge(articlePostSchema),
	z.object({ type: z.literal(PostType.IMAGES) }).merge(mediaPostSchema),
	z.object({ type: z.literal(PostType.LINK) }).merge(linkPostSchema),
	z.object({ type: z.literal(PostType.POLL) }).merge(pollPostSchema),
]);

export type PostFormData = z.infer<typeof postSchema>;

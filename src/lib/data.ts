import { Box, Code, Globe, Layers, Monitor, Smile } from "lucide-react";

export interface Attachment {
	type: string;
	url: string;
}

export interface Post {
	id: string;
	author: {
		username: string;
		avatar: string;
		avatarFallback: string;
	};
	subreddit: string;
	postedAt: string;
	title: string;
	content?: string;
	link?: string;
	hasImage?: boolean;
	attachments?: Attachment[];
	stats: {
		likes: number;
		comments: number;
	};
}

export const posts: Post[] = [
	{
		id: "1",
		author: {
			username: "techbengal",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "T",
		},
		subreddit: "s/techbengal",
		postedAt: "6 hr ago",
		title: "বাংলাদেশে AI স্টার্টআপ এর ভবিষ্যৎ - একটি বিশ্লেষণ",
		content:
			"আজকাল বাংলাদেশে AI স্টার্টআপ এর সংখ্যা বাড়ছে। কিন্তু এর ভবিষ্যৎ কেমন হবে? আমাদের দেশে AI প্রজেক্টগুলো কি সফল হবে? এই পোস্টে আমরা আলোচনা করব বাংলাদেশের AI ইকোসিস্টেম, চ্যালেঞ্জগুলো এবং সম্ভাবনা নিয়ে।",
		attachments: [
			{
				type: "image",
				url: "/placeholder.svg",
			},
		],
		stats: {
			likes: 245,
			comments: 56,
		},
	},
	{
		id: "2",
		author: {
			username: "codingbengal",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "C",
		},
		subreddit: "s/codingbengal",
		postedAt: "6 hr ago",
		title: "বাংলায় প্রোগ্রামিং শেখার সেরা রিসোর্সগুলো",
		content:
			"আপনি কি বাংলায় প্রোগ্রামিং শিখতে চান? এই পোস্টে আমি বাংলায় প্রোগ্রামিং শেখার সেরা রিসোর্সগুলো শেয়ার করব। পাইথন, জাভাস্ক্রিপ্ট, জাভা - সব ল্যাঙ্গুয়েজের জন্য বাংলা টিউটোরিয়াল, বই এবং অনলাইন কোর্সের লিস্ট দেওয়া আছে।",
		stats: {
			likes: 892,
			comments: 134,
		},
	},
	{
		id: "3",
		author: {
			username: "startupbengal",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "S",
		},
		subreddit: "s/startupbengal",
		postedAt: "6 hr ago",
		title: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		content:
			"২০২৪ সালে বাংলাদেশের টেক স্টার্টআপ স্কিন কেমন দেখাচ্ছে? এই পোস্টে আমরা আলোচনা করব বর্তমান ট্রেন্ড, সফল স্টার্টআপগুলো, এবং নতুন উদ্যোক্তাদের জন্য টিপস।",
		hasImage: true,
		attachments: [
			{
				type: "image",
				url: "/placeholder.svg",
			},
		],
		stats: {
			likes: 567,
			comments: 89,
		},
	},
	{
		id: "4",
		author: {
			username: "cyberbengal",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "C",
		},
		subreddit: "s/cyberbengal",
		postedAt: "6 hr ago",
		title: "সাইবার সিকিউরিটি: বাংলাদেশের প্রেক্ষাপটে",
		content:
			"বাংলাদেশে সাইবার সিকিউরিটি নিয়ে আলোচনা। কিভাবে নিজেকে সুরক্ষিত রাখবেন, সাইবার অ্যাটাক থেকে বাঁচবেন, এবং সাইবার সিকিউরিটি ক্যারিয়ার গড়বেন - সবকিছু নিয়ে বিস্তারিত আলোচনা।",
		stats: {
			likes: 423,
			comments: 67,
		},
	},
	{
		id: "5",
		author: {
			username: "blockchainbd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "B",
		},
		subreddit: "s/blockchainbd",
		postedAt: "5 hr ago",
		title: "বাংলাদেশে ক্রিপ্টোকারেন্সি: বর্তমান অবস্থা ও ভবিষ্যৎ",
		content:
			"বাংলাদেশে ক্রিপ্টোকারেন্সি নিয়ে আলোচনা। বর্তমান নিয়ন্ত্রণ, সম্ভাবনা, এবং ভবিষ্যৎ পরিকল্পনা নিয়ে বিস্তারিত আলোচনা। কিভাবে বাংলাদেশের ডেভেলপাররা ব্লকচেইন প্রজেক্টে কাজ করতে পারেন?",
		attachments: [
			{
				type: "image",
				url: "/placeholder.svg",
			},
		],
		stats: {
			likes: 378,
			comments: 92,
		},
	},
	{
		id: "6",
		author: {
			username: "webdevbd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "W",
		},
		subreddit: "s/webdevbd",
		postedAt: "4 hr ago",
		title: "Next.js 14: বাংলায় সম্পূর্ণ টিউটোরিয়াল",
		content:
			"Next.js 14 এর নতুন ফিচারগুলো নিয়ে বাংলায় বিস্তারিত আলোচনা। Server Components, App Router, এবং নতুন API ফিচারগুলো কিভাবে ব্যবহার করবেন?",
		stats: {
			likes: 567,
			comments: 145,
		},
	},
	{
		id: "7",
		author: {
			username: "mobilebd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "M",
		},
		subreddit: "s/mobilebd",
		postedAt: "3 hr ago",
		title: "ফ্লাটার vs রিয়্যাক্ট নেটিভ: বাংলাদেশের প্রেক্ষাপটে",
		content:
			"বাংলাদেশের মার্কেটে মোবাইল অ্যাপ ডেভেলপমেন্টের জন্য কোন ফ্রেমওয়ার্ক বেছে নেবেন? ফ্লাটার এবং রিয়্যাক্ট নেটিভের তুলনামূলক বিশ্লেষণ।",
		attachments: [
			{
				type: "image",
				url: "/placeholder.svg",
			},
		],
		stats: {
			likes: 432,
			comments: 87,
		},
	},
	{
		id: "8",
		author: {
			username: "databd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "D",
		},
		subreddit: "s/databd",
		postedAt: "2 hr ago",
		title: "ডাটা সায়েন্স: বাংলাদেশের চাকরির বাজারে সম্ভাবনা",
		content:
			"বাংলাদেশে ডাটা সায়েন্স ক্যারিয়ার নিয়ে আলোচনা। কি কি স্কিল প্রয়োজন? কোথায় শিখবেন? এবং কেমন বেতন পাবেন?",
		stats: {
			likes: 789,
			comments: 156,
		},
	},
	{
		id: "9",
		author: {
			username: "cloudbd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "C",
		},
		subreddit: "s/cloudbd",
		postedAt: "1 hr ago",
		title: "AWS সার্টিফিকেশন: বাংলায় গাইড",
		content:
			"AWS সার্টিফিকেশন কিভাবে নিবেন? বাংলায় বিস্তারিত গাইড। Solutions Architect, Developer, এবং SysOps অ্যাডমিন সার্টিফিকেশন প্রস্তুতি।",
		attachments: [
			{
				type: "image",
				url: "/placeholder.svg",
			},
		],
		stats: {
			likes: 654,
			comments: 123,
		},
	},
	{
		id: "10",
		author: {
			username: "devopsbd",
			avatar: "/placeholder.svg?height=32&width=32",
			avatarFallback: "D",
		},
		subreddit: "s/devopsbd",
		postedAt: "30 min ago",
		title: "ডক্কার এবং কুবারনেটিস: বাংলায় টিউটোরিয়াল",
		content:
			"ডক্কার এবং কুবারনেটিস নিয়ে বাংলায় বিস্তারিত টিউটোরিয়াল। কন্টেইনারাইজেশন থেকে শুরু করে ক্লাস্টার ম্যানেজমেন্ট পর্যন্ত সবকিছু।",
		stats: {
			likes: 445,
			comments: 98,
		},
	},
];

export interface Subreddit {
	id: string;
	name: string;
	description: string;
	members: number;
	icon: React.ElementType;
}
export const subreddits: Subreddit[] = [
	{
		id: "1",
		name: "s/techbengal",
		description: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		members: 1000,
		icon: Monitor,
	},
	{
		id: "2",
		name: "s/codingbengal",
		description: "বাংলায় প্রোগ্রামিং শেখার সেরা রিসোর্সগুলো",
		members: 1000,
		icon: Code,
	},
	{
		id: "3",
		name: "s/startupbengal",
		description: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		members: 1000,
		icon: Globe,
	},
	{
		id: "4",
		name: "s/techbengal",
		description: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		members: 1000,
		icon: Smile,
	},
	{
		id: "5",
		name: "s/techbengal",
		description: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		members: 1000,
		icon: Layers,
	},
	{
		id: "6",
		name: "s/techbengal",
		description: "বাংলাদেশের টেক স্টার্টআপ স্কিন - ২০২৪",
		members: 1000,
		icon: Box,
	},
];

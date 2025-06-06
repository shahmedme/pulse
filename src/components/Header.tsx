"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { setIsAuthRequired, clearUser } from "@/store/slices/authSlice";
import { MessageCircle, Plus, Search } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function Header() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { data: session } = useSession();

	const handleCreate = () => {
		if (session) {
			router.push("/create");
		} else {
			dispatch(setIsAuthRequired(true));
		}
	};

	return (
		<div>
			<div className="fixed top-0 right-0 w-[calc(100%-256px)] z-50 bg-white p-4 border-b flex items-center justify-between">
				<div className="relative w-full max-w-md">
					<Input
						type="text"
						placeholder="Search pulse"
						className="pl-10 rounded-full focus-visible:ring-0"
					/>
					<Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
				</div>
				<div className="flex items-center gap-3">
					<Button
						className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
						onClick={handleCreate}
					>
						<Plus className="mr-1 h-4 w-4" />
						Create
					</Button>
					<Button variant="ghost" size="icon" className="cursor-pointer">
						<MessageCircle className="h-5 w-5" />
					</Button>
					<Button variant="ghost" size="icon" className="cursor-pointer">
						<Bell className="h-5 w-5" />
					</Button>
					<UserDropdown />
				</div>
			</div>
			<div className="h-[69px]" />
		</div>
	);
}

function UserDropdown() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { data: session } = useSession();

	console.log({ session });
	const router = useRouter();
	const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await signOut({ redirect: false });
			dispatch(clearUser());
			toast.success("Logged out successfully");
			router.push("/");
		} catch (error) {
			toast.error("Failed to logout");
			console.error("Logout error:", error);
		}
	};

	const handleAvatarClick = () => {
		if (session?.user) {
			setIsDropdownOpen(true);
		} else {
			dispatch(setIsAuthRequired(true));
		}
	};

	return (
		<DropdownMenu
			open={isDropdownOpen}
			onOpenChange={(open) => {
				if (!open) {
					setIsDropdownOpen(false);
				}
			}}
		>
			<DropdownMenuTrigger asChild onClick={handleAvatarClick}>
				<Avatar className="cursor-pointer">
					<AvatarImage
						src={session?.user?.image || "/placeholder.svg?height=32&width=32"}
					/>
					<AvatarFallback>
						{session?.user?.firstName?.[0] || "U"}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuLabel className="px-1 py-0 font-normal">
					<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">
								{session?.user?.firstName} {session?.user?.lastName}
							</span>
							<span className="text-muted-foreground truncate text-xs">
								@{session?.user?.username}
							</span>
						</div>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => router.push("/profile")}
					>
						Profile
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => router.push("/reading-list")}
					>
						Reading List
					</DropdownMenuItem>
					<DropdownMenuItem
						className="cursor-pointer"
						onClick={() => router.push("/settings")}
					>
						Settings
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

function Bell(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
			<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
		</svg>
	);
}

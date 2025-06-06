"use client";

import { Button } from "@/components/ui/button";
import { Home, Newspaper, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Communities from "./Communities";

const tabs = [
	{
		label: "Home",
		icon: Home,
		href: "/",
	},
	{
		label: "Popular",
		icon: TrendingUp,
		href: "/popular",
	},
	{
		label: "Explore",
		icon: Users,
		href: "/explore",
	},
	{
		label: "Feeds",
		icon: Newspaper,
		href: "/feeds",
	},
];

export default function Sidebar() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<div>
			<div className="w-64 border-r fixed top-0 left-0 h-full bg-white">
				<div className="p-4">
					<div className="flex items-center gap-2 mb-6 ml-2.5">
						<Link
							href="/"
							className="text-xl font-bold flex items-center gap-2"
						>
							<span className="text-indigo-600">📟</span> Pulse
						</Link>
					</div>

					<nav className="space-y-1">
						{tabs.map(({ label, icon: Icon, href }) => (
							<Button
								key={label}
								variant={pathname === href ? "secondary" : "ghost"}
								className="w-full justify-start cursor-pointer"
								onClick={() => router.push(href)}
							>
								<Icon className="mr-2 h-4 w-4 text-indigo-600" />
								{label}
							</Button>
						))}
					</nav>

					<Communities />
				</div>
			</div>
			<div className="w-64" />
		</div>
	);
}

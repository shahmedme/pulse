"use client";

import { Button } from "@/components/ui/button";
import { subreddits } from "@/lib/data";
import { ChevronDown, Home, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
	const [activeTab, setActiveTab] = useState("home");

	return (
		<div>
			<div className="w-64 border-r fixed top-0 left-0 h-full bg-white">
				<div className="p-4">
					<div className="flex items-center gap-2 mb-6">
						<Link
							href="/"
							className="text-xl font-bold flex items-center gap-2"
						>
							<span className="text-indigo-600">📟</span> Pulse
						</Link>
					</div>

					<nav className="space-y-1">
						<Button
							variant={activeTab === "home" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("home")}
						>
							<Home className="mr-2 h-4 w-4 text-indigo-600" />
							Home
						</Button>
						<Button
							variant={activeTab === "popular" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("popular")}
						>
							<TrendingUp className="mr-2 h-4 w-4 text-indigo-600" />
							Popular
						</Button>
						<Button
							variant={activeTab === "all" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("all")}
						>
							<Users className="mr-2 h-4 w-4 text-indigo-600" />
							Explore
						</Button>
						<Button
							variant={activeTab === "all" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("all")}
						>
							<Users className="mr-2 h-4 w-4 text-indigo-600" />
							Feeds
						</Button>
						<Button
							variant={activeTab === "popular" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("popular")}
						>
							<TrendingUp className="mr-2 h-4 w-4 text-indigo-600" />
							Popular
						</Button>
						<Button
							variant={activeTab === "all" ? "secondary" : "ghost"}
							className="w-full justify-start"
							onClick={() => setActiveTab("all")}
						>
							<Users className="mr-2 h-4 w-4 text-indigo-600" />
							Explore
						</Button>
					</nav>

					{/* <div className="mt-6">
						<div className="flex items-center justify-between mb-2">
							<h3 className="font-medium">Moderation</h3>
							<ChevronDown className="h-4 w-4" />
						</div>
						<div className="space-y-1">
							<Button variant="ghost" className="w-full justify-start">
								<Mail className="mr-2 h-4 w-4 text-indigo-600" />
								Mod Mail
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<HelpCircle className="mr-2 h-4 w-4 text-indigo-600" />
								Mod Queue
							</Button>
							<Button variant="ghost" className="w-full justify-start">
								<Star className="mr-2 h-4 w-4 text-indigo-600" />
								s/Mod
							</Button>
						</div>
					</div> */}

					<div className="mt-6">
						<div className="flex items-center justify-between mb-2">
							<h3 className="font-medium">Communities</h3>
							<ChevronDown className="h-4 w-4" />
						</div>
						<div className="space-y-1">
							{subreddits.map(({ id, icon: Icon, name }) => (
								<Button
									key={id}
									variant="ghost"
									className="w-full justify-start"
								>
									<Icon className="mr-2 h-4 w-4 text-indigo-600" />
									{name}
								</Button>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="w-64" />
		</div>
	);
}

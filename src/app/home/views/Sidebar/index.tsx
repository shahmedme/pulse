"use client";

import RecentPosts from "./RecentPosts";

export default function Sidebar() {
	return (
		<div>
			<div className="w-[320px] fixed top-[69px] right-0 h-full overflow-y-auto bg-white">
				<RecentPosts />
			</div>
			<div className="w-[320px]" />
		</div>
	);
}

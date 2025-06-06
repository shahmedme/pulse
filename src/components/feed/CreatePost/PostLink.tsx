import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { PostType } from "@prisma/client";

export default function PostLink() {
	return (
		<TabsContent value={PostType.LINK}>
			<div className="space-y-4">
				<Input placeholder="Title" className="border rounded-md p-4 h-11" />
				<Input placeholder="URL" className="border rounded-md p-4 h-11" />
			</div>
		</TabsContent>
	);
}

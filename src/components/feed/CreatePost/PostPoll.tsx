import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { PostType } from "@prisma/client";

export default function PostPoll() {
	return (
		<TabsContent value={PostType.POLL}>
			<div className="space-y-4">
				<Input placeholder="Title" className="border rounded-md p-4 h-11" />
				<div className="space-y-2">
					<Input placeholder="Option 1" className="border rounded-md p-4" />
					<Input placeholder="Option 2" className="border rounded-md p-4" />
				</div>
				<Button variant="outline">Add Option</Button>
			</div>
		</TabsContent>
	);
}

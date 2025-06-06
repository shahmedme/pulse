import { TabsContent } from "@/components/ui/tabs";
import { PostType } from "@prisma/client";

export default function PostMedia() {
	return (
		<TabsContent value={PostType.IMAGES}>
			<div className="h-64 flex items-center justify-center border-2 border-dashed rounded-md">
				<p className="text-gray-500">Upload images or videos</p>
			</div>
		</TabsContent>
	);
}

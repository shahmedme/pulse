import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { PostType } from "@prisma/client";
import {
	Bold,
	Code,
	Heading,
	ImageIcon,
	Italic,
	Link2,
	List,
	ListOrdered,
	MoreHorizontal,
	Quote,
	Strikethrough,
	Superscript,
	Table,
} from "lucide-react";
import { useState } from "react";

export default function PostArticle() {
	const [title, setTitle] = useState("");
	const [characterCount, setCharacterCount] = useState(0);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
		setCharacterCount(newTitle.length);
	};

	return (
		<TabsContent value={PostType.ARTICLE} className="mt-4">
			<div className="space-y-4">
				<div className="relative">
					<Input
						placeholder="Title*"
						className="border rounded-md p-4 h-11 text-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
						value={title}
						onChange={handleTitleChange}
						maxLength={300}
					/>
					<div className="absolute right-3 bottom-3 text-xs text-gray-500">
						{characterCount}/300
					</div>
				</div>

				<div className="border rounded-md">
					<div className="flex items-center gap-2 p-2 border-b">
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Bold className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Italic className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Strikethrough className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Superscript className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Heading className="h-4 w-4" />
						</Button>
						<div className="h-5 w-px bg-gray-300 mx-1"></div>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Link2 className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<List className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<ListOrdered className="h-4 w-4" />
						</Button>
						<div className="h-5 w-px bg-gray-300 mx-1"></div>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Quote className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Code className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<ImageIcon className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<Table className="h-4 w-4" />
						</Button>
						<Button variant="ghost" size="icon" className="h-8 w-8 rounded">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
						<div className="flex-grow"></div>
						<Button
							variant="link"
							className="text-xs font-medium text-gray-700"
						>
							Switch to Markdown Editor
						</Button>
					</div>
					<textarea
						className="w-full p-4 min-h-[200px] resize-none focus:outline-none"
						placeholder="Body text (optional)"
					></textarea>
				</div>
			</div>
		</TabsContent>
	);
}

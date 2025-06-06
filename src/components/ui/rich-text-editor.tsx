"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Button } from "@/components/ui/button";
import { Bold, Italic, List, ListOrdered } from "lucide-react";
import { cn } from "@/utils";

interface RichTextEditorProps {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	toolbarVisible?: boolean;
}

export default function RichTextEditor({
	value,
	onChange,
	placeholder,
	className,
	toolbarVisible,
}: RichTextEditorProps) {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: placeholder || "What's on your mind?",
			}),
		],
		content: value,
		editorProps: {
			attributes: {
				class: cn(
					"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
					"min-h-[200px] p-4",
					className
				),
			},
		},
		onUpdate: ({ editor }) => {
			onChange(editor.getHTML());
		},
	});

	if (!editor) {
		return null;
	}

	return (
		<div className="border rounded-md">
			{toolbarVisible && (
				<div className="border-b p-2 flex gap-1">
					<Button
						variant="ghost"
						size="sm"
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive("bold") ? "bg-gray-100" : ""}
					>
						<Bold className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive("italic") ? "bg-gray-100" : ""}
					>
						<Italic className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={editor.isActive("bulletList") ? "bg-gray-100" : ""}
					>
						<List className="h-4 w-4" />
					</Button>
					<Button
						variant="ghost"
						size="sm"
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={editor.isActive("orderedList") ? "bg-gray-100" : ""}
					>
						<ListOrdered className="h-4 w-4" />
					</Button>
				</div>
			)}
			<EditorContent editor={editor} />
		</div>
	);
}

RichTextEditor.defaultProps = {
	toolbarVisible: true,
};

"use client";

import { useFormContext } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { TabsContent } from "@/components/ui/tabs";
import { PostType } from "@prisma/client";
import { type FieldValues, type ControllerRenderProps } from "react-hook-form";
import RichTextEditor from "../../ui/rich-text-editor";

interface PostFormData extends FieldValues {
	content: string;
	communities: number[];
	tags?: string[];
}

export default function PostText() {
	const { control } = useFormContext<PostFormData>();

	return (
		<TabsContent value={PostType.TEXT}>
			<FormField
				control={control}
				name="content"
				render={({
					field,
				}: {
					field: ControllerRenderProps<PostFormData, "content">;
				}) => (
					<FormItem>
						<FormControl>
							<RichTextEditor
								value={field.value}
								onChange={field.onChange}
								placeholder="What's on your mind?"
								className="focus-visible:border-ring-none focus-visible:ring-0 text-sm"
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</TabsContent>
	);
}

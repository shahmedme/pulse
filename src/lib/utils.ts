import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function generateRandomString(length: number): string {
	const characters = "abcdefghijklmnopqrstuvwxyz";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

export async function generateUniqueUsername(
	firstName: string
): Promise<string> {
	const randomStr = generateRandomString(3);
	const baseUsername = firstName.slice(0, 6).toLowerCase();
	return baseUsername + randomStr + Date.now();
}

import AppWrapper from "@/components/AppWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import HolyLoader from "holy-loader";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pulse - Social Forum",
	description: "A modern social forum platform",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<HolyLoader color="#4f39f6" height="2px" zIndex={9999999} />
				<Providers>
					<AppWrapper>{children}</AppWrapper>
				</Providers>
			</body>
		</html>
	);
}

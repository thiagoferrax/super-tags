import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthorizationProvider from "../contexts/authorization/authorization-provider";
import MessageProvider from "../contexts/message/message-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Super Tags",
	description: "Super Tags App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt">
			<body className={inter.className}>
				<MessageProvider>
					<AuthorizationProvider>
						{children}
					</AuthorizationProvider>
				</MessageProvider>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
    title: "Haugen baugen",
    description: "Bageri haugen baugen",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`antialiased bg-neutral-50 text-neutral-800`}>
                <Header />
                <HamburgerMenuIcon className="p-4  " />
                <div className="max-w-screen-lg mx-auto px-4 pt-8 pb-16">{children}</div>
            </body>
        </html>
    );
}

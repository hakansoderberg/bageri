import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

export const metadata: Metadata = {
    title: "Hagabagarn",
    description: "Hagabagarn",
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
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@200;400;700&family=Inter:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased bg-primary text-primary min-h-screen flex flex-col">
                <Header />
                <div className="divider"></div>
                <main className="flex-1 max-w-screen-lg mx-auto px-4 md:px-0 pt-8 pb-8 md:pb-0">{children}</main>
                <div className="divider"></div>
                <Footer />
            </body>
        </html>
    );
}

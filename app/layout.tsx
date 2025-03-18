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
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&family=Cutive+Mono&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={`antialiased bg-secondary text-primary`}>
                <Header />
                <div className="max-w-screen-md mx-auto px-4 pt-8 pb-16">{children}</div>
                <Footer />
            </body>
        </html>
    );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

export const metadata: Metadata = {
    title: "Gärdehov restaurang & catering",
    description: "Gärdehov restaurang & catering",
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
            <body className="antialiased bg-navy text-gold min-h-screen flex flex-col">
                <Header />
                
                <main className="flex-1">{children}</main>
                
                <Footer />
            </body>
        </html>
    );
}

// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BulkBuddy — Built for Training",
    description:
        "A fast, no-bloat workout tracker for people who actually train. Log sets in seconds with freestyle or templates.",
    openGraph: {
        title: "BulkBuddy — Built for Training",
        description:
            "Fast, simple workout logging. No bloat. No distractions. Just training.",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
        </body>
        </html>
    );
}

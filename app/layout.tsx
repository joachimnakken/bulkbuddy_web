// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "BulkBuddy – Simple Workout Tracker for Real Training",
    description:
        "BulkBuddy is a fast, no-bloat workout tracker for iOS and Android. Log sets in seconds using freestyle or templates. Built for serious training.",
    openGraph: {
        title: "BulkBuddy – Simple Workout Tracker for Real Training",
        description:
            "BulkBuddy is a fast, no-bloat workout tracker for iOS and Android. Log sets in seconds using freestyle or templates. Built for serious training.",
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
        <head>
            <title>BulkBuddy — Built for Training</title>
            <meta
                name="description"
                content="A fast, no-bloat workout tracker for people who actually train. Log sets in seconds with freestyle or templates."
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        name: "BulkBuddy",
                        applicationCategory: "HealthApplication",
                        operatingSystem: "iOS, Android",
                        description: "A fast, no-bloat workout tracker for people who actually train. Log sets in seconds with freestyle or templates.",
                        url: "https://bulkbuddytrainer.com",
                        offers: {
                            "@type": "Offer",
                            price: "0",
                        },
                    }),
                }}
            />
        </head>
        <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
        </body>
        </html>
    );
}

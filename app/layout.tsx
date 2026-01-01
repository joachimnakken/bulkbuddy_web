// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";


const SITE_URL = "https://bulkbuddytrainer.com";


export const metadata: Metadata = {
    title: "BulkBuddy – Simple Workout Tracker for Real Training",
    description:
        "BulkBuddy is a fast, no-bloat workout tracker for iOS and Android. Log sets in seconds using freestyle or templates. Built for serious training.",
    metadataBase: new URL(SITE_URL),
    openGraph: {
        title: "BulkBuddy – Simple Workout Tracker for Real Training",
        description:
            "BulkBuddy is a fast, no-bloat workout tracker for iOS and Android. Log sets in seconds using freestyle or templates. Built for serious training.",
        type: "website",
        url: SITE_URL,
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

    const appSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "BulkBuddy",
        applicationCategory: "HealthApplication",
        operatingSystem: ["iOS", "Android"],
        description:
            "A fast, no-bloat workout tracker for people who actually train. Log sets in seconds with freestyle or templates.",
        url: SITE_URL,
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            url: SITE_URL,
        },
    };


    return (
        <html lang="en">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />
        </head>
        <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
        </body>
        </html>
    );
};


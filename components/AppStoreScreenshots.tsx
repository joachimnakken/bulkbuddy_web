// components/AppStoreScreenshots.tsx
"use client";

import { useMemo, useState } from "react";
import ScreenshotCarousel from "./ScreenshotCarousel";
import { PHONE_SCREENSHOTS } from "@/components/appstore_screenshots";


type Shot = { src: string; alt: string; label?: string };

function rangeShots(basePath: string, count: number, altPrefix: string): Shot[] {
    return Array.from({ length: count }).map((_, i) => {
        const n = String(i + 1).padStart(2, "0");
        return {
            src: `${basePath}/${n}.png`,
            alt: `${altPrefix} ${n}`,
            label: n,
        };
    });
}

export default function AppStoreScreenshots() {
    const tabs = useMemo(
        () => [
            {
                key: "phones",
                label: "Phone Screenshots",
                shots: rangeShots(
                    "/appstore_screenshots/phone",
                    6,
                    "Screenshot"
                ),
            },
        ],
        []
    );
    const [active, setActive] = useState(tabs[0]!.key);
    const current = tabs.find((t) => t.key === active) ?? tabs[0]!;

    return (
        <section className="w-full overflow-hidden">
            <div className="mt-5">
                <ScreenshotCarousel screenshots={PHONE_SCREENSHOTS} />
            </div>
        </section>
    );
}

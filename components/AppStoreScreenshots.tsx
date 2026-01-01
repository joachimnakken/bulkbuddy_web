"use client";

import ScreenshotCarousel from "./ScreenshotCarousel";
import { PHONE_SCREENSHOTS } from "@/components/appstore_screenshots";


export default function AppStoreScreenshots() {
    return (
        <section className="w-full overflow-hidden">
            <div className="mt-5">
                <ScreenshotCarousel screenshots={PHONE_SCREENSHOTS} />
            </div>
        </section>
    );
}

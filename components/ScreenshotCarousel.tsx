// components/ScreenshotCarousel.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Screenshot = {
    src: string;
    alt: string;
    label?: string; // small caption
};

type Props = {
    screenshots: Screenshot[];
    className?: string;
};

export default function ScreenshotCarousel({ screenshots, className }: Props) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const count = screenshots.length;

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        if (!track) return;

        const clamped = Math.max(0, Math.min(index, count - 1));
        const child = track.children.item(clamped) as HTMLElement | null;
        if (!child) return;

        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    };

    const next = () => scrollToIndex(activeIndex + 1);
    const prev = () => scrollToIndex(activeIndex - 1);

    // Update activeIndex based on scroll position (closest slide)
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let raf = 0;

        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const children = Array.from(track.children) as HTMLElement[];
                if (children.length === 0) return;

                const trackRect = track.getBoundingClientRect();
                const trackCenter = trackRect.left + trackRect.width / 2;

                let bestIndex = 0;
                let bestDistance = Number.POSITIVE_INFINITY;

                children.forEach((el, idx) => {
                    const r = el.getBoundingClientRect();
                    const center = r.left + r.width / 2;
                    const dist = Math.abs(center - trackCenter);
                    if (dist < bestDistance) {
                        bestDistance = dist;
                        bestIndex = idx;
                    }
                });

                setActiveIndex(bestIndex);
            });
        };

        track.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            cancelAnimationFrame(raf);
            track.removeEventListener("scroll", onScroll);
        };
    }, []);

    // Keyboard navigation
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
        }
        if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
        }
    };

    const canPrev = activeIndex > 0;
    const canNext = activeIndex < count - 1;

    const ariaLabel = useMemo(
        () => `App screenshots carousel. Slide ${activeIndex + 1} of ${count}.`,
        [activeIndex, count]
    );

    if (count === 0) return null;

    return (
        <section className={`max-w-full ${className || ''}`} aria-label={ariaLabel}>
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-sm font-medium text-white">Screenshots</p>
                    <p className="text-sm text-neutral-400">
                        Swipe, scroll, or use the arrows.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={prev}
                        disabled={!canPrev}
                        className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:border-neutral-600 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Previous screenshot"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        disabled={!canNext}
                        className="rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-semibold text-white hover:border-neutral-600 disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Next screenshot"
                    >
                        →
                    </button>
                </div>
            </div>

            <div
                ref={trackRef}
                tabIndex={0}
                onKeyDown={onKeyDown}
                className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 rounded-2xl pb-4 outline-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                aria-label="Screenshot track"
            >
                {screenshots.map((shot, idx) => (
                    <div
                        key={shot.src}
                        className="snap-center shrink-0"
                        aria-label={`Slide ${idx + 1} of ${count}`}
                    >
                        <div className="relative h-[520px] w-[260px] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:h-[620px] md:w-[310px]">
                            <Image
                                src={shot.src}
                                alt={shot.alt}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 260px, 310px"
                                priority={idx === 0}
                            />
                        </div>

                        {shot.label ? (
                            <p className="mt-2 text-center text-sm text-neutral-400">{shot.label}</p>
                        ) : null}
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="mt-2 flex items-center justify-center gap-2">
                {screenshots.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        onClick={() => scrollToIndex(idx)}
                        className={[
                            "h-2 w-2 rounded-full transition",
                            idx === activeIndex ? "bg-white" : "bg-neutral-700 hover:bg-neutral-500",
                        ].join(" ")}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );}

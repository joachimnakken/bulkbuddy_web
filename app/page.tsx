// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import AppStoreScreenshots from "@/components/AppStoreScreenshots";

const APP_STORE_URL = "https://apps.apple.com/app/id6450987816";
// const PLAY_STORE_URL = "https://play.google.com/store"; // TODO

export default function LandingPage() {
    return (
        <main className="mx-auto max-w-6xl px-6 py-12">
            {/* Header */}
            <header className="flex items-center justify-between">
                <Image
                    src="/main_white/Color_VariantsArtboard 32.svg"
                    alt="BulkBuddy"
                    width={160}
                    height={70}
                    priority
                />
                <nav className="hidden gap-6 text-sm text-neutral-400 md:flex">
                    <Link href="#features" className="hover:text-white">
                        Features
                    </Link>
                    <Link href="#philosophy" className="hover:text-white">
                        Philosophy
                    </Link>
                    <Link href="#download" className="hover:text-white">
                        Download
                    </Link>
                </nav>
            </header>

            {/* Hero */}
            <section className="mt-20 grid gap-12 md:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                        Built for training.
                        <br/>
                        Not for distractions.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg text-neutral-400">
                        BulkBuddy is a fast, no-bloat workout tracker designed for people who
                        actually train. Log sets in seconds, switch freely between exercises,
                        and keep your focus where it belongs — on lifting.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4" id="download">
                        <a
                            href={APP_STORE_URL}
                            className="rounded-xl bg-white px-6 py-3 font-semibold text-black hover:bg-neutral-200"
                        >
                            Download for iOS
                        </a>
                        {/*<a*/}
                        {/*    href={PLAY_STORE_URL}*/}
                        {/*    className="rounded-xl border border-neutral-800 px-6 py-3 font-semibold text-white hover:border-neutral-600"*/}
                        {/*>*/}
                        {/*    Get it on Android*/}
                        {/*</a>*/}
                    </div>

                    <p className="mt-4 text-sm text-neutral-500">
                        No subscriptions. No ads. No AI fluff.
                    </p>
                </div>
                <div className="mt-16 min-w-0">
                    <AppStoreScreenshots/>
                </div>
            </section>

            {/* Features */}
            <section
                id="features"
                className="mt-28 grid gap-8 md:grid-cols-3"
            >
                <Feature
                    title="Freestyle Training"
                    description="Pick exercises as you go. Log weight, bodyweight, reps, or time without friction."
                />
                <Feature
                    title="Routines"
                    description="Train from saved routines and jump between exercises when equipment is busy."
                />
                <Feature
                    title="Clear History"
                    description="Sessions, routines, and progress — organized so you can train smarter."
                />
            </section>

            {/* Philosophy */}
            <section
                id="philosophy"
                className="mt-28 max-w-3xl"
            >
                <h2 className="text-2xl font-semibold">
                    A simple philosophy
                </h2>
                <p className="mt-4 text-neutral-400">
                    Most workout apps try to do everything. BulkBuddy focuses on doing
                    one thing exceptionally well: making workout logging fast,
                    predictable, and satisfying.
                </p>
                <p className="mt-4 text-neutral-400">
                    No feeds. No social pressure. No unnecessary features. Just the tools
                    you need — and nothing you don’t.
                </p>
            </section>
            <section
                className="mt-28 max-w-3xl"

            >

            <h2>Simple workout tracker for real training</h2>
            <p>
                BulkBuddy is a simple workout tracker built for lifters who want speed and clarity.
                Log sets, track progress, and train without subscriptions or unnecessary features.
            </p>
            </section>

            {/* Footer */}
            <footer className="mt-28 border-t border-neutral-900 pt-8 text-sm text-neutral-500">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <span>© {new Date().getFullYear()} BulkBuddy</span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">
                            Privacy
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function Feature({
                     title,
                     description,
                 }: {
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-neutral-400">{description}</p>
        </div>
    );
}

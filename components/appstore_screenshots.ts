// components/appstore_screenshots.ts
export type AppScreenshot = {
    src: string;
    alt: string;
    label?: string;
};

export const PHONE_SCREENSHOTS: AppScreenshot[] = [
    {
        src: "/appstore_screenshots/phone/01_home_screen.png",
        alt: "BulkBuddy home screen",
        label: "Home",
    },
    {
        src: "/appstore_screenshots/phone/02_workout_logging_screen.png",
        alt: "Workout logging screen",
        label: "Log sets",
    },
    {
        src: "/appstore_screenshots/phone/03_simple_weight_input_screen.png",
        alt: "Simple weight input screen",
        label: "Weight input",
    },
    {
        src: "/appstore_screenshots/phone/04_routine_screen.png",
        alt: "Routines / templates screen",
        label: "Routines",
    },
    {
        src: "/appstore_screenshots/phone/05_view_latest_sets.png",
        alt: "View latest sets screen",
        label: "Latest sets",
    },
    {
        src: "/appstore_screenshots/phone/06_200_pluss_exercises_screen_create_your_own.png",
        alt: "Exercise list screen",
        label: "Exercises",
    },
    {
        src: "/appstore_screenshots/phone/07_settings_screen.png",
        alt: "Settings screen",
        label: "Settings",
    },
];

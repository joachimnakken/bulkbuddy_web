export default function PrivacyPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <h1 className="mb-8 text-4xl font-bold">Privacy Policy for BulkBuddy</h1>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
                <p className="text-gray-700">
                    BulkBuddy is committed to protecting your privacy. This policy explains what data we collect, how we use it, and your rights regarding your data.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">2. Data Collection</h2>
                <p className="text-gray-700">
                    We collect and store workout data that you enter into the app. This data is saved in a secure database to provide you with a seamless experience and to help you track your progress over time. The data includes exercise details, sets, reps, weights, and any templates you create.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">3. Data Usage</h2>
                <p className="text-gray-700">
                    The workout data we collect is used solely for the purpose of enhancing your experience with the app. We do not share, sell, or otherwise distribute your data to any third parties.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">4. Data Security</h2>
                <p className="text-gray-700">
                    We take data security seriously. Your workout data is stored securely and is protected against unauthorized access. However, no method of transmission over the internet or method of electronic storage is 100% secure, so we cannot guarantee its absolute security.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">5. Third-Party Services</h2>
                <p className="text-gray-700">
                    BulkBuddy does not use any third-party services that collect, store, or process your personal data.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">6. Changes to This Policy</h2>
                <p className="text-gray-700">
                    We may update this privacy policy from time to time. Any changes will be posted in the app and updated on this page. We encourage you to review this policy periodically.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">7. Account Deletion</h2>
                <p className="mb-4 text-gray-700">To delete your BulkBuddy account:</p>
                <ol className="ml-6 list-decimal space-y-2 text-gray-700">
                    <li>Open the BulkBuddy app</li>
                    <li>Go to Account</li>
                    <li>Tap "Delete Account" at the bottom</li>
                </ol>
            </section>

            <section className="mb-8">
                <h2 className="mb-4 text-2xl font-semibold">8. Contact Us</h2>
                <p className="text-gray-700">
                    If you have any questions or concerns about this privacy policy, please contact us at{' '}
                    <a
                        href="mailto:post@bulkbuddyapp.com"
                        className="text-blue-600 hover:underline"
                    >
                        post@bulkbuddyapp.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}

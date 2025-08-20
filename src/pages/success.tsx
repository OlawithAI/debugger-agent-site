import Head from 'next/head';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

export default function SuccessPage() {
  return (
    <div>
      <Head>
        <title>Payment Success | Debugger Agent</title>
        <meta
          name="description"
          content="Your payment was successful. Unlock the full power of Debugger Agent."
        />
        <link rel="canonical" href="https://www.usecodedebugger.com/success" />
      </Head>

      <NavBar />

      <main className="min-h-screen flex flex-col items-center justify-center bg-green-50 dark:bg-gray-900 text-center px-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg w-full">
          <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            You’ve successfully upgraded your plan. You now have access to:
          </p>
          <ul className="text-left text-gray-600 dark:text-gray-300 list-disc list-inside mb-4">
            <li>✅ Higher monthly debug limits</li>
            <li>🧠 Unlimited follow-up sessions</li>
            <li>📜 Debug history in your dashboard</li>
            <li>🔁 CI/CD integration (if applicable)</li>
            <li>🚀 Priority support and faster queue time</li>
          </ul>

          <Link href="/dashboard">
            <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-700">
              Go to Dashboard
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}

import Head from 'next/head';

export default function ReturnPolicy() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <Head>
        <title>Return Policy – Debugger Agent</title>
        <meta name="description" content="Debugger Agent return and refund policy for subscription plans." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Return & Refund Policy</h1>
      <p className="mb-2">We offer a 7-day satisfaction guarantee on Pro and Pro Ultra plans. If you are unsatisfied with Debugger Agent, contact us within 7 days of purchase for a full refund.</p>
      <p>Email our support team at support@debuggeragent.com to initiate a return or refund request.</p>
    </div>
  );
}
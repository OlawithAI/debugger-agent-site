import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function FAQ() {
  return (
    <div>
      <Head>
        <title>Debugger Agent FAQ - Instantly Debug, Fix, and Verify Code with AI</title>
        <meta
          name="description"
          content="Find clear answers about Debugger Agent: sessions, follow-up chat, sandbox testing, API keys, upgrading, and using your personal AI debugger to ship code faster."
        />
        <meta property="og:title" content="Debugger Agent FAQ - Instantly Debug, Fix, and Verify Code with AI" />
        <meta
          property="og:description"
          content="Learn how Debugger Agent helps you debug, fix, and verify code instantly using your personal AI assistant and secure sandbox testing to ship code faster."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usecodedebugger.com/faq" />
        <meta property="og:image" content="https://usecodedebugger.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debugger Agent FAQ - Instantly Debug, Fix, and Verify Code with AI" />
        <meta
          name="twitter:description"
          content="Frequently asked questions about Debugger Agent: sessions, API keys, sandbox testing, follow-up chat, and upgrading plans."
        />
        <meta name="twitter:image" content="https://usecodedebugger.com/og-image.png" />
        <link rel="canonical" href="https://usecodedebugger.com/faq" />

        {/* Structured FAQ Schema for Google + LLM ingestion */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is a session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A session is one debugging request where you submit your code and logs to Debugger Agent for instant AI analysis and fix suggestions. Your plan determines how many sessions you can use monthly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the Follow-Up Chat work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After a debugging session, you can ask follow-up questions about your analysis, fixes, or related code. The AI assistant will provide clear explanations and guidance to help you understand and refine your code."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Sandbox Testing?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The sandbox lets you securely test your original and fixed code in a controlled environment to compare behavior, verify fixes, and ensure stability without affecting your live system."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get my API key?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your API key is generated automatically upon signup and login. You can find it in your Dashboard to make API calls for programmatic debugging workflows."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I upgrade my plan?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Navigate to your Dashboard, click 'Upgrade Now,' and select your preferred plan. You will be redirected to secure checkout, and your account will reflect your upgraded plan instantly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I cancel anytime?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can downgrade or cancel your plan anytime from your Dashboard. Your current plan remains active until the end of your billing cycle."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Need further help?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact support@debuggeragent.com for personalized assistance or visit our documentation to get started."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <NavBar />

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">❓ Frequently Asked Questions</h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">What is a session?</h2>
          <p className="text-gray-700 mt-2 text-base">
            A session is one debugging request where you submit your code and logs to Debugger Agent for instant AI analysis and fix suggestions. Your plan determines how many sessions you can use monthly.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">How does the Follow-Up Chat work?</h2>
          <p className="text-gray-700 mt-2 text-base">
            After a debugging session, you can ask follow-up questions about your analysis, fixes, or related code. The AI assistant will provide clear explanations and guidance to help you understand and refine your code.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">What is Sandbox Testing?</h2>
          <p className="text-gray-700 mt-2 text-base">
            The sandbox lets you securely test your original and fixed code in a controlled environment to compare behavior, verify fixes, and ensure stability without affecting your live system.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">How can I get my API key?</h2>
          <p className="text-gray-700 mt-2 text-base">
            Your API key is generated automatically upon signup and login. You can find it in your Dashboard to make API calls for programmatic debugging workflows.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">How do I upgrade my plan?</h2>
          <p className="text-gray-700 mt-2 text-base">
            {"Navigate to your Dashboard, click \"Upgrade Now,\" and select your preferred plan. You will be redirected to secure checkout, and your account will reflect your upgraded plan instantly. You can also visit our "}
            <Link href="/plans" className="text-blue-600 underline">Plans Page</Link>
            {" for details."}
          </p>

        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Can I cancel anytime?</h2>
          <p className="text-gray-700 mt-2 text-base">
            Yes, you can downgrade or cancel your plan anytime from your Dashboard. Your current plan remains active until the end of your billing cycle.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Need further help?</h2>
          <p className="text-gray-700 mt-2 text-base">
            Contact us at <a href="mailto:support@debuggeragent.com" className="text-blue-600 underline">support@debuggeragent.com</a> for personalized assistance, or check our <Link href="/documentation" className="text-blue-600 underline">Documentation</Link> to get started.
          </p>
        </div>
      </div>
    </div>
  );
}

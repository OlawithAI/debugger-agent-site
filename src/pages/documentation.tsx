import Head from "next/head";
import NavBar from "@/components/NavBar";
import Link from 'next/link';

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation – Debugger Agent: Instantly Debug, Fix, and Verify Code Using AI</title>
        <meta
          name="description"
          content="Learn how to instantly debug, fix, and verify your code using Debugger Agent's AI-powered tools and secure sandbox. View API usage, plans, and getting started guides."
        />
        <link rel="canonical" href="https://usecodedebugger.com/documentation" />
        
        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="lOdHDS3cNoEeZP5HLy-sfn3b2Dr5-P8AC9SG0GfzWg4" />

        {/* Open Graph */}
        <meta property="og:title" content="Debugger Agent Documentation: Instantly Debug, Fix, and Verify Code Using AI" />
        <meta property="og:description" content="Learn how to instantly debug, fix, and verify your code using Debugger Agent's AI-powered tools and secure sandbox. View API usage, plans, and getting started guides." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://usecodedebugger.com/documentation" />
        <meta property="og:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debugger Agent Documentation: Instantly Debug, Fix, and Verify Code Using AI" />
        <meta name="twitter:description" content="Learn how to instantly debug, fix, and verify your code using Debugger Agent's AI-powered tools and secure sandbox." />
        <meta name="twitter:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Structured Data for LLM + SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Debugger Agent Documentation: Instantly Debug, Fix, and Verify Code Using AI",
              "description": "Learn how to instantly debug, fix, and verify your code using Debugger Agent's AI-powered tools and secure sandbox.",
              "image": "https://usecodedebugger.com/og-image.png",
              "author": {
                "@type": "Organization",
                "name": "Debugger Agent"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Debugger Agent",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://usecodedebugger.com/og-image.png"
                }
              },
              "url": "https://usecodedebugger.com/documentation",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://usecodedebugger.com/documentation"
              }
            })
          }}
        />
      </Head>

      <NavBar />

      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          🛠️ Debugger Agent Documentation
        </h1>
        <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
          Learn how to instantly debug, fix, and verify your code using Debugger Agent&apos;s AI-powered tools...
          Access our secure sandbox, API usage guides, and upgrade your workflow today.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-xl font-semibold">📌 Getting Started</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Create an account, log in, and access your Dashboard to retrieve your API key and start debugging immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">🔑 API Key Generation</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Your API key is automatically generated upon your first login and can be found in your Dashboard. Use it to automate your debugging workflows with our API endpoints.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">🛡️ Sandbox Usage</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Submit your code for testing in a secure, isolated environment. Debugger Agent will analyze, execute, and validate fixes before deployment, ensuring stability.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">💬 Follow-Up Chat</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              After your initial debug session, ask further questions via our follow-up chat feature to get clarity on fixes, explanations, and next steps.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">💰 Pricing & Plans</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Choose a plan that matches your usage needs, from Free to Pro Ultra and Team plans, to maximize your AI debugging capabilities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">❓ FAQ</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Visit our <Link href="/faq" className="text-blue-600 underline">FAQ page</Link> for detailed answers on sessions, API usage, billing, and feature explanations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


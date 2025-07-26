import Head from 'next/head';
import NavBar from '@/components/NavBar';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog | Debugger Agent - AI Debugging & Developer Tips</title>
        <meta
          name="description"
          content="Discover articles on AI-powered debugging, productivity tips, and coding best practices on the Debugger Agent blog to help you debug smarter and ship code faster."
        />
        <link rel="canonical" href="https://usecodedebugger.com/blog" />

        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="lOdHDS3cNoEeZP5HLy-sfn3b2Dr5-P8AC9SG0GfzWg4" />

        {/* Open Graph */}
        <meta property="og:title" content="Blog | Debugger Agent - AI Debugging & Developer Tips" />
        <meta
          property="og:description"
          content="Explore Debugger Agent's articles on AI debugging workflows, productivity hacks, and insights to help developers debug smarter and ship faster."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usecodedebugger.com/blog" />
        <meta property="og:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | Debugger Agent - AI Debugging & Developer Tips" />
        <meta
          name="twitter:description"
          content="Explore Debugger Agent's articles on AI debugging workflows, productivity hacks, and insights to help developers debug smarter and ship faster."
        />
        <meta name="twitter:image" content="https://usecodedebugger.com/og-image.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Debugger Agent Blog",
              "inLanguage": "en",
              "description": "Debugger Agent's official blog providing insights into AI-powered debugging, productivity tips for developers, secure sandbox workflows, follow-up chat best practices, and coding best practices to debug smarter and ship faster.",
              "url": "https://usecodedebugger.com/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Debugger Agent",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://usecodedebugger.com/og-image.png"
                }
              }
            })
          }}
        />
      </Head>

      <NavBar />

      <main className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Debugger Agent Blog</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Coming soon: Read our latest articles on AI-powered debugging workflows, secure sandbox execution,
          follow-up chat strategies, productivity hacks, and best practices to help you debug smarter and ship better code.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Stay tuned for detailed guides on leveraging Debugger Agent for automated error tracing, iterative debugging using LLMs, and integrating programmatic debugging into your workflow seamlessly.
        </p>
      </main>
    </div>
  );
}

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/useAuth';
import NavBar from '@/components/NavBar';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const handleStartDebugging = () => {
    if (!loading) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    }
  };

  return (
    <div>
      <Head>
        <title>Debugger Agent - Instantly Find and Fix Code Issues with AI</title>
        <meta name="description" content="Debugger Agent helps developers instantly debug, fix, and verify code issues using AI in a secure sandbox. Save time and ship code faster with confidence." />
        <meta name="robots" content="index, follow" />

        {/* Open Graph for Facebook, LinkedIn, Reddit */}
        <meta property="og:title" content="Debugger Agent - Instantly Find and Fix Code Issues with AI" />
        <meta property="og:description" content="Debugger Agent helps developers instantly debug, fix, and verify code issues using AI in a secure sandbox. Save time and ship code faster with confidence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usecodedebugger.com/" />
        <meta property="og:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Debugger Agent - Instantly Find and Fix Code Issues with AI" />
        <meta name="twitter:description" content="Debugger Agent helps developers instantly debug, fix, and verify code issues using AI in a secure sandbox. Save time and ship code faster with confidence." />
        <meta name="twitter:image" content="https://usecodedebugger.com/og-image.png" />

        {/* JSON-LD Structured Data for Google and LLM discoverability */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Debugger Agent",
            "image": "https://usecodedebugger.com/og-image.png",
            "description": "Debugger Agent helps developers instantly debug, fix, and verify code issues using an AI-powered code debugger in a secure sandbox, allowing them to ship code faster and boost developer productivity.",
            "url": "https://usecodedebugger.com/",
            "applicationCategory": "DeveloperTool",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }} />
      </Head>

      <NavBar />

      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Eliminate Debugging Frustration. Ship Code Faster.</h1>
        <p className="max-w-xl mx-auto text-lg mb-6">
          Instantly find, fix, and verify code issues using your personal AI code debugger in a secure sandbox. Stop wasting hours on bugs—start building with confidence.
        </p>
        <button
          onClick={handleStartDebugging}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium text-lg"
        >
          Start Debugging Free
        </button>
      </section>

      <PricingSection />

      <FAQSection />

      <section className="text-center py-12 bg-white dark:bg-gray-900">
        <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
        <p className="mb-4">Check out our detailed documentation to get the most out of Debugger Agent.</p>
        <Link
          href="/documentation"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          View Documentation
        </Link>
      </section>
    </div>
  );
}

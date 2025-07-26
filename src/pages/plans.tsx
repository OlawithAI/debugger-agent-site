import Head from 'next/head';
import NavBar from '@/components/NavBar';
import PricingSection from '@/components/PricingSection';

export default function PlansPage() {
  return (
    <div>
      <Head>
        <title>Plans & Pricing | Debugger Agent - AI Code Debugging</title>
        <meta
          name="description"
          content="Choose a Debugger Agent plan that fits your needs. Unlock higher session limits, AI-powered advanced debugging, secure sandboxing, and priority support."
        />
        <link rel="canonical" href="https://usecodedebugger.com/plans" />
        
        {/* ✅ Google Search Console Verification */}
        <meta name="google-site-verification" content="lOdHDS3cNoEeZP5HLy-sfn3b2Dr5-P8AC9SG0GfzWg4" />

        {/* Open Graph */}
        <meta property="og:title" content="Plans & Pricing | Debugger Agent - AI Code Debugging" />
        <meta
          property="og:description"
          content="Explore Debugger Agent's flexible pricing plans to unlock advanced AI debugging, secure sandbox testing, and priority support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://usecodedebugger.com/plans" />
        <meta property="og:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Plans & Pricing | Debugger Agent - AI Code Debugging" />
        <meta
          name="twitter:description"
          content="Explore Debugger Agent's flexible pricing plans to unlock advanced AI debugging, secure sandbox testing, and priority support."
        />
        <meta name="twitter:image" content="https://usecodedebugger.com/og-image.png" />

        {/* Structured Data for SEO + LLM Ingestion */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Debugger Agent",
              "image": "https://usecodedebugger.com/og-image.png",
              "description": "Debugger Agent offers flexible plans for AI-powered code debugging, secure sandbox testing, and advanced developer support.",
              "brand": {
                "@type": "Brand",
                "name": "Debugger Agent"
              },
              "url": "https://usecodedebugger.com/plans",
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": "0",
                "highPrice": "149.99",
                "priceCurrency": "USD",
                "offerCount": "5"
              }
            })
          }}
        />
      </Head>

      <NavBar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <section className="text-center py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible Plans for Every Developer
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-6">
            Unlock higher session limits, advanced AI-powered debugging, secure sandbox execution, and priority support with our flexible plans.
          </p>
        </section>

        <PricingSection />
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">🔍 Feature Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100">
                  <tr>
                    <th className="p-3 text-left">Feature</th>
                    <th className="p-3">Free</th>
                    <th className="p-3">Pro</th>
                    <th className="p-3">Pro Ultra</th>
                    <th className="p-3">Team</th>
                    <th className="p-3">Team Ultra</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-200">
                  <tr className="border-t">
                    <td className="p-3 font-medium">Monthly Sessions</td>
                    <td className="text-center">15</td>
                    <td className="text-center">100</td>
                    <td className="text-center">300</td>
                    <td className="text-center">500</td>
                    <td className="text-center">1500</td>
                  </tr>
                  <tr className="border-t">
                   <td className="p-3 font-medium">Follow-up Chat Sessions</td>
                   <td className="text-center">❌</td>
                   <td className="text-center">✅</td>
                   <td className="text-center">✅</td>
                   <td className="text-center">✅</td>
                   <td className="text-center">✅</td>
                 </tr>
                 <tr className="border-t">
                  <td className="p-3 font-medium">Debug History in Dashboard</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">❌</td>
                  <td className="text-center">✅</td>
                  <td className="text-center">✅</td>
                  <td className="text-center">✅</td>
                </tr>
                <tr className="border-t">
                 <td className="p-3 font-medium">CI/CD Debugging Pipelines</td>
                 <td className="text-center">❌</td>
                 <td className="text-center">❌</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
                </tr>
                <tr className="border-t">
                 <td className="p-3 font-medium">VS Code Extension</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
                 <td className="text-center">✅</td>
               </tr>
               <tr className="border-t">
                <td className="p-3 font-medium">Team Memory Sharing</td>
                <td className="text-center">❌</td>
                <td className="text-center">❌</td>
                <td className="text-center">❌</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
               </tr>
               <tr className="border-t">
                <td className="p-3 font-medium">Secure Sandbox Verification</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
                <td className="text-center">✅</td>
               </tr>
               <tr className="border-t">
                <td className="p-3 font-medium">Support Level</td>
                <td className="text-center">Community</td>
                <td className="text-center">Priority</td>
                <td className="text-center">Priority</td>
                <td className="text-center">Priority</td>
                <td className="text-center">Priority</td>
              </tr>
            </tbody>
           </table>
          </div>
         </div>
        </section>
      </main>
    </div>
  );
}

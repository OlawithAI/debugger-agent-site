export default function FAQSection() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="text-left space-y-6">
          <div>
            <h3 className="font-semibold">What is a session?</h3>
            <p>
              A session is a single debugging analysis you run on your code, including the AI analysis and any sandbox
              testing you perform.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How does the free plan work?</h3>
            <p>
              The free plan includes limited sessions per month so you can explore the platform. Upgrade to increase
              your monthly sessions and unlock advanced features.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What payment methods are supported?</h3>
            <p>
              We support secure payments via Paystack and Stripe for your convenience, depending on your region.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is my code safe?</h3>
            <p>
              Yes. Debugger Agent uses secure sandbox environments and encrypted connections to ensure your code and
              data remain private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

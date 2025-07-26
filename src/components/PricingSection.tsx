import { useState } from 'react';
import { PLANS } from '../lib/pricing_data';
import Link from 'next/link';

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-16 px-4 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Clear, Flexible Pricing</h2>
        <p className="mb-6 text-gray-600">Pay monthly, or get 2 months free with annual billing.</p>
        <button
          onClick={() => setYearly(!yearly)}
          className="mb-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Switch to {yearly ? 'Monthly' : 'Annual'} Billing
        </button>
        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col justify-between ${plan.id === 'pro_ultra' ? 'border-blue-600 bg-blue-50' : ''} ${plan.id === 'team_ultra' ? 'border-green-600 bg-green-50' : ''}`}
            >
              {plan.id === 'pro_ultra' && <p className="font-bold text-blue-600 mb-2">⭐ MOST POPULAR ⭐</p>}
              {plan.id === 'team_ultra' && <p className="font-bold text-green-600 mb-2">🏆 BEST VALUE 🏆</p>}
              <div>
                <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                <p className="text-2xl font-bold mb-2">
                  {yearly ? `$${plan.priceYearly}/yr` : `$${plan.priceMonthly}/mo`}
                </p>
                <p className="mb-4 text-sm">{plan.sessionsPerMonth} sessions per month</p>
                <ul className="text-left mb-4 list-disc list-inside space-y-1 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <Link
                href="/documentation"
                className={`px-4 py-2 rounded-md font-medium inline-block mt-4 ${plan.id === 'pro_ultra' ? 'bg-blue-600 text-white hover:bg-blue-700' : plan.id === 'team_ultra' ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {plan.priceMonthly === 0 ? 'Get Started Free' : 'Choose Plan'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
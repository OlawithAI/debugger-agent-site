import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/lib/useAuth';
import NavBar from '@/components/NavBar';
import { PLANS } from '@/lib/pricing_data';
import LogViewer from '@/components/LogViewer';


interface UserData {
  uid: string;
  email: string;
  api_key: string;
  plan: string;
  usage?: {
    sessions_this_month: number;
  };
}

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [copySuccess, setCopySuccess] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [upgrading, setUpgrading] = useState(false);
  const [idToken, setIdToken] = useState<string>('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    } else if (user) {
      user.getIdToken().then(async (idToken: string) => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/firebase-login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken }),
          });
          if (!res.ok) throw new Error(`Server error: ${res.status}`);
          const data = await res.json();
          setUserData(data);
          setIdToken(idToken);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') console.error('...');

        }  
      });
    }
  }, [user, loading, router]);

  const UpsellBanner = ({ plan }: { plan: string }) => {
  if (plan !== 'free' && plan !== 'pro') return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-5 mb-6 rounded-md shadow-sm">
      <h2 className="font-semibold text-md mb-2 flex items-center">
        🚀 <span className="ml-1">Upgrade for advanced developer tools</span>
      </h2>
      <ul className="text-sm list-disc pl-5 space-y-1">
        <li>📜 Debug history in dashboard (keep your insights)</li>
        <li>🧠 Shared team memory (Team Plans)</li>
        <li>🔁 CI/CD integration (Ultra only)</li>
        <li>💬 Unlimited follow-up sessions</li>
      </ul>
      <a
        href="/plans"
        className="inline-block mt-3 text-sm text-yellow-700 underline hover:text-yellow-900 font-medium"
      >
        See upgrade options →
      </a>
    </div>
  );
};



  const copyToClipboard = () => {
    if (userData?.api_key) {
      navigator.clipboard.writeText(userData.api_key);
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 1500);
    }
  };

  const getPlanLimit = (plan: string) => {
    const found = PLANS.find(p => p.id === plan);
    return found ? found.sessionsPerMonth : '∞';
  };

  const handleUpgrade = async (planId: string) => {
    const plan = PLANS.find(p => p.id === planId);
    if (!plan || !userData?.email) return;
    setUpgrading(true);
    try {
      const usdToNgnRate = 1500;
      const amountInKobo = plan.priceMonthly * usdToNgnRate * 100;

      const res = await fetch('/api/paystack/initialize-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: userData.email,
          amount: amountInKobo,
          plan_name: plan.name,
        }),
      });
      const data = await res.json();
      if (data.checkout_url) {
        window.location.href = data.checkout_url;
      } else {
        alert(data.error || "Unable to initiate checkout.");
      }
    } catch (error) {
      console.error("Upgrade failed:", error);
      alert("Failed to initiate upgrade.");
    } finally {
      setUpgrading(false);
    }
  };

  if (!userData) {
    return <div className="flex items-center justify-center h-screen">Loading dashboard...</div>;
  }

  return (
  <div>
    <NavBar />

    {/* ✅ Upsell banner shown right after navbar and before dashboard content */}
    <div className="max-w-2xl mx-auto p-6">
      <UpsellBanner plan={userData.plan} />
    </div>

    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🚀 Debugger Agent Dashboard</h1>

      <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4">
        <p className="text-lg font-semibold">
          Plan: <span className="text-blue-600">{userData.plan.toUpperCase()}</span>
        </p>
        <p className="mt-2">
          Sessions used: {userData.usage?.sessions_this_month ?? 0} / {getPlanLimit(userData.plan)}
        </p>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="mt-2 text-sm text-blue-500 underline"
        >
          {showInfo ? 'Hide info' : 'What does this mean?'}
        </button>
      </div>


        <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4">
          <p className="font-semibold mb-2">Your API Key:</p>
          {userData.api_key ? (
  <div className="flex items-center">
    <input
      type="text"
      value={userData.api_key}
      readOnly
      className="flex-1 p-2 border rounded bg-gray-100 dark:bg-gray-700 text-sm"
    />
    <button
      onClick={copyToClipboard}
      className="ml-2 bg-blue-600 text-white px-3 py-1 rounded text-sm"
    >
      {copySuccess || 'Copy'}
    </button>
  </div>
) : (
  <>
    <p className="text-sm text-gray-500 mb-2">
      You currently do not have an API key. It will be generated upon your first debugging session.
    </p>
    <div className="mt-2">
      <label htmlFor="manualKey" className="text-sm font-medium">
        Paste API key manually (advanced users):
      </label>
      <input
        id="manualKey"
        type="text"
        onChange={(e) => localStorage.setItem('debugger_api_key', e.target.value)}
        className="mt-1 w-full p-2 border rounded bg-white dark:bg-gray-800 text-sm"
        placeholder="Paste your API key here"
      />
      <p className="text-xs text-gray-400 mt-1">
        Saved securely in your browser and used for CI/CD debugging.
      </p>
    </div>
  </>
)}

        </div>

        {userData.plan === 'free' && (
          <div className="mt-4">
            <button
              onClick={() => setShowUpgrade(!showUpgrade)}
              className="bg-green-600 text-white px-4 py-2 rounded shadow"
            >
              {showUpgrade ? "Cancel Upgrade" : "Upgrade Now"}
            </button>

            {showUpgrade && (
              <div className="mt-4 space-y-4">
                {PLANS.filter(plan => plan.id !== 'free').map(plan => (
                  <div key={plan.id} className="border rounded p-4 bg-gray-50">
                    <p className="font-semibold">{plan.name} - ${plan.priceMonthly}/month</p>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                    <ul className="text-sm text-gray-600 mt-1 list-disc ml-5">
                      {plan.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => handleUpgrade(plan.id)}
                      className="mt-2 bg-green-700 text-white px-3 py-1 rounded shadow disabled:opacity-50"
                      disabled={upgrading}
                    >
                      {upgrading ? "Redirecting..." : `Upgrade to ${plan.name}`}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center">
          <a
            href="/cicd"
            className="inline-block mt-6 text-sm text-blue-600 underline hover:text-blue-800"
          >
            🔁 Run CI/CD Debugger
          </a>
          <br />

          <a href="/faq" className="text-blue-500 underline text-sm">
           View FAQ</a>

          <LogViewer idToken={idToken} plan={userData.plan} />

        </div>
      </div>
    </div>
  );
}

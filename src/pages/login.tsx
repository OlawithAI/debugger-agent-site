import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

export default function LoginPage() {
  const { user, loading, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [authError, setAuthError] = useState('');

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {!user ? (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold mb-2">Login to Debugger Agent</h1>

          <div className="flex flex-col items-center space-y-4">
            <button
              onClick={async () => {
                try {
                  await loginWithGoogle();
                } catch (err) {
                  console.error('❌ Login error:', err);
                  setAuthError('Login failed. Please try again or contact support.');
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition duration-200"
            >
              🔐 Sign in with Google
            </button>

            <p className="text-sm text-gray-500 max-w-xs text-center">
              We use Google Auth to securely sign you into Debugger Agent. No passwords required.
            </p>

            {authError && <p className="text-red-600 text-sm">{authError}</p>}
          </div>
        </div>
      ) : (
        <p className="text-center mt-10">Redirecting to dashboard...</p>
      )}
    </div>
  );
}

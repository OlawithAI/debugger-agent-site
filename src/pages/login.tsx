import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';

export default function LoginPage() {
  const { user, loading, loginWithGoogle, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {!user ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Login to Debugger Agent</h1>
          <button
            onClick={loginWithGoogle}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign in with Google
          </button>
        </div>
      ) : (
        <p className="text-center mt-10">Redirecting to dashboard...</p>
      )}
    </div>
  );
}

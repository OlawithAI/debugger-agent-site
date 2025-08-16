import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';
import { useEffect, useState } from 'react';
import { getIdTokenResult } from 'firebase/auth';

export default function NavBar() {
  const { user, logout } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkClaims = async () => {
      if (user) {
        const tokenResult = await getIdTokenResult(user);
        setIsAdmin(tokenResult.claims.admin === true);
      } else {
        setIsAdmin(false);
      }
    };
    checkClaims();
  }, [user]);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white dark:bg-gray-900 shadow mb-4">
      <Link href="/" className="text-lg font-bold">
        🚀 Debugger Agent
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/documentation" className="text-sm hover:underline">
          Documentation
        </Link>
        {user ? (
          <>
            <Link href="/dashboard" className="text-sm hover:underline">
              Dashboard
            </Link>
            {isAdmin && (
              <Link href="/admin-dashboard" className="text-sm text-green-600 hover:underline">
                Admin
              </Link>
            )}
            <Link href="/feedback" className="text-sm text-blue-500 hover:underline">
              🐞 Feedback
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

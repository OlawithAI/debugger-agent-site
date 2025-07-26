import Link from 'next/link';
import { useAuth } from '@/lib/useAuth';

export default function NavBar() {
  const { user, logout } = useAuth();

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

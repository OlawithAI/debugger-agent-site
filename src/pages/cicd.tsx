import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/NavBar';
import StreamingCiCdRunner from '@/components/StreamingCiCdRunner';

export default function CicdPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  return (
    <div>
      <NavBar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">🛠️ CI/CD Debugger Runner</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Paste or upload code to stream results from LLM + sandbox in real-time. Only available on Pro Ultra and Team plans.
        </p>
        <StreamingCiCdRunner />
      </div>
    </div>
  );
}
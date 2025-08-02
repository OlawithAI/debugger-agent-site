// pages/feedback.tsx
import { useState } from 'react';
import { db } from '@/lib/firebaseClient';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '@/lib/useAuth';

export default function FeedbackPage() {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    if (!message.trim()) return;

    try {
      await addDoc(collection(db, 'feedback'), {
        uid: user?.uid || null,
        email: user?.email || 'Anonymous',
        message: message.trim(),
        created_at: Timestamp.now(),
      });
      setStatus('✅ Feedback submitted!');
      setMessage('');
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      setStatus('❌ Failed to submit. Try again.');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">💬 Submit Feedback / Bug Report</h1>
      <textarea
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tell us what's broken, unclear, or could be improved..."
        className="w-full p-3 border rounded bg-white"
      />
      <button
        onClick={handleSubmit}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
}


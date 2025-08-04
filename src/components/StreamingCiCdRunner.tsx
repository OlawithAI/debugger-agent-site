import { useEffect, useState  } from 'react';
import { useAuth } from '@/lib/useAuth';


export default function StreamingCiCdRunner() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useAuth();
  const [code, setCode] = useState('');
  const [logs, setLogs] = useState('');
  const [language, setLanguage] = useState('Python'); // ✅ Default language
  
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [apiKey, setApiKey] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem('debugger_api_key');
    if (storedKey) {
      setApiKey(storedKey);
    }
  }, []);

  const handleRun = async () => {
    if (!code.trim()) return alert('Please paste code to debug.');
    if (!apiKey) return alert('Please enter your API key.');

    setLoading(true);
    setError('');
    setOutput('');
    setResults(null);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cicd/run-debug-and-sandbox`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          code,
          logs: logs || [],
          language: language || 'python',
          github_meta: null,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Server error');
      }

      const data = await res.json();
      setResults(data);
    } catch (err) {
      const error = err as Error;
      console.error(err);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {code && (
       <>
         <p className="text-sm text-gray-500 mt-2">
           Language is auto-detected after pasting code. You can override below if needed.
         </p>
      <div>
        <label className="block text-sm font-medium">Language:</label>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="p-2 border rounded w-full"
        >
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Java">Java</option>
          <option value="Go">Go</option>
          <option value="C++">C++</option>
        </select>
      </div>
      </>
     )}

      <div>
        <label className="block text-sm font-medium">Code:</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={8}
          className="w-full p-2 border rounded font-mono text-sm"
          placeholder="Paste your code here"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Logs (optional):</label>
        <textarea
          value={logs}
          onChange={(e) => setLogs(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded font-mono text-sm"
          placeholder="Paste logs or error messages here"
        />
      </div>

      <div>
  <label className="block text-sm font-medium mt-2">API Key (if missing):</label>
  <input
    type="text"
    value={apiKey}
    onChange={(e) => {
      setApiKey(e.target.value);
      localStorage.setItem('debugger_api_key', e.target.value);
    }}
    className="w-full p-2 border rounded font-mono text-sm bg-white"
    placeholder="Paste your API key here"
  />
</div>


      <button
        onClick={handleRun}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Running...' : '🔁 Run Debug + Sandbox'}
      </button>

      {error && <p className="text-red-600 text-sm mt-2">❌ {error}</p>}

      {results && (
        <div className="mt-6 space-y-4">
          <div>
            <h3 className="font-semibold">🔍 Analysis</h3>
            <pre className="bg-gray-800 text-white text-sm p-4 rounded overflow-x-auto">{results.analysis}</pre>
          </div>
          <div>
            <h3 className="font-semibold">🛠️ Fixed Code</h3>
            <pre className="bg-gray-800 text-white text-sm p-4 rounded overflow-x-auto">{results.fixed_code}</pre>
          </div>
          <div>
            <h3 className="font-semibold">🧪 Sandbox Result</h3>
            <pre className="bg-gray-800 text-white text-sm p-4 rounded overflow-x-auto">
              {JSON.stringify(results.sandbox_result, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
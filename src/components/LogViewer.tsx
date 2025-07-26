import { useState, useEffect } from 'react';

interface LogEntry {
  session_id: string;
  tag: string;
  timestamp: string;
  content: string;
}

interface Props {
  idToken: string;
  plan: string;
}

const ELIGIBLE_PLANS = ['pro_ultra', 'team', 'team_ultra', 'admin'];

export default function LogViewer({ idToken, plan }: Props) {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filters, setFilters] = useState({ tag: '', session_id: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ELIGIBLE_PLANS.includes(plan)) return;
    const fetchLogs = async () => {
      try {
        const params = new URLSearchParams(filters).toString();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logs/view?${params}`, {
          headers: { Authorization: `Bearer ${idToken}` },
        });
        const data = await res.json();
        setLogs(data.logs || []);
      } catch (err) {
        console.error('Error fetching logs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [idToken, plan, filters]);

  if (!ELIGIBLE_PLANS.includes(plan)) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 mt-6">
      <h2 className="text-lg font-semibold mb-2">🪵 Your Debug Logs</h2>

      <div className="flex gap-4 mb-3">
        <input
          type="text"
          name="tag"
          placeholder="Filter by tag"
          value={filters.tag}
          onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
          className="border p-2 rounded text-sm w-1/3"
        />
        <input
          type="text"
          name="session_id"
          placeholder="Filter by session ID"
          value={filters.session_id}
          onChange={(e) => setFilters({ ...filters, session_id: e.target.value })}
          className="border p-2 rounded text-sm w-1/3"
        />
      </div>

      {loading ? (
        <p className="text-sm text-gray-500">Loading logs...</p>
      ) : logs.length === 0 ? (
        <p className="text-sm text-gray-500">No logs found for this filter.</p>
      ) : (
        <ul className="space-y-4">
          {logs.map((log, index) => (
            <li key={index} className="border p-3 rounded bg-gray-50 dark:bg-gray-700">
              <div className="text-xs font-mono text-gray-700 dark:text-gray-200">
                <strong>Session:</strong> {log.session_id}<br />
                <strong>Tag:</strong> {log.tag}<br />
                <strong>Time:</strong> {new Date(log.timestamp).toLocaleString()}<br />
                <pre className="mt-2 bg-gray-100 dark:bg-gray-800 p-2 rounded overflow-x-auto text-xs">
                  {log.content}
                </pre>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

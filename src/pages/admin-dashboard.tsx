import { useEffect, useState } from 'react';
import { useAuth } from "@/lib/useAuth";

type MetricType = Record<string, unknown>;
type LogType = {
  uid?: string;
  plan?: string;
  timestamp?: string;
  [key: string]: unknown;
};

export default function AdminDashboard() {
  const { user, loading, idToken, claims } = useAuth();
  const [metrics, setMetrics] = useState<MetricType | null>(null);
  const [logs, setLogs] = useState<LogType[]>([]);
  const [firebaseLogs, setFirebaseLogs] = useState<LogType[]>([]);
  const [error, setError] = useState<string>("");

  // Filters
  const [uidFilter, setUidFilter] = useState('');
  const [planFilter, setPlanFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    if (!user || !idToken) return;

    const fetchAdminData = async () => {
      try {
        const headers = { Authorization: `Bearer ${idToken}` };

        const [metricsRes, logsRes, firebaseLogsRes] = await Promise.all([
          fetch("/api/admin/metrics", { headers }),
          fetch("/api/admin/usage-logs", { headers }),
          fetch("/api/admin/firebase-logs", { headers }),
        ]);

        const metricsData = await metricsRes.json();
        const logsData = await logsRes.json();
        const firebaseData = await firebaseLogsRes.json();

        setMetrics(metricsData);
        setLogs(logsData.logs || []);
        setFirebaseLogs(firebaseData.logs || []);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to load admin metrics or logs.");
      }
    };

    fetchAdminData();
  }, [user, idToken]);

  const filteredLogs = logs.filter(log => {
    return (
      (!uidFilter || log.uid?.includes(uidFilter)) &&
      (!planFilter || log.plan?.toLowerCase().includes(planFilter.toLowerCase())) &&
      (!dateFilter || (log.timestamp && log.timestamp.includes(dateFilter)))
    );
  });

  const exportToCSV = () => {
    const rows = filteredLogs.map(log => JSON.stringify(log));
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'usage_logs.csv';
    a.click();
  };

  if (loading) return <p>Loading...</p>;
  if (!claims?.admin) return <p>🔒 Access denied</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* System Metrics */}
      <div className="mb-6 rounded-xl shadow-md p-4 border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold mb-2">🌐 System Metrics</h2>
        <pre className="text-sm bg-gray-100 p-4 rounded">{JSON.stringify(metrics, null, 2)}</pre>
      </div>

      {/* Filters + Export */}
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <input className="border p-2 rounded" placeholder="Filter by UID" value={uidFilter} onChange={e => setUidFilter(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Filter by Plan" value={planFilter} onChange={e => setPlanFilter(e.target.value)} />
        <input className="border p-2 rounded" placeholder="Filter by Date (YYYY-MM-DD)" value={dateFilter} onChange={e => setDateFilter(e.target.value)} />
        <button onClick={exportToCSV} className="ml-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Export CSV</button>
      </div>

      {/* Usage Logs */}
      <div className="mb-6 rounded-xl shadow-md p-4 border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold mb-2">🧾 Filtered Usage Logs</h2>
        <div className="max-h-[400px] overflow-y-scroll text-sm">
          {filteredLogs.map((log, idx) => (
            <div key={idx} className="border-b py-2">
              <pre>{JSON.stringify(log, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>

      {/* Firebase Logs */}
      <div className="rounded-xl shadow-md p-4 border border-gray-200 bg-white">
        <h2 className="text-xl font-semibold mb-2">🔥 Firebase Logs</h2>
        <div className="max-h-[400px] overflow-y-scroll text-sm">
          {firebaseLogs.map((entry, idx) => (
            <div key={idx} className="border-b py-2">
              <pre>{JSON.stringify(entry, null, 2)}</pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

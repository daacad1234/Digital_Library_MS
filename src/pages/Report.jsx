import React, { useEffect, useState } from 'react';
import api from '../api';

function StatusBadge({ status }) {
  const isReturned = status === 'Returned';
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
        isReturned ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
      }`}
    >
      {status}
    </span>
  );
}

function Report() {
  const [records, setRecords] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadRecords('all');
  }, []);

  const loadRecords = async (status) => {
    let response;
    if (status === 'all') {
      response = await api.get('/borrowbooks');
    } else {
      response = await api.get(`/borrowbooks/status/${status}`);
    }
    setRecords(response.data);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    loadRecords(value);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Borrow Report</h1>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="px-3 py-2 border border-slate-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Records</option>
          <option value="borrowed">Borrowed</option>
          <option value="returned">Returned</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Borrow ID</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Book</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Member</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Issue Date</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Return Date</th>
              <th className="px-4 py-3 text-sm font-semibold text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-slate-400">
                  No borrow records found.
                </td>
              </tr>
            ) : (
              records.map((r) => (
                <tr key={r.borrowId} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{r.borrowId}</td>
                  <td className="px-4 py-3 text-slate-700 font-medium">{r.bookTitle}</td>
                  <td className="px-4 py-3 text-slate-700">{r.memberName}</td>
                  <td className="px-4 py-3 text-slate-700">{new Date(r.issueDate).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-slate-700">
                    {r.returnDate ? new Date(r.returnDate).toLocaleDateString() : '-'}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;

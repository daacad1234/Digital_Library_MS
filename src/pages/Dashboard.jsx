import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaHouse,FaBook,FaArrowRight,FaUsers,FaGear,FaChartColumn,} from "react-icons/fa6";
import api from '../api';

function Dashboard() {
  const menuItems = [
    { label: 'Overview', anchor: '#overview' },
    { label: 'Books', anchor: '#books' },
    { label: 'Borrowing', anchor: '#borrowing' },
    { label: 'Members', anchor: '#members' },
    { label: 'Reports', anchor: '#reports' },
    { label: 'Settings', anchor: '#settings' },
  ];

  const [counts, setCounts] = useState({ books: 0, members: 0, activeBorrows: 0, reports: 0 });
  const [borrowings, setBorrowings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setError('');
    setLoading(true);
    try {
      const [booksRes, membersRes, activeBorrowRes, allBorrowRes] = await Promise.all([
        api.get('/books'),
        api.get('/members'),
        api.get('/borrowbooks/status/borrowed'),
        api.get('/borrowbooks'),
      ]);

   const totalBookQuantity = Array.isArray(booksRes.data)
  ? booksRes.data.reduce((total, book) => {
      return total + Number(book.quantity || 0);
    }, 0)
  : 0;

setCounts({
  books: totalBookQuantity,
  members: Array.isArray(membersRes.data)
    ? membersRes.data.length 
    : 0,
  activeBorrows: Array.isArray(activeBorrowRes.data)
    ? activeBorrowRes.data.length
    : 0,
  reports: Array.isArray(allBorrowRes.data)
    ? allBorrowRes.data.length
    : 0,
});

      setBorrowings(Array.isArray(activeBorrowRes.data) ? activeBorrowRes.data.slice(0, 8) : []);
    } catch (err) {
      setError('Unable to load dashboard data.');
    } finally {
      setLoading(false);
    }
  };

  const handleReturn = async (borrowId) => {
    try {
      await api.put(`/borrowbooks/${borrowId}/return`);
      loadData();
    } catch (err) {
      setError('Unable to mark as returned.');
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]"> 
<aside className="bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 text-white rounded-3xl shadow-2xl p-6 h-fit sticky top-5">

  <div className="text-center border-b border-white/20 pb-6">
    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center text-3xl">
      📚
    </div>

    <h2 className="mt-4 text-2xl font-bold">
      Library Panel
    </h2>

    <p className="text-sm text-slate-300 mt-2">
      Manage your library efficiently.
    </p>
  </div>

  <nav className="mt-8 space-y-3">
    {menuItems.map((item) => (
      <a
        key={item.label}
        href={item.anchor}
        className="group flex items-center justify-between rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300 hover:translate-x-1"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg text-indigo-300 group-hover:text-white">
            {item.icon}
          </span>

          <span className="font-medium">
            {item.label}
          </span>
        </div>

        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition" />
      </a>
    ))}
  </nav>

  <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
    <h3 className="font-semibold text-lg">Quick Actions</h3>

    <p className="text-sm text-slate-300 mt-2">
      Jump directly to the book management page.</p>
    <Link
      to="/books"
      className="mt-5 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-400 rounded-xl py-3 font-semibold transition">
      <FaBook />View Books</Link>
  </div>
</aside>

      <div className="space-y-10">
        <section id="overview" className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Dashboard Overview</h1>
              <p className="text-slate-500 mt-2">A single view of your books, members, borrowing activity, and reports.</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">{loading ? 'Loading...' : 'Updated'}</div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Books</p>
              <p className="mt-4 text-3xl font-bold text-slate-800">{counts.books}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Members</p>
              <p className="mt-4 text-3xl font-bold text-slate-800">{counts.members}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Active Borrows</p>
              <p className="mt-4 text-3xl font-bold text-slate-800">{counts.activeBorrows}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Reports</p>
              <p className="mt-4 text-3xl font-bold text-slate-800">{counts.reports}</p>
            </div>
          </div>
        </section>

        <section id="borrowing" className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-800">Recent Active Borrowings</h2>
            <Link to="/borrow" className="text-sm text-indigo-600 hover:underline">Manage Borrowings</Link>
          </div>
          <p className="text-slate-500 mt-2">Track recent borrow and return actions at a glance.</p>
          <div className="mt-6 overflow-x-auto">
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            <table className="w-full text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600">ID</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600">Book</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600">Member</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600">Issue Date</th>
                  <th className="px-4 py-3 text-sm font-semibold text-slate-600">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {borrowings.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-4 py-6 text-center text-slate-400">No active borrowings.</td>
                  </tr>
                ) : (
                  borrowings.map((r) => (
                    <tr key={r.borrowId} className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">{r.borrowId}</td>
                      <td className="px-4 py-3 text-slate-700 font-medium">{r.bookTitle}</td>
                      <td className="px-4 py-3 text-slate-700">{r.memberName}</td>
                      <td className="px-4 py-3 text-slate-700">{new Date(r.issueDate).toLocaleDateString()}</td>
                      <td className="px-4 py-3">
                        <button onClick={() => handleReturn(r.borrowId)} className="text-indigo-600 hover:text-indigo-500 font-medium">Mark Returned</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

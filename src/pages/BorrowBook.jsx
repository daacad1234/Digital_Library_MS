import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../api';

function BorrowBook() {
  const [searchParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [borrowRecords, setBorrowRecords] = useState([]);
  const [bookId, setBookId] = useState(searchParams.get('bookId') || '');
  const [memberId, setMemberId] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (searchParams.get('bookId')) {
      setBookId(searchParams.get('bookId'));
    }
  }, [searchParams]);

  const loadData = async () => {
    try {
      const [booksRes, membersRes, borrowRes] = await Promise.all([
        api.get('/books'),
        api.get('/members'),
        api.get('/borrowbooks/status/borrowed'),
      ]);
      setBooks(booksRes.data || []);
      setMembers(membersRes.data || []);
      setBorrowRecords(borrowRes.data || []);
    } catch (err) {
      setError('Unable to load borrowing data right now.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!bookId || !memberId) {
      setError('Please choose both a book and a member.');
      return;
    }

    // Check book availability
    const selectedBook = books.find(b => b.bookId === Number(bookId));
    if (!selectedBook || selectedBook.quantity <= 0) {
      setError('This book is not currently available.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.post('/borrowbooks', {
        bookId: Number(bookId),
        memberId: Number(memberId),
      });
      setMessage(response.data || 'Book issued successfully.');
      setBookId('');
      setMemberId('');
      loadData();
    } catch (err) {
      setError(err.response?.data || 'Unable to issue the book.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReturn = async (id) => {
    try {
      const response = await api.put(`/borrowbooks/${id}/return`);
      setMessage(response.data || 'Book marked as returned.');
      loadData();
    } catch (err) {
      setError(err.response?.data || 'Unable to return the book.');
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Book Borrowing</h1>
          <p className="text-slate-600 mt-1">Issue books to members and manage active borrowings.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Issue a Book</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {error && (
            <div className="md:col-span-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {error}
            </div>
          )}
          {message && (
            <div className="md:col-span-3 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
              {message}
            </div>
          )}

          <div>
            <label htmlFor="book" className="block text-sm font-medium text-slate-700 mb-1">Select Book</label>
            <select
              id="book"
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose a book</option>
              {books.map((book) => (
                <option key={book.bookId} value={book.bookId} disabled={book.quantity <= 0}>
                  {book.title} ({book.quantity} {book.quantity === 1 ? 'copy' : 'copies'} available)
                </option>
              ))}
            </select>
            {bookId && books.find(b => b.bookId === Number(bookId))?.quantity > 0 && (
              <p className="text-xs text-emerald-600 mt-1">✓ This book is available</p>
            )}
            {bookId && books.find(b => b.bookId === Number(bookId))?.quantity <= 0 && (
              <p className="text-xs text-red-600 mt-1">✗ No copies available</p>
            )}
          </div>

          <div>
            <label htmlFor="member" className="block text-sm font-medium text-slate-700 mb-1">Select Member</label>
            <select
              id="member"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Choose a member</option>
              {members.map((member) => (
                <option key={member.memberId} value={member.memberId}>
                  {member.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="py-2.5 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-500 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? 'Processing...' : 'Borrow Book'}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
          <h2 className="text-lg font-semibold text-slate-700">Active Borrowings</h2>
        </div>
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
            {borrowRecords.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-slate-400">
                  No active borrowings.
                </td>
              </tr>
            ) : (
              borrowRecords.map((record) => (
                <tr key={record.borrowId} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{record.borrowId}</td>
                  <td className="px-4 py-3 text-slate-700 font-medium">{record.bookTitle}</td>
                  <td className="px-4 py-3 text-slate-700">{record.memberName}</td>
                  <td className="px-4 py-3 text-slate-700">{new Date(record.issueDate).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleReturn(record.borrowId)}
                      className="text-indigo-600 hover:text-indigo-500 font-medium"
                    >
                      Mark Returned
                    </button>
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

export default BorrowBook;

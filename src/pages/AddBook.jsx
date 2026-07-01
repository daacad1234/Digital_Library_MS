import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../api';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!title.trim() || !author.trim()) {
      setError('Title and Author are required.');
      return;
    }
    if (quantity === '' || isNaN(quantity) || Number(quantity) < 0) {
      setError('Quantity must be a valid positive number.');
      return;
    }

    try {
      await api.post('/books', {
        title: title,
        author: author,
        quantity: Number(quantity)
      });
      navigate('/books');
    } catch (err) {
      setError('Something went wrong while adding the book.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="flex-1 py-2.5 bg-emerald-600 text-white rounded-md font-semibold hover:bg-emerald-500 transition-colors"
          >
            Add Book
          </button>
          <Link
            to="/books"
            className="flex-1 py-2.5 text-center bg-slate-100 text-slate-700 rounded-md font-semibold hover:bg-slate-200 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddBook;

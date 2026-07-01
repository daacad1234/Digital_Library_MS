import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../api';

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const loadBook = async () => {
      const response = await api.get(`/books/${id}`);
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setQuantity(response.data.quantity);
    };

    loadBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError('Title and Author are required.');
      return;
    }

    try {
      await api.put(`/books/${id}`, {
        title: title,
        author: author,
        quantity: Number(quantity)
      });
      navigate('/books');
    } catch (err) {
      setError('Something went wrong while updating the book.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Update Book</h1>

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
            className="flex-1 py-2.5 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-500 transition-colors"
          >
            Update Book
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

export default UpdateBook;

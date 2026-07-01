import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      setLoading(true);
      const response = await api.get("/books");
      setBooks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error loading books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }

    try {
      await api.delete(`/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error(error);
      alert("you can't delete this book because of FK relationship.");
    }
  };

  const filteredBooks = books.filter((book) => {
    const query = search.trim().toLowerCase();

    if (query === "") return true;

    return (
      String(book.bookId).includes(query) ||
      (book.title || "").toLowerCase().includes(query) ||
      (book.author || "").toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Books</h1>

        <div className="flex gap-2">
          <Link
            to="/borrow"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
          >
            Borrow Book
          </Link>

          <Link
            to="/books/add"
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-500"
          >
            + Add Book
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by ID, Title or Author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow border overflow-hidden">
        {loading ? (
          <div className="p-6 text-center">Loading books...</div>
        ) : (
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Author</th>
                <th className="px-4 py-3 text-left">Quantity</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 py-6"
                  >
                    No books found.
                  </td>
                </tr>
              ) : (
                filteredBooks.map((book) => (
                  <tr
                    key={book.bookId}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="px-4 py-3">{book.bookId}</td>
                    <td className="px-4 py-3">{book.title}</td>
                    <td className="px-4 py-3">{book.author}</td>
                    <td className="px-4 py-3">{book.quantity}</td>

                    <td className="px-4 py-3">
                      <Link
                        to={`/books/update/${book.bookId}`}
                        className="text-blue-600 hover:underline mr-4"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(book.bookId)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default BooksList;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import BooksList from './pages/BooksList';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import Members from './pages/Members';
import BorrowBook from './pages/BorrowBook';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/books/add" element={<AddBook />} />
            <Route path="/books/update/:id" element={<UpdateBook />} />
            <Route path="/borrow" element={<BorrowBook />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/members" element={<Members />} />
            <Route path="/report" element={<Report />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              📚 Smart Library Management
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-tight">
              Welcome to the
              <span className="text-indigo-600"> Library Management System</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Easily manage books, members, borrowing records, and returns from
              one modern dashboard. Save time and organize your library more
              efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/books"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg font-semibold shadow-lg transition"
              >
                Browse Books
              </Link>

              <Link
                to="/report"
                className="border border-slate-300 hover:bg-slate-100 px-7 py-3 rounded-lg font-semibold text-slate-700 transition"
              >
                View Reports
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">

              <div className="text-8xl text-center mb-6">
                📚
              </div>

              <h2 className="text-2xl font-bold text-center text-slate-800">
                Digital Library
              </h2>

              <p className="text-center text-slate-500 mt-3">
                Organize, manage, and track your entire library in one place.
              </p>

            </div>
          </div>

        </div>
      </section>



      <section className="py-16 bg-indigo-600 text-white">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

    <div>
      <h2 className="text-3xl font-bold mb-5">
        Our Mission
      </h2>

      <p className="leading-8 text-indigo-100">
        To provide efficient, reliable, and modern library management
        services that make learning resources easily accessible to
        students, teachers, and researchers.
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold mb-5">
        Our Vision
      </h2>

      <p className="leading-8 text-indigo-100">
        To become a smart digital library that supports education through
        technology, innovation, and excellent library services.
      </p>
    </div>

  </div>
</section>



      <section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
      Our Library Services
    </h2>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-5xl mb-4">📖</div>
        <h3 className="font-bold text-xl mb-2">Borrow Books</h3>
        <p className="text-slate-600">
          Members can borrow books quickly through our digital system.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="font-bold text-xl mb-2">Search Catalog</h3>
        <p className="text-slate-600">
          Find books by title, author, or category within seconds.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-5xl mb-4">📅</div>
        <h3 className="font-bold text-xl mb-2">Reservation</h3>
        <p className="text-slate-600">
          Reserve available books before visiting the library.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="text-5xl mb-4">💻</div>
        <h3 className="font-bold text-xl mb-2">Digital Records</h3>
        <p className="text-slate-600">
          Keep accurate and secure records of every library transaction.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="py-16 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Why Choose Our Library?
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="flex gap-4">
        <span className="text-3xl">✅</span>
        <div>
          <h3 className="font-bold">Fast Book Search</h3>
          <p className="text-slate-600">
            Locate books instantly using powerful search features.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-3xl">✅</span>
        <div>
          <h3 className="font-bold">Secure Records</h3>
          <p className="text-slate-600">
            All member and borrowing information is stored securely.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-3xl">✅</span>
        <div>
          <h3 className="font-bold">Easy Management</h3>
          <p className="text-slate-600">
            Simple interface for librarians and administrators.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <span className="text-3xl">✅</span>
        <div>
          <h3 className="font-bold">Modern Technology</h3>
          <p className="text-slate-600">
            Built with React, ASP.NET Core, and SQL Server.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-indigo-600">500+</h2>
            <p className="text-slate-500 mt-2">Books</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-green-600">250+</h2>
            <p className="text-slate-500 mt-2">Members</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-orange-500">120+</h2>
            <p className="text-slate-500 mt-2">Borrowed Books</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h2 className="text-4xl font-bold text-purple-600">24/7</h2>
            <p className="text-slate-500 mt-2">Availability</p>
          </div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">
            What People Say
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Librarians and readers love how simple and modern this system is.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-slate-600 italic">
                “This system made our library operations so much smoother. Borrowing and tracking books is now effortless.”
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-800">Amina Hassan</h3>
                <p className="text-sm text-slate-500">Library Manager</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-slate-600 italic">
                “The dashboard is clean, fast, and easy to use. I can find everything I need in seconds.”
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-800">Khalid Yusuf</h3>
                <p className="text-sm text-slate-500">Senior Member</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <p className="text-slate-600 italic">
                “It has transformed the way we manage our books and members. Highly recommended for any library.”
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-slate-800">Salma Ali</h3>
                <p className="text-sm text-slate-500">Community Librarian</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-center mb-10">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="border rounded-lg p-5">
        <h3 className="font-bold">
          Who can borrow books?
        </h3>
        <p className="text-slate-600 mt-2">
          Registered library members can borrow available books according
          to the library's borrowing policy.
        </p>
      </div>

      <div className="border rounded-lg p-5">
        <h3 className="font-bold">
          Can books be renewed?
        </h3>
        <p className="text-slate-600 mt-2">
          Yes. Members can request a renewal if the book has not been reserved by another member.
        </p>
      </div>

      <div className="border rounded-lg p-5">
        <h3 className="font-bold">
          How do I search for a book?
        </h3>
        <p className="text-slate-600 mt-2">
          Use the search feature to find books by title, author, ISBN, or category.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-slate-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-bold mb-3">
                Book Management
              </h3>
              <p className="text-slate-600">
                Add, edit, delete, and search books quickly with an organized
                catalog system.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">👨‍🎓</div>
              <h3 className="text-xl font-bold mb-3">
                Member Management
              </h3>
              <p className="text-slate-600">
                Register library members and manage their information easily.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">
                Borrow & Return
              </h3>
              <p className="text-slate-600">
                Keep track of borrowed books, return dates, and overdue records.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl md:text-4xl font-bold">
            Start Managing Your Library Today
          </h2>

          <p className="mt-4 text-indigo-100 text-lg">
            A simple, modern, and efficient way to organize your books and
            members.
          </p>

          <Link
            to="/books"
            className="inline-block mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition"
          >
            Get Started
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;
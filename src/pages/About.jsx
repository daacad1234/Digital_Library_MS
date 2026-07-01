import React from "react";

function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl text-white p-10 mb-10 shadow-lg">
          <div className="text-6xl mb-4">📚</div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Library Management System
          </h1>

          <p className="text-lg text-indigo-100 max-w-3xl">
            The Library Management System is a modern web application designed
            to simplify library operations by managing books, members,
            borrowing records, and reports through an easy-to-use interface.
          </p>
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Left */}
          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Project Information
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="text-sm uppercase font-semibold text-slate-500">
                  Project Name
                </h3>
                <p className="text-lg text-slate-700">
                  Library Management System
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase font-semibold text-slate-500">
                  Purpose
                </h3>
                <p className="text-slate-700">
                  To automate library activities including managing books,
                  members, borrowing, returning books, and generating reports.
                </p>
              </div>

              <div>
                <h3 className="text-sm uppercase font-semibold text-slate-500">
                  Version
                </h3>
                <p className="text-slate-700">Version 1.0</p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-xl shadow-md p-8">

            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Technology Stack
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Frontend</span>
                <span>React.js + Tailwind CSS</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Backend</span>
                <span>ASP.NET Core Web API</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">ORM</span>
                <span>Entity Framework Core (LINQ)</span>
              </div>

              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Database</span>
                <span>SQL Server</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Architecture</span>
                <span>REST API</span>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 bg-white rounded-xl shadow-md p-8">
  <h2 className="text-3xl font-bold text-slate-800 mb-6">
    System Modules
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border rounded-lg p-5">
      <h3 className="font-bold text-lg mb-2">📚 Book Module</h3>
      <p className="text-slate-600">
        Manage book records including adding, editing,
        deleting, and searching books.
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="font-bold text-lg mb-2">👨‍🎓 Member Module</h3>
      <p className="text-slate-600">
        Register members and maintain their information.
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="font-bold text-lg mb-2">🔄 Borrowing Module</h3>
      <p className="text-slate-600">
        Record book borrowing and returning transactions.
      </p>
    </div>

    <div className="border rounded-lg p-5">
      <h3 className="font-bold text-lg mb-2">📊 Reporting Module</h3>
      <p className="text-slate-600">
        Generate reports for books, members, and borrowing history.
      </p>
    </div>

  </div>
</div>

        <div className="mt-12 bg-white rounded-xl shadow-md p-8">

  <h2 className="text-3xl font-bold text-slate-800 mb-6">
    System Workflow
  </h2>

  <div className="grid md:grid-cols-5 gap-4 text-center">

    <div className="p-4 border rounded-lg">
      <div className="text-4xl">👤</div>
      <h3 className="font-semibold mt-2">Login</h3>
    </div>

    <div className="p-4 border rounded-lg">
      <div className="text-4xl">📚</div>
      <h3 className="font-semibold mt-2">Manage Books</h3>
    </div>

    <div className="p-4 border rounded-lg">
      <div className="text-4xl">👨‍🎓</div>
      <h3 className="font-semibold mt-2">Manage Members</h3>
    </div>

    <div className="p-4 border rounded-lg">
      <div className="text-4xl">🔄</div>
      <h3 className="font-semibold mt-2">Borrow / Return</h3>
    </div>

    <div className="p-4 border rounded-lg">
      <div className="text-4xl">📊</div>
      <h3 className="font-semibold mt-2">Reports</h3>
    </div>

  </div>

</div>

        {/* Features */}
        <div className="mt-10">

          <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
            Main Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">📖</div>
              <h3 className="font-bold text-lg mb-2">
                Book Management
              </h3>
              <p className="text-slate-600 text-sm">
                Add, edit, delete, and search books efficiently.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">👨‍🎓</div>
              <h3 className="font-bold text-lg mb-2">
                Member Management
              </h3>
              <p className="text-slate-600 text-sm">
                Register and manage library members easily.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">🔄</div>
              <h3 className="font-bold text-lg mb-2">
                Borrow & Return
              </h3>
              <p className="text-slate-600 text-sm">
                Track borrowed books and return dates accurately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-bold text-lg mb-2">
                Reports
              </h3>
              <p className="text-slate-600 text-sm">
                Generate reports for books, members, and borrowing history.
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl p-8 shadow-lg">

  <h2 className="text-3xl font-bold mb-6">
    Benefits of the System
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      ✅ Saves time during book transactions.
    </div>

    <div>
      ✅ Improves record accuracy.
    </div>

    <div>
      ✅ Reduces paperwork.
    </div>

    <div>
      ✅ Easy search for books and members.
    </div>

    <div>
      ✅ Better organization of library resources.
    </div>

    <div>
      ✅ User-friendly interface.
    </div>

  </div>

</div>

<div className="mt-10 bg-white rounded-xl shadow-md p-8">

  <h2 className="text-3xl font-bold text-slate-800 mb-6">
    Future Improvements
  </h2>

  <ul className="space-y-3 list-disc ml-6 text-slate-700">
    <li>Barcode scanning support.</li>
    <li>QR code for books.</li>
    <li>Email notifications for overdue books.</li>
    <li>Online member registration.</li>
    <li>Book reservation system.</li>
    <li>Fine calculation for overdue books.</li>
    <li>Dashboard analytics and charts.</li>
    <li>Role-based authentication.</li>
    <li>Mobile responsive application.</li>
  </ul>

</div>

        {/* Footer */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 text-center">

          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Developer Information
          </h2>

          <p className="text-slate-600">
            Developed as an academic project using modern web technologies.
          </p>

          <div className="mt-6 space-y-2">
            <p>
              <strong>Email:</strong> haruundaacad91@gmail.com
            </p>

            <p>
              <strong>Course:</strong> C# Web Application Development
            </p>

            <p>
              <strong>Year:</strong> 2026
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;
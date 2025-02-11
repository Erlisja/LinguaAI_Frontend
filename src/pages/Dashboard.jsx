import React from "react";
import { Link } from "react-router";
import { FaHome, FaBook, FaUser, FaCog } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold">LinguaAI</h1>
        <nav className="flex flex-col gap-4">
          <Link className="flex items-center gap-2 text-lg hover:text-gray-200" to="/home">
            <FaHome /> Home
          </Link>
          <Link className="flex items-center gap-2 text-lg hover:text-gray-200" to="/lessons">
            <FaBook /> Lessons
          </Link>
          <Link className="flex items-center gap-2 text-lg hover:text-gray-200" to="/profile">
            <FaUser /> Profile
          </Link>
          <Link className="flex items-center gap-2 text-lg hover:text-gray-200" to="/settings">
            <FaCog /> Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-800">Welcome back, User!</h2>
        <p className="text-gray-600 mt-2">Continue learning and improve your skills.</p>

        {/* Lesson Cards */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold">Beginner Lessons</h3>
            <p className="text-gray-500">Start with the basics</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Start</button>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold">Intermediate Lessons</h3>
            <p className="text-gray-500">Improve your skills</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Continue</button>
          </div>

          <div className="p-6 bg-white shadow-md rounded-lg text-center">
            <h3 className="text-xl font-bold">Advanced Lessons</h3>
            <p className="text-gray-500">Master the language</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Challenge</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

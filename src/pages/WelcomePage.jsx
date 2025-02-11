import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router';

function WelcomePage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col flex-grow items-center justify-center   bg-conic-180 from-blue-700 via-indigo-100 to-blue-700  text-black">
          <h1 className="md:text-7xl font-bold mb-4  text-4xl p-5">
            Welcome to LinguaAI
          </h1>
          <p className="md:text-lg text-2xl p-5">
            Your AI-powered language learning assistant
          </p>
          <div className="flex gap-4 mt-6">
            <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold shadow-md hover:bg-gray-200">
              Login
            </button>
            <Link to="/register">
              <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold shadow-md hover:bg-gray-200">
                Register
              </button>
            </Link>
          </div>
          <a
            href="#"
            class="text-sm-6 mt-4 underline font-semibold text-#ffff-900"
          >
            Continue as Guest <span aria-hidden="true">→</span>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WelcomePage;

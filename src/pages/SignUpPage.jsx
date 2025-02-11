import React from "react";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";

const SignupPage = () => {
  return (
    <>
    
<div className="flex flex-col h-screen ">
    <div className="flex flex-col flex-grow items-center justify-center  bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
    <h1 className="text-4xl antialiased font-medium mb-10 text-slate-900">
        <Typewriter
          words={["Welcome to LinguaAI", "Sign Up to start learning"]}
          loop={false}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1000}
        />
     
      </h1>
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Sign Up</h2>
        <p className="text-center text-gray-600 mt-2">Create your LinguaAI account</p>

        <form className="mt-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>
           {/* Confirm Password */}
           <div className="mt-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
            />
          </div>
          

          {/* Signup Button */}
          <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all">
            Sign Up
          </button>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>     
    </div> 
    <Footer />
</div>  


     </>
  );
};

export default SignupPage;

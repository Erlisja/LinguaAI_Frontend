import React, { use } from 'react';
import Footer from '../components/Footer';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import userServices from '../services/user-services';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function LoginPage({ setUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // function to handle the form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // function to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { ...formData };
    setIsLoading(true);
    // Call the login function from the user services to login the user with the credentials
    try {
      const user = await userServices.login(credentials);
      if (!user) {
        throw new Error('Invalid credentials');
      }
      setUser(user);
      navigate('/dashboard');
    } // Catch the error and set the error message for the user to see
    catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  
  return (
    <>
      <div className="flex flex-col h-screen ">
        <div className="flex flex-col flex-grow items-center justify-center  bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500">
          <h1 className="text-4xl antialiased font-medium mb-10 text-slate-950">
            <Typewriter
              words={['Welcome to LinguaAI', 'Login to start learning']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Login{' '}
            </h2>
            <p className="text-center text-gray-600 mt-2">
              Enter your credentials
            </p>
            <form className="mt-6" autoComplete="off" onSubmit={handleSubmit}>
            {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
              {/* Email */}
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
              </div>

              {/* Password */}
              <div className="mt-4 relative">
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 mt-2 border-1 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-3 right-3 flex items-center text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              </div>
             
            

              {/* Login Button */}
              <button
                type="submit"
                className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Login'}
              </button>

              {/* Forgot Password */}
              <a
                href="#"
                className="text-sm mt-4 underline font-semibold text-zinc-900"
              >
                Forgot Password?
              </a>
              {/* Already have an account */}
              <p className="text-center text-gray-600 mt-4">
                Do not have an account?{' '}
                <a href="/register" className="text-blue-500 hover:underline">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default LoginPage;

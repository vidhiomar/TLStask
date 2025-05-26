import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleFocus = (fieldName) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', form); // Replace with full URL if needed
      console.log('Sign-up successful:', response.data);
      // Optionally redirect user or show a success message
    } catch (error) {
      console.error('Sign-up error:', error.response?.data || error.message);
      // Optionally show error message to user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 relative overflow-hidden">
      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="relative py-8 px-6" style={{ background: 'linear-gradient(135deg, #070054 0%, #0a0066 100%)' }}>
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h1 className="text-white text-3xl font-bold tracking-tight">Join Us</h1>
              <p className="text-white/80 text-sm mt-2">Create your account to get started</p>
            </div>
          </div>

          <div className="p-8 space-y-6">
            {/* Name Field */}
            <div className="relative group">
              <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Name</label>
              <div className="relative">
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'name' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Email Address</label>
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'email' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative group">
              <label className="block text-sm font-medium mb-2" style={{ color: '#070054' }}>Password</label>
              <div className="relative">
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                  placeholder="Create a strong password"
                  required
                  className="w-full px-4 py-3 bg-gray-50 text-gray-800 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg placeholder-gray-400"
                  style={{
                    borderColor: focusedField === 'password' ? '#070054' : '#d9d9d9',
                    boxShadow: focusedField === 'password' ? '0 0 0 3px rgba(7, 0, 84, 0.1)' : 'none'
                  }}
                />
              </div>
              {form.password && (
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${form.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span>At least 8 characters</span>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #070054 0%, #0a0066 100%)',
                boxShadow: '0 10px 25px rgba(7, 0, 84, 0.3)',
                focusRingColor: 'rgba(7, 0, 84, 0.5)'
              }}
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="#ffff" stroke="#070054" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Create Account
              </div>
              <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </button>

            {/* Redirect Link */}
            <div className="text-center pt-4 border" style={{ borderColor: '#d9d9d9' }}>
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/signin" className="font-semibold hover:underline transition-colors duration-200" style={{ color: '#070054' }}>
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

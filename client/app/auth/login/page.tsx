"use client"

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  [key: string]: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your login logic
    console.log('Form Data:', formData);
  };

  return (
    <div className='w-screen flex items-center justify-center flex-col my-24'>
      <h1 className='text-2xl font-bold uppercase'>Login</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>
        <p className='mt-6 text-sm'>Do not have an account? <Link className='uppercase font-semibold text-blue-600' href="/auth/register">Register</Link></p>
      </form>
    </div>
  );
};

export default LoginPage;
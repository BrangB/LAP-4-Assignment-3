"use client"

import React, { useState } from 'react';
import Link from 'next/link';

interface FormData {
  [key: string]: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your registration logic
    console.log('Form Data:', formData);
  };

  return (
    <div className='w-screen flex items-center justify-center flex-col my-24'>
      <h1 className='text-2xl font-bold uppercase'>Register</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
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
          Create an account
        </button>
        <p className='mt-6 text-sm'>If already have an account, <Link className='uppercase font-semibold text-blue-600' href="/auth/login">Login</Link></p>
      </form>
    </div>
  );
};

export default RegisterPage;
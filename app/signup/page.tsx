"use client";

import Link from "next/link";


export default function SignupPage() {
  return (
      <div className="container mx-auto p-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Sign up</h1>
        <form className="mt-8">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link href="/login" className="text-blue-600 hover:underline ml-1">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

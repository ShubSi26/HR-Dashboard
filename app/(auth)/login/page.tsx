"use server";

import Login from "@/components/login";

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">HR Dashboard  </h1>
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Sign in to continue
        </h1>
            <p className="text-sm text-gray-600 text-center mb-6">
              Use your Google account to log in
            </p>
            <Login />
      </div>
    </main>
  );
}
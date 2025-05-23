"use client";

import { signIn } from "next-auth/react";
export default function GoogleLoginButton() {
  const handleGoogleLogin = () => {
    signIn("google",{ callbackUrl: "/" }); 
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 transition"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google Logo"
        className="w-5 h-5"
      />
      <span className="text-sm text-gray-800 font-medium">Sign in with Google</span>
    </button>
  );
}

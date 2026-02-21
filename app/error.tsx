import Link from "next/link";
import React from "react";

function error() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">500</h1>
        <p className="text-xl text-gray-600 mb-8">Internal Server Error</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default error;

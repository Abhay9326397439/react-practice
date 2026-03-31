import React from "react";
import FloatingLines from "../component/FloatingLines";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* 🔥 Animated Background */}
      <FloatingLines />

      {/* 🌟 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        
        <h1 className="text-5xl font-bold mb-4">
          Welcome 🚀
        </h1>

        <p className="text-lg mb-6">
          3D Animated Background using Three.js
        </p>

        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl">
          Get Started
        </button>

      </div>
    </div>
  );
}
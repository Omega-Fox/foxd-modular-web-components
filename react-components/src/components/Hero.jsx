import React from "react";

function Hero() {
  return (
    <section id="hero" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Your Company</h2>
        <p className="text-lg text-gray-600 mb-6">
          This is your hero section. Use this space to introduce your brand or highlight a feature.
        </p>
        <a href="#services" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default Hero;

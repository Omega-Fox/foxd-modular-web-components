import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Your Company</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="text-gray-700 hover:text-black">Home</a></li>
          <li><a href="#services" className="text-gray-700 hover:text-black">Services</a></li>
          <li><a href="#gallery" className="text-gray-700 hover:text-black">Gallery</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

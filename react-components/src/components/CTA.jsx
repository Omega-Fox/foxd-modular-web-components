import React from "react";

function Cta() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">Ready to get started?</h2>
        <p className="mb-6">Your call-to-action text goes here. Encourage users to take the next step.</p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded hover:bg-gray-100"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default Cta;

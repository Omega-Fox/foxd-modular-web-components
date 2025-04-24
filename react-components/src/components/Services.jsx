import React from "react";

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12">What we offer to our amazing clients.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service One</h3>
            <p className="text-gray-500">Description of the first service offering.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service Two</h3>
            <p className="text-gray-500">Description of the second service offering.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Service Three</h3>
            <p className="text-gray-500">Description of the third service offering.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

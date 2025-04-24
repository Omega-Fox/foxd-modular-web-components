import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="bg-white rounded-lg shadow">
              <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                Image {img}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;


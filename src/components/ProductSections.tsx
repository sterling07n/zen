import React from 'react';

const ProductSections = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            More Than Just Viral Clips
          </h2>
          <p className="text-xl text-gray-600">Complete solutions for content creators and educators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Courses */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">📘</div>
              <h3 className="text-lg font-bold">Courses</h3>
            </div>
            <p className="text-blue-900 font-semibold">Resell 8 Premium White-Labelled Courses</p>
            <p className="text-sm text-gray-700 mt-1">
              Access a curated library of 8 high-value courses. Each premium course delivers 6–12 hours of content, 30–100 pages of worksheets, and real student testimonials.
            </p>
          </div>

          {/* Communities */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">👥</div>
              <h3 className="text-lg font-bold">Communities</h3>
            </div>
            <p className="text-yellow-900 font-semibold">Instant 2K+ Community, Built-In</p>
            <p className="text-sm text-gray-700 mt-1">
              Tap into our thriving community of 2,000+ engaged members. Sell access or use it to boost course engagement—fully set up and ready to go.
            </p>
          </div>

          {/* Course Editor */}
          <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 md:col-span-2">
            <div className="flex items-center mb-2">
              <div className="text-2xl mr-2">🖊️</div>
              <h3 className="text-lg font-bold">Course Editor</h3>
            </div>
            <p className="text-blue-800 font-semibold">Customise, White-Label & Make It Yours</p>
            <p className="text-sm text-gray-700 mt-1">
              Customise every course in seconds. Edit slides, swap visuals via Canva, tweak scripts, and even add your own AI voiceover—all within ZenCourse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSections;
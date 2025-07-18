import React from 'react';

const DetailedFeatures = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-br from-blue-950 to-blue-800 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">🎬</div>
              <p className="text-lg font-semibold">25,000+ Videos</p>
              <p className="text-sm opacity-80">Ready to Post</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">Post from 25,000+ pre-made videos</p>
        </div>

        {/* Right Column: Text Content for Content Library */}
        <div>
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full bg-[#76c893] flex items-center justify-center mr-2">
              <span className="text-white text-xl">📂</span>
            </div>
            <h2 className="text-xl font-bold text-black">Content Library</h2>
          </div>
          <h3 className="text-2xl font-semibold text-black mb-3">25K videos to grow your social media</h3>
          <p className="text-gray-700 mb-6">
            Unlock a premium vault of pre-edited viral content—luxury lifestyle reels, motivational clips, and more—engineered to explode your reach on social.
          </p>
          <a href="#" className="bg-[#023e8a] hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition">
            Start now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailedFeatures;
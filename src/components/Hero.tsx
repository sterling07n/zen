import React from 'react';

const Hero = () => {
  return (
    <section className="pt-44 pb-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Get <span className="text-[#023e8a]">8,000+</span> New<br />
          Viral Clips Every Month
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          ZenCourse helps creators grow faster with scroll-stopping, ready-to-post content delivered daily.
        </p>
        
        <button className="bg-[#023e8a] text-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-[#034da2] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Start Now – Get Instant Access
        </button>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          About ZenCourse
        </h2>
        
        <div className="text-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            ZenCourse is your calm in the content storm — a platform designed to fuel your growth 
            with high-quality, viral content packs.
          </p>
          
          <p>
            Whether you're building on YouTube, Instagram, TikTok, or client brands — we help you 
            post smarter, faster.
          </p>
          
          <p className="text-[#023e8a] font-semibold">
            Join thousands of creators who trust ZenCourse to elevate their content game.
          </p>
        </div>

        <div className="mt-12">
          <button className="bg-[#023e8a] text-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-[#034da2] transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Play, Star, TrendingUp } from 'lucide-react';

const VideoShowcase = () => {
  const catalogItems = [
    {
      id: 1,
      title: 'Luxury Lifestyle',
      subtitle: 'Beach & Travel Clips',
      emoji: '🏖️',
      gradient: 'from-purple-600 to-blue-600',
      count: '2,500+',
      trending: true
    },
    {
      id: 2,
      title: 'Motivational',
      subtitle: 'Success & Mindset',
      emoji: '💪',
      gradient: 'from-orange-500 to-red-600',
      count: '1,800+',
      trending: false
    },
    {
      id: 3,
      title: 'Business',
      subtitle: 'Entrepreneur Content',
      emoji: '💼',
      gradient: 'from-green-500 to-teal-600',
      count: '1,200+',
      trending: true
    },
    {
      id: 4,
      title: 'Tech & Innovation',
      subtitle: 'Future & AI Content',
      emoji: '🚀',
      gradient: 'from-blue-500 to-indigo-600',
      count: '900+',
      trending: false
    },
    {
      id: 5,
      title: 'Fitness & Health',
      subtitle: 'Workout & Wellness',
      emoji: '🏃‍♀️',
      gradient: 'from-pink-500 to-rose-600',
      count: '1,500+',
      trending: true
    },
    {
      id: 6,
      title: 'Fashion & Style',
      subtitle: 'Trends & Outfits',
      emoji: '👗',
      gradient: 'from-violet-500 to-purple-600',
      count: '800+',
      trending: false
    }
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            8000+ HD Clips Per Month
          </h2>
          <p className="text-gray-300 text-xl mb-8">
            Discover our premium content catalog across trending categories
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 animate-slide-up">
          {catalogItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Trending Badge */}
              {item.trending && (
                <div className="absolute top-4 left-4 z-10 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  TRENDING
                </div>
              )}

              {/* Content Count Badge */}
              <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {item.count} clips
              </div>

              {/* Main Content Area */}
              <div className={`bg-gradient-to-br ${item.gradient} h-80 flex items-center justify-center relative overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="text-center text-white z-10 relative">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{item.subtitle}</p>
                  
                  {/* Play Button */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">Premium Quality</span>
                  </div>
                  <div className="text-sm opacity-80">HD • Ready to Post</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#023e8a] to-[#034da2] rounded-2xl p-8 mb-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Ready to Explore Our Full Content Library?
              </h3>
              <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                Get instant access to thousands of viral-ready clips, organized by category and updated daily
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-[#023e8a] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Start Free Trial
                </button>
                
                <button className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <Play className="w-5 h-5 mr-2" />
                  View Sample Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">8,000+</div>
              <div className="text-gray-400 text-sm">New Clips Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25K+</div>
              <div className="text-gray-400 text-sm">Total Library</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">HD</div>
              <div className="text-gray-400 text-sm">Quality Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Instant Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
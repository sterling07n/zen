import React from 'react';
import { TrendingUp, Zap, Shield, Download, FolderOpen, MessageCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      iconColor: '#ffba08', // golden yellow
      title: '8,000+ New Clips Monthly',
      description: 'Fresh viral content delivered every day to keep your feed engaging'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      iconColor: '#0077b6', // deep sky blue
      title: 'Optimized for TikTok, Reels & Shorts',
      description: 'Perfect aspect ratios and trending formats for maximum reach'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      iconColor: '#76c893', // mint green
      title: '100% Commercial Use Licensed',
      description: 'Use content for client work, monetization, and business growth'
    },
    {
      icon: <Download className="w-8 h-8" />,
      iconColor: '#5a189a', // rich purple
      title: 'Lightning-Fast Downloads',
      description: 'Instant access to HD content with our optimized delivery system'
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      iconColor: '#9d0208', // bold red
      title: 'Organized by Trend & Niche',
      description: 'Easily find content that matches your brand and audience'
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      iconColor: '#2f3e46', // deep charcoal/navy
      title: 'Human Support from Creators',
      description: 'Get help from real content creators who understand your needs'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Go Viral
          </h2>
          <p className="text-xl text-gray-600">Powerful features designed for serious content creators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4 mb-4">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${feature.iconColor}15` }}
                >
                  <div style={{ color: feature.iconColor }}>
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
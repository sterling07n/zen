import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What if I don't make any money within the first 2 weeks?",
      answer: "We're so confident in the power of our system that we offer a 100% money-back guarantee. If you don't start seeing results or generating income within 14 days of using our AI automation solution, we'll give you a full refund — no questions asked. That's how sure we are it works."
    },
    {
      question: "How many clips do I get access to each month?",
      answer: "You get access to 8,000+ new viral clips every month, plus our entire library of 25,000+ existing clips. All content is updated daily with trending topics and formats."
    },
    {
      question: "Can I use these clips for commercial purposes?",
      answer: "Yes! All our content comes with 100% commercial use licensing. You can use the clips for client work, monetization, business growth, and any commercial applications without restrictions."
    },
    {
      question: "What video formats and quality do you provide?",
      answer: "All clips are provided in Full HD quality, optimized for TikTok, Instagram Reels, and YouTube Shorts. They're delivered in the perfect aspect ratios and formats for maximum engagement on each platform."
    },
    {
      question: "How quickly can I download and start using the content?",
      answer: "Instantly! Once you subscribe, you get immediate access to our entire content library with lightning-fast downloads. Our optimized delivery system ensures you can start posting within minutes."
    },
    {
      question: "Do you offer support if I need help?",
      answer: "Absolutely! We provide human support from real content creators who understand your needs. Our team is here to help you succeed with personalized assistance and guidance."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ❓ Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Get answers to common questions about ZenCourse</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  Q: {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#023e8a] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#023e8a] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#023e8a]">A:</span> {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="bg-[#023e8a] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#034da2] transition-all duration-300 transform hover:scale-105">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
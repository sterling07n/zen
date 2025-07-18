import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

declare global {
  interface Window {
    YocoSDK: any;
  }
}

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [yoco, setYoco] = useState<any>(null);

  useEffect(() => {
    // Initialize Yoco SDK when component mounts
    if (window.YocoSDK) {
      const yocoInstance = new window.YocoSDK({
        publicKey: 'pk_test_8c6f8b1akw61GPDcfc44'
      });
      setYoco(yocoInstance);
    }
  }, []);

  const handlePayment = (plan: any) => {
    if (!yoco) {
      alert('Payment system is loading. Please try again in a moment.');
      return;
    }

    // Convert price to cents (remove R and convert to number)
    const priceString = plan.price.replace('R', '').replace(',', '');
    const amountInCents = parseInt(priceString) * 100;

    yoco.showPopup({
      amountInCents: amountInCents,
      currency: 'ZAR',
      name: 'ZenCourse',
      description: `${plan.name} - ${plan.period}`,
      callback: function (result: any) {
        if (result.error) {
          alert("Payment Error: " + result.error.message);
        } else {
          // In a real application, you would send this token to your backend
          console.log('Payment token:', result.id);
          alert(`Payment successful! Welcome to ZenCourse ${plan.name}!`);
          
          // Here you would typically:
          // 1. Send the token to your backend
          // 2. Process the payment server-side
          // 3. Grant access to the user
          
          // For demo purposes:
          fetch('/process-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              token: result.id,
              plan: plan.name,
              amount: amountInCents 
            })
          })
          .then(response => response.text())
          .then(data => console.log('Server response:', data))
          .catch(error => console.log("Server integration needed:", error.message));
        }
      }
    });
  };

  const plans = {
    monthly: [
      {
        name: 'Starter Plan',
        price: 'R249',
        originalPrice: 'R499',
        period: '/month',
        features: [
          'Access to 8,000+ monthly clips',
          'Full HD downloads',
          'Daily updates',
          'Cancel anytime'
        ],
        cta: 'Start Monthly',
        popular: false
      },
      {
        name: 'Pro Plan',
        price: 'R600',
        period: '/3 months',
        features: [
          'Everything in Starter',
          'Save 20%',
          'Early access to viral packs',
          'Commercial license'
        ],
        cta: 'Go Quarterly',
        popular: true
      },
      {
        name: 'Annual Plan',
        price: 'R2,399',
        period: '/year',
        features: [
          'Everything in Pro',
          'Save 30%',
          'Bonus trending template bundle',
          'Premium support'
        ],
        cta: 'Go Yearly & Save',
        popular: false
      }
    ]
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple Pricing for Serious Creators
          </h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your content creation needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.monthly.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
              plan.popular ? 'border-[#023e8a] ring-4 ring-[#023e8a]/10' : 'border-gray-200'
            }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#023e8a] text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#023e8a]">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <span className="text-gray-400 line-through text-lg">{plan.originalPrice}</span>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-[#023e8a] mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handlePayment(plan)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-[#023e8a] text-white hover:bg-[#034da2]' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-sm">
            Secure payments powered by Yoco. All transactions are encrypted and protected.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
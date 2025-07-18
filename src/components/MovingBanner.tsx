import React from 'react';

const MovingBanner = () => {
  return (
    <div className="w-full overflow-hidden bg-[#023e8a] text-white font-sans text-lg whitespace-nowrap relative py-3">
      <div className="inline-block pl-full animate-scroll-left">
        🚨 New course just dropped yesterday! 🚀 Enroll now and level up. 💻
      </div>
    </div>
  );
};

export default MovingBanner;
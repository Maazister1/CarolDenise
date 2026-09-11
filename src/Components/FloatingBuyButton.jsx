import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/icon2.png' 

function FloatingBuyButton() {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3 seconds tak message dikhega
    }, 6000); // Har 6 seconds ke baad dobara trigger hoga

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Animated Message Popup with Solid White Background */}
      <div 
        className={`transition-all duration-500 transform ${
          showAlert ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        <div className="text-[#14213D] font-serif font-bold text-sm sm:text-base px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-xl whitespace-nowrap animate-pulse">
           Buy Now & Distributors!
        </div>
      </div>

      {/* Floating Icon with No Background */}
      <Link 
        to="/pages/distribution"
        className="flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 group animate-bounce"
        style={{ animationDuration: '3s' }}
        title="Buy Book & Distributors"
      >
        <img 
          src={icon1} 
          alt="Buy Now" 
          className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]" 
        />
      </Link>
    </div>
  )
}

export default FloatingBuyButton;
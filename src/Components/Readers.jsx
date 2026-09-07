import React, { useState, useEffect } from 'react';

function Readers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const reviews = [
        {
            quote: "Superheroes in Training is a refreshing and heartfelt collection that blends humor with meaningful life lessons. Carol Denise writes in a way that feels genuine and uplifting.",
            name: "Thomas Kelly",
            role: "CEO & Founder",
            rating: 5
        },
        {
            quote: "This book offers more than stories. It provides encouragement, wisdom, and a powerful reminder that everyday moments can shape character and purpose.",
            name: "Elizabeth",
            role: "Director",
            rating: 4
        },
        {
            quote: "As a teenage mom, I found this book very emotional yet uplifting. I hope to pass this down to my daughter, who is now 4.",
            name: "Ann-Marie Massey",
            role: "Insurance Broker",
            rating: 5
        },
        {
            quote: "The Family Matriarch made such a beautiful gift to my granddaughters, and the words moved them as they embarked on a new journey all by themselves.",
            name: "Liam Steiner",
            role: "Quality Manager",
            rating: 3
        }
    ];

    // Auto slide loop effect for review cards every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-white pt-3 pb-12 md:pb-16 font-sans border-t border-[#14213D]/10 overflow-hidden">
            {/* Heading aligned nicely with container padding */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mb-6">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-1.5 block">
                    READERS
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight">
                    What people say
                </h2>
            </div>

            {/* Main Layout */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                
                {/* Left Side: Phone Mockup with Click to Open Video */}
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div 
                        onClick={() => setIsVideoOpen(true)}
                        className="relative w-[260px] sm:w-[290px] h-[520px] sm:h-[580px] bg-black rounded-[40px] p-3 shadow-xl border-[4px] border-[#222] flex-shrink-0 cursor-pointer group transition-transform hover:scale-[1.02]"
                        title="Click to play video"
                    >
                        {/* Play Overlay Icon on Hover */}
                        <div className="absolute inset-0 bg-black/30 rounded-[36px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg text-[#14213D] pl-1 text-xl">
                                ▶
                            </div>
                        </div>

                        {/* Phone Speaker / Notch */}
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                            <div className="w-10 h-1 bg-[#333] rounded-full"></div>
                        </div>

                        {/* Phone Inner Screen */}
                        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black pointer-events-none">
                            <video 
                                src="https://res.cloudinary.com/gm9p9g7j/video/upload/v1788205756/celebrityreview.mp4"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Side: Single Auto-sliding Review Card */}
                <div className="lg:col-span-7 flex flex-col justify-center w-full">
                    <div className="relative bg-[#F7F7F7] p-6 sm:p-10 border border-[#14213D]/10 flex flex-col justify-between min-h-[280px] sm:min-h-[320px] shadow-sm transition-all duration-500">
                        
                        {/* Review Content */}
                        <div>
                            <p className="text-base sm:text-xl font-serif italic text-[#14213D] leading-relaxed mb-6 transition-opacity duration-300">
                                "{reviews[currentIndex].quote}"
                            </p>
                        </div>

                        {/* Rating, Name & Controls */}
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-auto">
                            <div>
                                {/* Star Rating Display */}
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 sm:w-5 sm:h-5 ${i < reviews[currentIndex].rating ? 'text-[#E5A93B]' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Name & Role */}
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-[1px] bg-[#14213D]/50"></span>
                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#14213D]">
                                        {reviews[currentIndex].name} <span className="font-normal text-[#14213D]/70 normal-case ml-1">{reviews[currentIndex].role}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Arrow Controls < > */}
                            <div className="flex items-center gap-2 self-end sm:self-auto">
                                <button 
                                    onClick={prevSlide}
                                    className="w-9 h-9 rounded-full border border-[#14213D]/20 flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all shadow-sm text-sm"
                                    aria-label="Previous Review"
                                >
                                    &lt;
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="w-9 h-9 rounded-full border border-[#14213D]/20 flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all shadow-sm text-sm"
                                    aria-label="Next Review"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Video Popup Modal with Cut (X) Option */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-md bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center">
                        {/* Cut / Close Button */}
                        <button 
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black font-bold flex items-center justify-center transition-all text-lg"
                            aria-label="Close video"
                        >
                            ✕
                        </button>

                        {/* Full Video Player */}
                        <video 
                            src="https://res.cloudinary.com/gm9p9g7j/video/upload/v1788205756/celebrityreview.mp4"
                            controls
                            autoPlay
                            playsInline
                            className="w-full max-h-[80vh] object-contain rounded-2xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Readers;
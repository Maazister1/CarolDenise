import React, { useState } from 'react';

function Readers() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans border-t border-[#14213D]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                    READERS
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                    What people say
                </h2>
            </div>

            {/* Main Layout: Left Video in Phone Mockup, Right Single Slider Card with Arrows */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Side: Phone Mockup with Video */}
                <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="relative w-[280px] sm:w-[310px] h-[560px] sm:h-[620px] bg-black rounded-[45px] p-3.5 shadow-2xl border-[4px] border-[#222] flex-shrink-0">
                        {/* Phone Speaker / Notch */}
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                            <div className="w-12 h-1 bg-[#333] rounded-full"></div>
                        </div>

                        {/* Phone Inner Screen */}
                        <div className="relative w-full h-full rounded-[35px] overflow-hidden bg-black">
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

                {/* Right Side: Single Review Card with Navigation Arrows */}
                <div className="lg:col-span-7 flex flex-col justify-center w-full">
                    <div className="relative bg-[#F7F7F7] p-8 sm:p-12 border border-[#14213D]/10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] shadow-sm">
                        
                        {/* Review Content */}
                        <div>
                            <p className="text-lg sm:text-2xl font-serif italic text-[#14213D] leading-relaxed mb-8">
                                "{reviews[currentIndex].quote}"
                            </p>
                        </div>

                        {/* Rating, Name & Controls */}
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mt-auto">
                            <div>
                                {/* Star Rating Display */}
                                <div className="flex items-center gap-1 mb-3">
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
                                    <span className="w-4 h-[1px] bg-[#14213D]/50"></span>
                                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#14213D]">
                                        {reviews[currentIndex].name} <span className="font-normal text-[#14213D]/70 normal-case ml-1">{reviews[currentIndex].role}</span>
                                    </span>
                                </div>
                            </div>

                            {/* Arrow Controls < > */}
                            <div className="flex items-center gap-3 self-end sm:self-auto">
                                <button 
                                    onClick={prevSlide}
                                    className="w-10 h-10 rounded-full border border-[#14213D]/20 flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all shadow-sm"
                                    aria-label="Previous Review"
                                >
                                    &lt;
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="w-10 h-10 rounded-full border border-[#14213D]/20 flex items-center justify-center text-[#14213D] hover:bg-[#14213D] hover:text-white transition-all shadow-sm"
                                    aria-label="Next Review"
                                >
                                    &gt;
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Readers;
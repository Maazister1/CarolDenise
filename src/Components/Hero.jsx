

import React from 'react';
import heroBg from '../assets/bg.png';

function Hero() {
    return (
        <section 
            className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden font-sans bg-cover bg-center bg-no-repeat flex items-center"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url(${heroBg})` 
            }}
        >
            <div className="max-w-3xl mx-auto lg:mx-0 flex flex-col items-start text-left">
                
                {/* Subtitle Tag */}
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4">
                    THE OFFICIAL SITE OF CAROL DENISE
                </span>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight mb-6">
                    A labor and A <span className="italic"> <br /> legacy of love.</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-10 max-w-2xl font-normal">
                    Honestly, I am the last person on the face of the earth qualified <br /> to write a book. And at the same time, my love for my children <br /> kept pushing me forward.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-start items-center gap-4">
                    <a 
                        href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-[#14213D] text-[#111111] hover:text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-lg"
                    >
                        PURCHASE THE BOOK
                    </a>
                    <a 
                        href="#free-chapter" 
                        className="bg-transparent hover:bg-white/10 text-white border border-white/50 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                    >
                        GET FREE CHAPTER ONE
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;
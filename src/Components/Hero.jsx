// import React from 'react';
// import author from '../assets/book0.png';
// import book0 from '../assets/book3.png';

// function Hero() {
//     return (
//         <section className="w-full py-12 md:py-20 px-6 md:px-12 bg-white relative overflow-hidden font-sans">
//             <div className="max-w-7xl mx-auto">
                
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
//                     {/* Left Side: Headings, Subtext & Action Buttons */}
//                     <div className="lg:col-span-6 flex flex-col items-start text-left">
                        
//                         {/* Subtitle Tag */}
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4">
//                             THE OFFICIAL SITE OF CAROL DENISE
//                         </span>

//                         {/* Main Headline matching screenshot typography */}
//                         <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif font-normal text-[#14213D] leading-[1.1] tracking-tight mb-6">
//                             A labor and A <span className="italic">legacy of love.</span>
//                         </h1>

//                         {/* Description */}
//                         <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed mb-8 max-w-xl font-normal">
//                             Honestly, I am the last person on the face of the earth qualified to write a book. And at the same time, my love for my children kept pushing me forward.
//                         </p>

//                         {/* CTA Buttons */}
//                         <div className="flex flex-wrap items-center gap-4">
//                             <a 
//                               href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                                 className="bg-[#111111] hover:bg-[#14213D] text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
//                             >
//                                 PURCHASE THE BOOK
//                             </a>
//                             <a 
//                                 href="#free-chapter" 
//                                 className="bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
//                             >
//                                 GET FREE CHAPTER ONE
//                             </a>
//                         </div>

//                     </div>

//                     {/* Right Side: Author Image & Floating Book Asset */}
//                     <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
//                         <div className="relative w-full max-w-lg flex items-end">
                            
//                             {/* Author Image (author.jpg) */}
//                             <div className="w-full h-400px sm:h-480px overflow-hidden bg-[#14213D]/5">
//                                 <img 
//                                     src={author} 
//                                     alt="Carol Denise" 
//                                     className="w-full h-full object-cover object-top grayscale contrast-125"
//                                 />
//                             </div>

//                             {/* Book Image (book0.png) positioned on top left overlapping bottom */}
//                             <div className="absolute -left-6 sm:-left-10 -bottom-6 w-32 sm:w-40 z-10 drop-shadow-2xl">
//                                 <img 
//                                     src={book0} 
//                                     alt="The Family Matriarch Book" 
//                                     className="w-full h-auto object-contain"
//                                 />
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Hero;

import React from 'react';

function Hero() {
    return (
        <section 
            className="w-full py-24 md:py-32 px-6 md:px-12 relative overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://i.pinimg.com/1200x/93/0c/85/930c85c0c5d45f547099030ecab7bf32.jpg')` 
            }}
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                
                {/* Subtitle Tag */}
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
                    THE OFFICIAL SITE OF CAROL DENISE
                </span>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-white leading-[1.1] tracking-tight mb-6">
                    A labor and A <span className="italic">legacy of love.</span>
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-10 max-w-2xl font-normal">
                    Honestly, I am the last person on the face of the earth qualified to write a book. And at the same time, my love for my children kept pushing me forward.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center items-center gap-4">
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
                        className="bg-transparent hover:bg-white/10 text-white border border-white/40 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                    >
                        GET FREE CHAPTER ONE
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;
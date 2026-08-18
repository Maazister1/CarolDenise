import React from 'react';
import book0 from '../assets/mock1.png';
import amazonIcon from '../assets/amazon.png';
import BookShowcase2 from './Bookshowcase2';

function BookShowcase() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-12">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE FEATURED BOOK
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Written as letters. Read as inheritance.
                    </h2>
                    <p className="text-base sm:text-lg text-[#14213D]/80 max-w-2xl font-normal leading-relaxed">
                        A work dedicated to the women holding families together, carrying the weight, the work, and the legacy.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Book Cover with Inside Purchase on Amazon Button */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-full max-w-md h-[400px] sm:h-[480px] flex items-center justify-center p-8 bg-[#f9f9f9] border border-[#14213D]/10 shadow-sm">
                            
                            {/* Purchase on Amazon Button: White BG, Blue Text, Glowing Blue Shadow, Sharp Corners */}
                            <a 
                                href="https://www.amazon.com/Family-Matriarch-Labor-Legacy-Love/dp/B0CKNSH8Z1/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-50 text-[#14213D] px-3.5 py-2 flex items-center gap-2 transition-all duration-300 rounded-none no-underline border border-[#14213D]/20 group"
                                style={{ boxShadow: '0 0 20px rgba(20, 33, 61, 0.35), 0 4px 6px -1px rgba(20, 33, 61, 0.2)' }}
                            >
                                <img 
                                    src={amazonIcon} 
                                    alt="Amazon" 
                                    className="w-4 h-4 object-contain"
                                />
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                                    PURCHASE ON AMAZON
                                </span>
                            </a>

                            {/* Book Image */}
                            <img 
                                src={book0} 
                                alt="The Family Matriarch" 
                                className="max-h-[340px] sm:max-h-[400px] w-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details & Action Buttons */}
                    <div className="lg:col-span-7 flex flex-col">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            THE FAMILY MATRIARCH · 2026
                        </span>
                        
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#14213D] font-normal mb-2">
                            The Family Matriarch
                        </h3>
                        
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/70 mb-6">
                            A Labor and A Legacy of Love
                        </p>
                        
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                            The Family Matriarch: A Labor and A Legacy of Love centers around the topic of the family matriarch and the importance of that role. It is a personal take on the role of a woman in a family. The author, Carol, wrote this book as a love letter to her daughter, who she considers a matriarch-in-training. She hopes that her words will inspire not only her daughter but countless other matriarchs-in-training.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4">
                            <a 
                                href="/books/the-family"  
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all shadow-sm"
                            >
                                Learn More
                            </a>
                            <a 
                                href="/The-Family-Matriarch-Chapter-One.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center border border-[#14213D]/30 hover:border-[#14213D] text-[#14213D] text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all bg-white"
                            >
                                FREE CHAPTER
                            </a>
                        </div>

                    </div>

                </div>

            </div>
             <BookShowcase2 />
        </section>

     
    );
}

export default BookShowcase;

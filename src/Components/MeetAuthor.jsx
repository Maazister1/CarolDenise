import React from 'react';
import author1 from '../assets/author.jpg';

function MeetAuthor() {
    return (
        <section className="w-full bg-white py-12 md:py-20 px-6 md:px-12 font-sans border-t border-[#14213D]/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Side: Chhoti & Balanced Author Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-md h-[340px] sm:h-[400px] overflow-hidden rounded-none shadow-sm bg-[#14213D]/5 border border-[#14213D]/10">
                            <img 
                                src={author1} 
                                alt="Carol Denise writing" 
                                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content & Bari Gorgeous Heading */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        
                        {/* Subtitle */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14213D]/5 border-l-2 border-[#14213D] mb-4">
                            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#14213D]">
                                Meet The Author
                            </span>
                        </div>

                        {/* Bari Aur Shandaar Heading */}
                        <h2 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-6 leading-tight">
                            Carol Denise
                        </h2>

                        {/* Bio Paragraph 1 */}
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4 font-normal">
                            Carol Denise is an author, mentor, and lifelong advocate for building stronger communities through meaningful relationships. Her career spans nearly three decades in financial services, alongside years of leading youth mentoring initiatives, school partnership programs, and community outreach.
                        </p>

                        {/* Bio Paragraph 2 */}
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8 font-normal">
                            These experiences shaped her passion for helping people discover hope, purpose, and connection in every stage of life. Today, her writing explores the challenges of loneliness, resilience, and personal growth, encouraging readers to strengthen relationships, embrace their unique gifts, and become a positive influence in the lives of others.
                        </p>

                        {/* View More Button */}
                        <a 
                            href="/pages/author" 
                            className="inline-flex items-center gap-3 bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-[0.2em] px-8 py-4 rounded-none no-underline transition-all duration-300 uppercase shadow-md hover:translate-x-1"
                        >
                            <span>View Full Bio</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </a>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default MeetAuthor;
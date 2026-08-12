import React from 'react';
import author1 from '../assets/author1.jpg';

function MeetAuthor() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Author Writing Image */}
                    <div className="lg:col-span-6">
                        <div className="w-full h-380px sm:h-440px overflow-hidden bg-[#14213D]/5">
                            <img 
                                src={author1} 
                                alt="Carol Denise writing" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content & Bio */}
                    <div className="lg:col-span-6 flex flex-col items-start text-left">
                        
                        {/* Subtitle */}
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            MEET THE AUTHOR
                        </span>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-6">
                            Carol Denise
                        </h2>

                        {/* Bio Paragraph 1 */}
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                            Carol Denise is an author, mentor, and lifelong advocate for building stronger communities through meaningful relationships. Her career spans nearly three decades in financial services, alongside years of leading youth mentoring initiatives, school partnership programs, and community outreach.
                        </p>

                        {/* Bio Paragraph 2 */}
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                            These experiences shaped her passion for helping people discover hope, purpose, and connection in every stage of life. Today, her writing explores the challenges of loneliness, resilience, and personal growth, encouraging readers to strengthen relationships, embrace their unique gifts, and become a positive influence in the lives of others. Every book reflects her commitment to inspiring hope that reaches beyond the page.
                        </p>

                        {/* View More Button */}
                        <a 
                            href="/pages/author" 
                            className="inline-flex items-center gap-2 bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                        >
                            VIEW MORE 
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
import React from 'react';
import author1 from '../assets/author1.jpg';

function Author() {
    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Hero / Header Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE CREATIVE MIND · 2026
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Meet Carol Denise
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Author, mentor, and lifelong advocate for building stronger communities through meaningful relationships.
                    </p>
                </div>
            </section>

            {/* Main Bio Section */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        
                        {/* Left Side: Author Image */}
                        <div className="lg:col-span-6">
                            <div className="w-full h-380px sm:h-500px overflow-hidden bg-[#14213D]/5 border border-[#14213D]/10">
                                <img 
                                    src={author1} 
                                    alt="Carol Denise writing" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>

                        {/* Right Side: Detailed Content & Bio */}
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                BACKGROUND & JOURNEY
                            </span>

                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-6">
                                A Legacy Built on Love and Purpose
                            </h2>

                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Carol Denise is an author, mentor, and lifelong advocate for building stronger communities through meaningful relationships. Her career spans nearly three decades in financial services, alongside years of leading youth mentoring initiatives, school partnership programs, and community outreach.
                            </p>

                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                These experiences shaped her passion for helping people discover hope, purpose, and connection in every stage of life. Today, her writing explores the challenges of loneliness, resilience, and personal growth, encouraging readers to strengthen relationships, embrace their unique gifts, and become a positive influence in the lives of others.
                            </p>

                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed">
                                Every book reflects her deep commitment to inspiring hope that reaches far beyond the page, connecting directly with the hearts of families and individuals navigating their own journeys.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mission / Values Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 border-t border-[#14213D]/10">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        CORE PHILOSOPHY
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                        What Drives Her Writing
                    </h2>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-[#14213D]/10 text-left">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 block mb-2">01</span>
                        <h3 className="text-xl font-serif text-[#14213D] mb-3">Connection</h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed">
                            Fostering deep, authentic bonds within families and communities to combat isolation and build mutual support structures.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-[#14213D]/10 text-left">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 block mb-2">02</span>
                        <h3 className="text-xl font-serif text-[#14213D] mb-3">Resilience</h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed">
                            Empowering individuals to navigate life's unexpected hurdles with grace, humor, and a renewed sense of personal inner strength.
                        </p>
                    </div>

                    <div className="bg-white p-8 border border-[#14213D]/10 text-left">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 block mb-2">03</span>
                        <h3 className="text-xl font-serif text-[#14213D] mb-3">Legacy</h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed">
                            Writing love letters and guiding frameworks for future generations, inspiring young minds to become matriarchs and leaders of tomorrow.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Author;
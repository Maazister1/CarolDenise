import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function AuthorBlog() {
    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Header / Hero Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        COMMUNITY & OUTREACH · 2026
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Work That Happens Off The Page
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Explore our core programs, workshops, and guided circles dedicated to fostering connection, resilience, and growth.
                    </p>
                </div>
            </section>

            {/* Program 1: Matriarch-In-Training */}
            <section id="learn-more-1" className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-[#14213D]/5 border border-[#14213D]/10">
                                <img 
                                    src={img1} 
                                    alt="Matriarch-In-Training" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PROGRAM 01
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Matriarch-In-Training
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                A guided reading circle for women stepping into the role of leading a family — built directly around the core chapters and teachings of The Family Matriarch.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                This circle creates a safe and nurturing space to discuss generational leadership, shared values, and the subtle art of keeping a family grounded through life's turning points.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                JOIN THE CIRCLE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program 2: Youth Mentoring */}
            <section id="learn-more-2" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#F7F7F7] border-b border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PROGRAM 02
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Youth Mentoring
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Grounded in years of active mentoring through school partnership programs, community organizations, and youth leadership initiatives.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                The initiative focuses on guiding young individuals through crucial transitional periods, helping them build confidence, career clarity, and strong moral footing.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                LEARN ABOUT MENTORSHIP
                            </a>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-white border border-[#14213D]/10">
                                <img 
                                    src={img2} 
                                    alt="Youth Mentoring" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Program 3: Superheroes Workshops */}
            <section id="learn-more-3" className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-[#14213D]/5 border border-[#14213D]/10">
                                <img 
                                    src={img3} 
                                    alt="Superheroes Workshops" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PROGRAM 03
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Superheroes Workshops
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Story-led interactive workshops designed specifically for young men, focusing on personal impact, ingenuity, and the deep affirmation of knowing they are wanted.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                Using narratives from the Young Men Series, these sessions transform reading material into practical life tools for modern challenges.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                BOOK A WORKSHOP
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AuthorBlog;
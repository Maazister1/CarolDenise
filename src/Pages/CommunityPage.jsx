import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function CommunityPage() {
    return (
        <div className="w-full min-h-screen bg-white font-sans">
            
            {/* Header / Hero Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        Building Community Partnerships
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Our Community & Partners
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Building strong community partnerships is the core focus of our work, uniting independent bookshops, organizations, and initiatives.
                    </p>
                </div>
            </section>

            {/* Section 1: Independent Bookshops */}
            <section id="independent-bookshops" className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-[#14213D]/5 border border-[#14213D]/10">
                                <img 
                                    src={img1} 
                                    alt="Independent Bookshops" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PARTNER 01
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Independent Bookshops
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Local and independent bookstore partners where you can find signed copies, special editions, and support community literacy programs.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                We proudly collaborate with independent sellers who champion independent authors and bring stories directly to local neighborhoods.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                VIEW BOOKSHOPS
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Community Organizations */}
            <section id="community-organizations" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#F7F7F7] border-b border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PARTNER 02
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Community Organizations
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Collaborative networks, youth leadership groups, and organizations working together to uplift families and build resilient communities.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                These partnerships help extend our reach beyond the pages of the book, bringing actionable resources and support directly to those who need it.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                VIEW PARTNERS
                            </a>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-white border border-[#14213D]/10">
                                <img 
                                    src={img2} 
                                    alt="Community Organizations" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Collaborative Initiatives */}
            <section id="collaborative-initiatives" className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-6">
                            <div className="w-full h-[300px] sm:h-[400px] overflow-hidden bg-[#14213D]/5 border border-[#14213D]/10">
                                <img 
                                    src={img3} 
                                    alt="Collaborative Initiatives" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                PARTNER 03
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                Collaborative Initiatives
                            </h2>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-4">
                                Programs, outreach events, and shared spaces dedicated to advocacy, literacy growth, and empowering the next generation.
                            </p>
                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                                We unite with local advocates to create meaningful workshops, discussions, and educational tools that resonate long after the event ends.
                            </p>
                            <a 
                                href="/pages/contact" 
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                LEARN MORE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CommunityPage;
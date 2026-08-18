import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function CommunityPartners() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section with Title and All Partners link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            Community
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                            Bookshop & Community Partners
                        </h2>
                    </div>
                    <a 
                        href="/pages/communitypages" 
                        className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors self-start md:self-auto mb-2"
                    >
                        VIEW ALL PARTNERS
                    </a>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    
                    {/* Card 1: Independent Bookshops */}
                    <div className="flex flex-col">
                        <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img1} 
                                alt="Independent Bookshops" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Independent Bookshops
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            Local and independent bookstore partners where you can find signed copies, special editions, and support community literacy.
                        </p>
                        <a 
                            href="/pages/communitypages" 
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                    {/* Card 2: Community Organizations */}
                    <div className="flex flex-col">
                        <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img2} 
                                alt="Community Organizations" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Community Partners
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            Collaborative networks, youth leadership groups, and organizations working together to uplift families and neighborhoods.
                        </p>
                        <a 
                            href="/pages/communitypages" 
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                    {/* Card 3: Collaborative Initiatives */}
                    <div className="flex flex-col">
                        <div className="w-full h-[260px] sm:h-[300px] overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img3} 
                                alt="Collaborative Initiatives" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Collaborative Initiatives
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            Programs, outreach events, and shared spaces dedicated to advocacy, literacy growth, and empowering the next generation.
                        </p>
                        <a 
                            href="/pages/initiatives" 
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default CommunityPartners;
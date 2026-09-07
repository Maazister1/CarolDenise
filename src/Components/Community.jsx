import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import calenderbg from '../assets/CalenderBg.png'

function CommunityPartners() {
    // October 2026 calendar configuration
    const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    
    // Days arrangement for October 2026 (Starts on Thursday, total 31 days)
    const daysInMonth = [
        null, null, null, 1, 2, 3, 4,
        5, 6, 7, 8, 9, 10, 11,
        12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, null
    ];

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
                            Bookshops & Community Partners
                        </h2>
                    </div>
                    <a 
                        href="/pages/communitypages" 
                        className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#14213D]/70 no-underline transition-colors self-start md:self-auto mb-2"
                    >
                        VIEW ALL PARTNERS
                    </a>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-16">
                    
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
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#14213D]/70 no-underline transition-colors mt-auto"
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
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#14213D]/70 no-underline transition-colors mt-auto"
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
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#14213D]/70 no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                </div>

                {/* Event Banner with Enhanced Text Readability & Professional Layout */}
                {/* <div 
                    className="w-full text-white py-12 px-8 md:px-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl border border-white/10 relative bg-cover bg-center bg-no-repeat rounded-2xl overflow-hidden"
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.88)), url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop')` 
                    }}
                >
                    
                    <div className="text-left max-w-xl z-10 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                                Grand Opening Event
                            </span>
                            <span className="text-xs font-semibold tracking-wider text-gray-300">
                                OCT 17 | 10:00 AM
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white m-0 leading-snug">
                            The Book Nook (New & Used Bookstore)
                        </h3>

                        <p className="text-sm font-medium text-amber-200/90 tracking-wide">
                            📍 62 N. Main Street, Hartford, WI 53027
                        </p>

                        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-normal mt-1">
                            Free tote bags for the first 50 customers, giveaways, live music (<span className="text-white font-semibold">Mariah Kiefer</span>), coffee bar, and local sweets. Featured local vendors: <span className="text-white font-semibold">Groth's Goodies</span>, <span className="text-white font-semibold">Three Little Sprinkles Home Bakery</span>, <span className="text-white font-semibold">Flower Cafe</span>.
                        </p>
                    </div>
                    
                
                    <div className="shrink-0 bg-white text-[#14213D] p-5 w-full sm:w-[280px] shadow-2xl z-10 rounded-xl">
                        <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#14213D]/10">
                            <span className="text-xs font-bold tracking-wider uppercase text-[#14213D]">October 2026</span>
                            <svg className="w-4 h-4 text-[#14213D]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                        </div>
                        
                       
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {weekDays.map((day, idx) => (
                                <span key={idx} className="text-[10px] font-bold text-[#14213D]/50">{day}</span>
                            ))}
                        </div>

                   
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {daysInMonth.map((date, idx) => {
                                const isTargetDate = date === 17;
                                return (
                                    <div 
                                        key={idx} 
                                        className={`h-7 text-xs flex items-center justify-center relative font-semibold rounded ${
                                            isTargetDate 
                                                ? 'bg-[#14213D] text-white font-bold shadow-md scale-105' 
                                                : date 
                                                ? 'text-[#14213D]/80 hover:bg-[#14213D]/5' 
                                                : 'text-transparent'
                                        }`}
                                    >
                                        {date}
                                        {isTargetDate && (
                                            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#14213D]/10 flex items-center justify-between text-[10px] text-[#14213D]/70 font-medium">
                            <span>Carol Attending</span>
                            <span className="text-emerald-600 font-bold flex items-center gap-1">✓ Oct 17</span>
                        </div>
                    </div>

                </div> */}

            </div>
        </section>
    );
}

export default CommunityPartners;
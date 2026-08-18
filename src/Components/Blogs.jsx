import React from 'react';
import latest from '../assets/latest.jpg';
import latest1 from '../assets/latest1.jpg';
import latest2 from '../assets/latest2.jpg';
import latest3 from '../assets/latest3.jpg';

function Blogs() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            BLOGS
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                            Latest blog posts
                        </h2>
                    </div>
                    <a 
                        href="#all-blogs" 
                        className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors self-start md:self-auto mb-2"
                    >
                        ALL BLOGS
                    </a>
                </div>

                {/* Main Grid: Left Featured Article + Right Sidebar Articles */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Featured Blog */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="w-full h-320px sm:h-420px overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={latest} 
                                alt="The letter I owed my daughter" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2 block">
                            FAMILY — 8 MIN READ
                        </span>
                        <h3 className="text-2xl sm:text-4xl font-serif text-[#14213D] font-normal mb-3 leading-tight">
                            The letter I owed my daughter
                        </h3>
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-normal">
                            I never set out to write a book. I set out to write one letter, and it would not stay one letter.
                        </p>
                    </div>

                    {/* Right Sidebar Blogs List */}
                    <div className="lg:col-span-5 flex flex-col divide-y divide-[#14213D]/10">
                        
                        {/* Blog Item 1 */}
                        <div className="py-6 first:pt-0 last:pb-0 flex items-start gap-4 justify-between">
                            <div className="flex flex-col pr-4">
                                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-1">
                                    LEADERSHIP · MARCH 2026
                                </span>
                                <h4 className="text-lg sm:text-xl font-serif text-[#14213D] font-normal mb-2 hover:text-[#E5A93B] transition-colors cursor-pointer">
                                    What a matriarch actually does
                                </h4>
                                <p className="text-xs sm:text-sm text-[#14213D]/70 leading-relaxed font-normal">
                                    The role is rarely titled and never scheduled. It is still the reason a family holds.
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#14213D]/5 overflow-hidden">
                                <img src={latest1} alt="Blog thumbnail" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Blog Item 2 */}
                        <div className="py-6 flex items-start gap-4 justify-between">
                            <div className="flex flex-col pr-4">
                                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-1">
                                    FAITH · FEBRUARY 2026
                                </span>
                                <h4 className="text-lg sm:text-xl font-serif text-[#14213D] font-normal mb-2 hover:text-[#E5A93B] transition-colors cursor-pointer">
                                    Faith, religion and values
                                </h4>
                                <p className="text-xs sm:text-sm text-[#14213D]/70 leading-relaxed font-normal">
                                    Religion without values is scaffolding with nothing inside it. A short devotional on the difference.
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#14213D]/5 overflow-hidden">
                                <img src={latest2} alt="Blog thumbnail" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Blog Item 3 */}
                        <div className="py-6 flex items-start gap-4 justify-between">
                            <div className="flex flex-col pr-4">
                                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-1">
                                    FAMILY · JANUARY 2026
                                </span>
                                <h4 className="text-lg sm:text-xl font-serif text-[#14213D] font-normal mb-2 hover:text-[#E5A93B] transition-colors cursor-pointer">
                                    Reading with your sons
                                </h4>
                                <p className="text-xs sm:text-sm text-[#14213D]/70 leading-relaxed font-normal">
                                    Every young man should hear, out loud and from an adult who means it, that he is wanted.
                                </p>
                            </div>
                            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-[#14213D]/5 overflow-hidden">
                                <img src={latest3} alt="Blog thumbnail" className="w-full h-full object-cover" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Blogs;
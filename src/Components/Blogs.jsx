import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function Blogs() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section with Title and All Programs link */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            PROGRAMS
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                            Work that happens off the page
                        </h2>
                    </div>
                    <a 
                        href="#all-programs" 
                        className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors self-start md:self-auto mb-2"
                    >
                        ALL PROGRAMS
                    </a>
                </div>

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    
                    {/* Card 1: Matriarch-In-Training */}
                    <div className="flex flex-col">
                        <div className="w-full h-260px sm:h-300px overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img1} 
                                alt="Matriarch-In-Training" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Matriarch-In-Training
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            A guided reading circle for women stepping into the role of leading a family — built around the chapters of The Family Matriarch.
                        </p>
                        <a 
                            href="#learn-more-1" 
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                    {/* Card 2: Youth Mentoring */}
                    <div className="flex flex-col">
                        <div className="w-full h-260px sm:h-300px overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img2} 
                                alt="Youth Mentoring" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Youth Mentoring
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            Years of mentoring through school partnership programs, community organizations and youth leadership initiatives.
                        </p>
                        <a 
                            href="#learn-more-2" 
                            className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors mt-auto"
                        >
                            LEARN MORE
                        </a>
                    </div>

                    {/* Card 3: Superheroes Workshops */}
                    <div className="flex flex-col">
                        <div className="w-full h-260px sm:h-300px overflow-hidden bg-[#14213D]/5 mb-6">
                            <img 
                                src={img3} 
                                alt="Superheroes Workshops" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <h3 className="text-2xl font-serif text-[#14213D] font-normal mb-3">
                            Superheroes Workshops
                        </h3>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6 font-normal">
                            Story-led workshops for young men on impact, ingenuity, and knowing they are wanted.
                        </p>
                        <a 
                            href="#learn-more-3" 
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

export default Blogs;
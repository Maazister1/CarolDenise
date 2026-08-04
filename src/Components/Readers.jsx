import React from 'react';

function Readers() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#14213D]/10">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        READERS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                        What people say
                    </h2>
                </div>

                {/* Testimonials 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    
                    {/* Testimonial 1 */}
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-6">
                            "Superheroes in Training is a refreshing and heartfelt collection that blends humor with meaningful life lessons. Carol Denise writes in a way that feels genuine and uplifting."
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-1px bg-[#14213D]/50"></span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#14213D]">
                                Thomas Kelly <span className="font-normal text-[#14213D]/70 normal-case ml-1">CEO & Founder</span>
                            </span>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-6">
                            "This book offers more than stories. It provides encouragement, wisdom, and a powerful reminder that everyday moments can shape character and purpose."
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-1px bg-[#14213D]/50"></span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#14213D]">
                                Elizabeth <span className="font-normal text-[#14213D]/70 normal-case ml-1">Director</span>
                            </span>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-6">
                            "As a teenage mom, I found this book very emotional yet uplifting. I hope to pass this down to my daughter, who is now 4."
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-1px bg-[#14213D]/50"></span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#14213D]">
                                Ann-Marie Massey <span className="font-normal text-[#14213D]/70 normal-case ml-1">Insurance Broker</span>
                            </span>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="flex flex-col">
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-6">
                            "The Family Matriarch made such a beautiful gift to my granddaughters, and the words moved them as they embarked on a new journey all by themselves."
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-1px bg-[#14213D]/50"></span>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#14213D]">
                                Liam Steiner <span className="font-normal text-[#14213D]/70 normal-case ml-1">Quality Manager</span>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Readers;
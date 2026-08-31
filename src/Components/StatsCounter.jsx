
import React from 'react';

function StatsCounter() {
    return (
        <section className="w-full bg-white py-12 md:py-16 px-6 md:px-12 border-t border-b border-[#14213D]/10 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center text-left">
                    
                    {/* Stat Item 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl sm:text-4xl font-serif text-[#14213D] font-normal tracking-tight mb-2">
                            30 years
                        </h3>
                        <p className="text-xs sm:text-sm text-[#14213D]/70 font-normal leading-relaxed">
                            In financial services & community leadership
                        </p>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl sm:text-4xl font-serif text-[#14213D] font-normal tracking-tight mb-2">
                            4 titles
                        </h3>
                        <p className="text-xs sm:text-sm text-[#14213D]/70 font-normal leading-relaxed">
                            Across multiple series for young men, young women and families
                        </p>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="flex flex-col">
                        <h3 className="text-3xl sm:text-4xl font-serif text-[#14213D] font-normal tracking-tight mb-2">
                            1 letter
                        </h3>
                        <p className="text-xs sm:text-sm text-[#14213D]/70 font-normal leading-relaxed">
                            Written to a daughter, read by matriarchs everywhere
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default StatsCounter;
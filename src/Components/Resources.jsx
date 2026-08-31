import React from 'react';

function Resources() {
    const resourceItems = [
        {
            id: 'messages-from-mom',
            title: 'Messages From Mom',
            description: 'Heartfelt notes, wisdom, and guidance curated for everyday life and personal growth.'
        },
        {
            id: 'tools-for-toolbox',
            title: 'Tools for your Toolbox',
            description: 'Practical guides, templates, and resources designed to help you build and manage your journey.'
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 px-6 md:px-12 bg-white border-b border-[#14213D]/10 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        USEFUL CONTENT
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Resources
                    </h2>
                    <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-serif italic">
                        Explore our guides, tools, and thoughtful collections.
                    </p>
                </div>

                {/* Placeholders Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {resourceItems.map((item) => (
                        <div 
                            key={item.id}
                            className="flex flex-col justify-between bg-[#14213D]/[0.03] border border-[#14213D]/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg group"
                        >
                            <div>
                                <h3 className="text-2xl font-serif text-[#14213D] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-[#14213D]/70 leading-relaxed mb-6 font-serif">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-[#14213D]/10 flex items-center justify-between">
                                <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-widest">
                                    Placeholder
                                </span>
                                <span className="text-xs font-serif italic text-[#14213D]/70 group-hover:translate-x-1 transition-transform">
                                    Explore &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Resources;
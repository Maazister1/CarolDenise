import React, { useState } from 'react';
import book3 from '../assets/book3.png';

function SuperHeros() {
    const [selectedFormat, setSelectedFormat] = useState('Hardcover');

    const formats = [
        { name: 'eBook', price: '$2.99' },
        { name: 'Paperback', price: '$17.99' },
        { name: 'Hardcover', price: '$22.99' }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Book Mockup Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-420px h-460px sm:h-540px bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden">
                            <img 
                                src={book3} 
                                alt="Superheroes In Training Book" 
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details, Description, Pricing Formats & Buttons */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        
                        {/* Subtitle / Metadata */}
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            YOUNG MEN SERIES · 2026
                        </span>

                        {/* Title */}
                        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            Superheroes In Training
                        </h1>

                        {/* Sub-heading / Tagline */}
                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            So what had happened was... Volume One
                        </p>

                        {/* Description Paragraph */}
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            “Superheroes in Training – So what had happened was…” is a captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor. In Part 1, short stories highlight the whimsical yet transformative impact of these encounters, altering the course of one’s journey.
                        </p>

                        {/* Choose Your Format Section */}
                        <div className="w-full mb-8">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                                CHOOSE YOUR PREFERENCE
                            </span>

                            <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
                                {formats.map((format) => (
                                    <div 
                                        key={format.name}
                                        onClick={() => setSelectedFormat(format.name)}
                                        className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
                                            selectedFormat === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center`}>
                                                {selectedFormat === format.name && (
                                                    <div className="w-2 h-2 rounded-full bg-[#14213D]"></div>
                                                )}
                                            </div>
                                            <span className="text-sm sm:text-base text-[#14213D] font-serif">
                                                {format.name}
                                            </span>
                                        </div>
                                        <span className="text-sm sm:text-base text-[#14213D] font-medium">
                                            {format.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <a 
                                href="https://www.amazon.com/Superheroes-Training-what-had-HAPPENED-ebook/dp/B0DMHHDJXC?ref_=ast_author_dp_rw&th=1&psc=1" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                PURCHASE NOW
                            </a>
                            <a 
                                href="/SuperHeros.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                FREE CHAPTER
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default SuperHeros;
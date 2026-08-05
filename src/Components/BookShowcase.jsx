import React from 'react';
import book0 from '../assets/book0.png';
import book3 from '../assets/book3.png';

function BookShowcase() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE BOOKS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Written as letters. Read as inheritance.
                    </h2>
                    <p className="text-base sm:text-lg text-[#14213D]/80 max-w-2xl font-normal leading-relaxed">
                        Two series: one for the women holding families together, one for the young men learning who they are.
                    </p>
                </div>

                {/* Books Grid - Only 2 Books */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Book 1: The Family Matriarch */}
                    <div className="flex flex-col">
                        <div className="bg-[#f9f9f9] border border-[#14213D]/10 h-380px sm:h-440px flex items-center justify-center p-8 mb-6">
                            <img 
                                src={book0} 
                                alt="The Family Matriarch" 
                                className="max-h-full max-w-full object-contain drop-shadow-xl"
                            />
                        </div>

                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            DEBUT RELEASE
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] font-normal mb-1">
                            The Family Matriarch
                        </h3>
                        <p className="text-sm font-serif italic text-[#14213D]/70 mb-4">
                            A Labor and A Legacy of Love
                        </p>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6">
                            A love letter to a daughter on the weight, the work and the inheritance of leading a family.
                        </p>

                        <div className="flex items-center gap-6 mt-auto">
                            <a 
                                href="https://www.amazon.com/Family-Matriarch-Labor-Legacy-Love/dp/B0CKNSH8Z1/" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors"
                            >
                                PURCHASE
                            </a>
                            <span className="text-[#14213D]/20">/</span>
                            <a href="/books/the-family" className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors">
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                    {/* Book 2: Superheroes In Training */}
                    <div className="flex flex-col">
                        <div className="bg-[#f9f9f9] border border-[#14213D]/10 h-380px sm:h-440px flex items-center justify-center p-8 mb-6">
                            <img 
                                src={book3} 
                                alt="Superheroes In Training" 
                                className="max-h-full max-w-full object-contain drop-shadow-xl"
                            />
                        </div>

                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            YOUNG MEN SERIES
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] font-normal mb-1">
                            Superheroes In Training
                        </h3>
                        <p className="text-sm font-serif italic text-[#14213D]/70 mb-4">
                            So what had happened was... Volume One
                        </p>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6">
                            Unexpected encounters with everyday superheroes, told with humor and hard-won life lessons.
                        </p>

                        <div className="flex items-center gap-6 mt-auto">
                            <a 
                                href="https://www.amazon.com/Superheroes-Training-what-had-HAPPENED-ebook/dp/B0DMHHDJXC?ref_=ast_author_dp_rw&th=1&psc=1" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors"
                            >
                                PURCHASE
                            </a>
                            <span className="text-[#14213D]/20">/</span>
                            <a 
                                href="/books/superheroes" 
                                className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors"
                            >
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BookShowcase;
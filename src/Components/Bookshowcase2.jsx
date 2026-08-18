import React from 'react';
import book1 from '../assets/book2.png';
import comingImage from '../assets/coming.png';
import amazonIcon from '../assets/amazon.png';

function BookShowcase2() {
    const desc1 = "A captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor. Short stories highlight the whimsical yet transformative impact, altering the course of one's journey.";
    
    const desc2 = "In Part 2, 'Messages from Mom' delivers heartfelt wisdom from maternal figures, offering guidance and reassurance in a world filled with uncertainties. It addresses pressing issues like the loneliness epidemic and being mindful of vampires among us.";

    const desc3 = "The journey continues in Volume 3 with brand new empowering narratives and uplifting life lessons. Designed to inspire resilience and purpose, this upcoming edition brings even more valuable insights and practical tools for our young men.";

    const amazonUrl = "https://www.amazon.com/Superheroes-Training-what-had-HAPPENED-ebook/dp/B0GHPQQBCX?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR";

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto text-center">
                
                <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-16">
                    Superheroes In Training
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
                    
                    {/* --- VOLUME 01 --- */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-[340px] flex items-center justify-center p-6 mb-4 pt-12">
                            <a 
                                href={amazonUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20 bg-white hover:bg-gray-50 text-[#14213D] px-3.5 py-1.5 flex items-center gap-1.5 transition-all duration-300 rounded-none no-underline border border-[#14213D]/20 whitespace-nowrap"
                                style={{ boxShadow: '0 0 20px rgba(20, 33, 61, 0.35), 0 4px 6px -1px rgba(20, 33, 61, 0.2)' }}
                            >
                                <img src={amazonIcon} alt="Amazon" className="w-3.5 h-3.5 object-contain" />
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                                    PURCHASE ON AMAZON
                                </span>
                            </a>
                            <img src={book1} alt="Volume 1" className="max-h-[260px] w-auto object-contain drop-shadow-lg mt-4" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14213D] mb-3">V O L U M E &nbsp; 0 1</span>
                        <p className="text-xs text-[#14213D]/70 mb-6 px-4 leading-relaxed">{desc1}</p>
                        <div className="flex flex-col gap-3 w-full max-w-[240px]">
                            <a href="/books/superheroes" className="border border-[#14213D] text-[#14213D] py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#14213D] hover:text-white transition-all">Learn More</a>
                            <a href="/SuperHeros.pdf" target="_blank" className="bg-[#14213D] text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#1f3563] transition-all">Free Chapter</a>
                        </div>
                    </div>

                    {/* --- VOLUME 02 --- */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-[340px] flex items-center justify-center p-6 mb-4 pt-12">
                            <a 
                                href={amazonUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20 bg-white hover:bg-gray-50 text-[#14213D] px-3.5 py-1.5 flex items-center gap-1.5 transition-all duration-300 rounded-none no-underline border border-[#14213D]/20 whitespace-nowrap"
                                style={{ boxShadow: '0 0 20px rgba(20, 33, 61, 0.35), 0 4px 6px -1px rgba(20, 33, 61, 0.2)' }}
                            >
                                <img src={amazonIcon} alt="Amazon" className="w-3.5 h-3.5 object-contain" />
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                                    PURCHASE ON AMAZON
                                </span>
                            </a>
                            <img src={book1} alt="Volume 2" className="max-h-[260px] w-auto object-contain drop-shadow-lg mt-4" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14213D] mb-3">V O L U M E &nbsp; 0 2</span>
                        <p className="text-xs text-[#14213D]/70 mb-6 px-4 leading-relaxed">{desc2}</p>
                        <div className="flex flex-col gap-3 w-full max-w-[240px]">
                            <a href="/books/superheroes" className="border border-[#14213D] text-[#14213D] py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#14213D] hover:text-white transition-all">Learn More</a>
                            <a href="/SuperHeros_Volume2.pdf" target="_blank" className="bg-[#14213D] text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#1f3563] transition-all">Free Chapter</a>
                        </div>
                    </div>

                    {/* --- VOLUME 03 --- */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full h-[340px] flex items-center justify-center p-6 mb-4 pt-12">
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20 bg-white text-[#14213D]/60 px-3.5 py-1.5 flex items-center gap-1.5 border border-gray-200 whitespace-nowrap">
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                                    COMING SOON
                                </span>
                            </div>
                            <img src={comingImage} alt="Volume 3 Coming Soon" className="max-h-[260px] w-auto object-contain drop-shadow-lg mt-4" />
                        </div>
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#14213D] mb-3">V O L U M E &nbsp; 0 3</span>
                        <p className="text-xs text-[#14213D]/70 mb-6 px-4 leading-relaxed">{desc3}</p>
                        <div className="flex flex-col gap-3 w-full max-w-[240px]">
                            <button disabled className="border border-gray-200 text-gray-400 py-3 text-xs font-bold uppercase tracking-wider cursor-not-allowed">Coming Soon</button>
                            <button disabled className="bg-gray-200 text-gray-400 py-3 text-xs font-bold uppercase tracking-wider cursor-not-allowed">Coming Soon</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default BookShowcase2;
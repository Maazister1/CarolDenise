import React from 'react';
import audibleIcon from '../assets/audible.png';
import amazonLogo from '../assets/amazonlogo.png';

function AudioBookSection() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#14213D]/10 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Section Header */}
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                    AUDIOBOOK EDITION
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-6">
                    Audio Book Is Upcoming On
                </h2>
                
                <p className="text-base sm:text-lg text-[#14213D]/80 max-w-xl mx-auto font-normal leading-relaxed mb-10">
                    The narration is currently in production. Soon you'll be able to listen to the journey on your favorite platforms.
                </p>

                {/* Animated Audio Player Teaser Bar */}
                <div className="max-w-md mx-auto mb-14 bg-[#f9f9f9] border border-[#14213D]/15 rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    {/* Play Button */}
                    <div className="w-10 h-10 rounded-full bg-[#14213D] text-white flex items-center justify-center shadow-md flex-shrink-0 cursor-pointer hover:bg-[#1f3563] transition-colors">
                        <svg className="w-4 h-4 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>

                    {/* Animated Sound Waves */}
                    <div className="flex-1 flex items-center justify-center gap-1.5 h-8 px-2 overflow-hidden">
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-1"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-2"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-3"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-4"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-2"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-5"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-1"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-3"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-4"></span>
                        <span className="w-1 bg-[#14213D] rounded-full animate-wave-2"></span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#14213D]/60 flex-shrink-0">
                        TEASER
                    </span>
                </div>

                {/* Seamless Infinite Sliding Marquee Wrapper */}
                <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
                    <div className="flex gap-8 w-max animate-marquee py-2">
                        
                        {/* First Set */}
                        <div className="flex items-center gap-8 flex-shrink-0">
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={audibleIcon} alt="Audible" className="max-h-16 w-auto object-contain scale-125" />
                            </div>
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={amazonLogo} alt="Amazon" className="max-h-10 w-auto object-contain" />
                            </div>
                        </div>

                        {/* Second Set */}
                        <div className="flex items-center gap-8 flex-shrink-0" aria-hidden="true">
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={audibleIcon} alt="Audible" className="max-h-16 w-auto object-contain scale-125" />
                            </div>
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={amazonLogo} alt="Amazon" className="max-h-10 w-auto object-contain" />
                            </div>
                        </div>

                        {/* Third Set */}
                        <div className="flex items-center gap-8 flex-shrink-0" aria-hidden="true">
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={audibleIcon} alt="Audible" className="max-h-16 w-auto object-contain scale-125" />
                            </div>
                            <div className="bg-[#f9f9f9] border border-[#14213D]/10 px-8 py-5 rounded-lg flex items-center justify-center w-48 h-24 shadow-sm">
                                <img src={amazonLogo} alt="Amazon" className="max-h-10 w-auto object-contain" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* Custom Animations Styles */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-33.333% - 1.06rem)); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 14s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }

                @keyframes wave {
                    0%, 100% { height: 8px; }
                    50% { height: 28px; }
                }
                .animate-wave-1 { animation: wave 1.2s ease-in-out infinite; }
                .animate-wave-2 { animation: wave 0.8s ease-in-out infinite; }
                .animate-wave-3 { animation: wave 1.5s ease-in-out infinite; }
                .animate-wave-4 { animation: wave 0.9s ease-in-out infinite; }
                .animate-wave-5 { animation: wave 1.1s ease-in-out infinite; }
            `}</style>
        </section>
    );
}

export default AudioBookSection;
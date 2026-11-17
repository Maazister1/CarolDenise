import React from 'react';
import { Link } from 'react-router-dom';
import bookletImage from '../assets/Message From Mom_ On Loneliness.png';

function BookletShowcase() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-12">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE NEW BOOKLET
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        A message for anyone feeling alone.
                    </h2>
                    <p className="text-base sm:text-lg text-[#14213D]/80 max-w-2xl font-normal leading-relaxed">
                        A short, heartfelt booklet for anyone carrying the weight of loneliness, and for everyone ready to help lift it.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Booklet Cover with Coming Soon Badge */}
                    <div className="lg:col-span-5 flex items-center justify-center">
                        <div className="relative w-full max-w-md h-[400px] sm:h-[480px] flex items-center justify-center p-8 bg-[#f9f9f9] border border-[#14213D]/10 shadow-sm">

                            {/* Coming Soon Badge: swap for the PURCHASE ON AMAZON link once the booklet is live */}
                            <div
                                className="absolute top-4 right-4 z-20 bg-white text-[#14213D] px-3.5 py-2 flex items-center gap-2 rounded-none border border-[#14213D]/20"
                                style={{ boxShadow: '0 0 20px rgba(20, 33, 61, 0.35), 0 4px 6px -1px rgba(20, 33, 61, 0.2)' }}
                            >
                                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                                    COMING SOON
                                </span>
                            </div>

                            {/* Booklet Image */}
                            <img
                                src={bookletImage}
                                alt="Message From Mom On Loneliness"
                                className="max-h-[340px] sm:max-h-[400px] w-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details & Action Buttons */}
                    <div className="lg:col-span-7 flex flex-col">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            MESSAGE FROM MOM · 2026
                        </span>

                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#14213D] font-normal mb-2">
                            Message FrOm Mom On Loneliness
                        </h3>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/70 mb-6">
                            To those carrying the heavy cloak of loneliness
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                            Message FrOm Mom On Loneliness is Carol’s response to the US Surgeon General’s call to rebuild the social fabric of our nation. Written with a mother’s warmth, it speaks directly to those who feel unseen or disconnected, offering comfort, encouragement and practical ways to reach out and reconnect. Small enough to carry and share, it’s a reminder that no one has to face loneliness alone.
                        </p>

                        {/* Action Buttons: replace NOTIFY ME with GET THE BOOKLET (Amazon link) once live */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="/books/message-from-mom"
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all shadow-sm"
                            >
                                Learn More
                            </Link>
                            <a
                                href="#newsletter"
                                className="inline-flex items-center justify-center border border-[#14213D]/30 hover:border-[#14213D] text-[#14213D] text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all bg-white"
                            >
                                NOTIFY ME
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default BookletShowcase;

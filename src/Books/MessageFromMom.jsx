import React from 'react';
import { Link } from 'react-router-dom';
import bookletImage from '../assets/Message From Mom_ On Loneliness.png';

function MessageFromMom() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Side: Booklet Mockup Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden rounded-xl shadow-sm">
                            <div className="absolute top-4 left-4 z-20 bg-white text-[#14213D] px-4 py-1.5 border border-gray-200">
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    COMING SOON
                                </span>
                            </div>
                            <img
                                src={bookletImage}
                                alt="Message From Mom On Loneliness"
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details, Description & Buttons */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            MESSAGE FROM MOM · 2026
                        </span>

                        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            Message FrOm Mom On Loneliness
                        </h1>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            To those carrying the heavy cloak of loneliness
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            Message FrOm Mom On Loneliness is Carol’s response to the US Surgeon General’s call to rebuild the social fabric of our nation. Written with a mother’s warmth, it speaks directly to those who feel unseen or disconnected, offering comfort, encouragement and practical ways to reach out and reconnect. Small enough to carry and share, it’s a reminder that no one has to face loneliness alone.
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                            A short, heartfelt booklet for anyone carrying the weight of loneliness, and for everyone ready to help lift it.
                        </p>

                        {/* Action Buttons: replace COMING SOON with GET THE BOOKLET (Amazon link) once live */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <button
                                disabled
                                className="inline-flex items-center justify-center bg-gray-200 text-gray-400 text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-not-allowed uppercase"
                            >
                                COMING SOON
                            </button>
                            <Link
                                to="/pages/contact"
                                className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                NOTIFY ME
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MessageFromMom;

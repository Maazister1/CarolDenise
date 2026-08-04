import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#14213D] text-white pt-20 pb-10 px-6 md:px-12 font-sans border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                
                {/* Top Section: Brand/Newsletter on Left, Navigation Links on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-start">
                    
                    {/* Left Side: Brand Name, Subtitle & Newsletter Form */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <div className="mb-8">
                            <h2 className="text-3xl sm:text-4xl font-serif font-normal tracking-tight text-white mb-1">
                                Carol Denise
                            </h2>
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                                THE FAMILY MATRIARCH
                            </span>
                        </div>

                        {/* Newsletter Subsection */}
                        <div className="w-full max-w-md">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-3 block">
                                NEWSLETTER
                            </span>
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <div className="relative flex items-center border-b border-white/30 pb-2 mb-3">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address" 
                                        required
                                        className="w-full bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none border-0 px-0"
                                    />
                                    <button 
                                        type="submit" 
                                        className="bg-transparent text-white hover:text-[#E5A93B] text-xs font-bold tracking-widest uppercase cursor-pointer border-0 transition-colors ml-4 whitespace-nowrap"
                                    >
                                        SUBSCRIBE
                                    </button>
                                </div>
                                <span className="text-xs text-white/60 font-normal">
                                    Letters, chapter releases and event news. No noise.
                                </span>
                            </form>
                        </div>
                    </div>

                    {/* Right Side: Navigation Columns (Read, Work, Connect) */}
                    <div className="lg:col-span-6 grid grid-cols-3 gap-8 pt-2">
                        
                        {/* Column 1: Read */}
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
                                READ
                            </span>
                            <ul className="flex flex-col space-y-3">
                                <li><a href="#books" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Books</a></li>
                                <li><a href="#resources" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Resources</a></li>
                                <li><a href="#about" className="text-sm text-white/80 hover:text-white transition-colors no-underline">About</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Work */}
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
                                WORK
                            </span>
                            <ul className="flex flex-col space-y-3">
                                <li><a href="#programs" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Programs</a></li>
                                <li><a href="#speaking" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Speaking</a></li>
                                <li><a href="#podcast" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Podcast</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Connect */}
                        <div className="flex flex-col">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
                                CONNECT
                            </span>
                            <ul className="flex flex-col space-y-3">
                                <li><a href="#community" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Community</a></li>
                                <li><a href="#contact" className="text-sm text-white/80 hover:text-white transition-colors no-underline">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                {/* Bottom Divider */}
                <div className="w-full h-1px bg-white/15 mb-8"></div>

                {/* Bottom Copyright & Social Links */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/60 font-normal">
                        © 2026 The Family Matriarch. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#spotify" className="text-xs text-white/70 hover:text-white transition-colors no-underline">Spotify</a>
                        <a href="#apple" className="text-xs text-white/70 hover:text-white transition-colors no-underline">Apple Podcasts</a>
                        <a href="#youtube" className="text-xs text-white/70 hover:text-white transition-colors no-underline">YouTube</a>
                        <a href="#email" className="text-xs text-white/70 hover:text-white transition-colors no-underline">Email</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
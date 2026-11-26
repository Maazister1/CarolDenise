
import React from 'react';

function AudioBookSection() {
    // Platform icons for visual preview
    const platformIcons = [
        { name: 'Barnes & Noble', icon: 'https://www.google.com/s2/favicons?domain=barnesandnoble.com&sz=128' },
        { name: 'Libro.fm', icon: 'https://www.google.com/s2/favicons?domain=libro.fm&sz=128' },
        { name: 'Audiobooks.com', icon: 'https://www.google.com/s2/favicons?domain=audiobooks.com&sz=128' },
        { name: 'Everand', icon: 'https://www.google.com/s2/favicons?domain=everand.com&sz=128' },
        { name: 'Kobo', icon: 'https://www.google.com/s2/favicons?domain=kobo.com&sz=128' },
        { name: 'Google Play Books', icon: 'https://www.google.com/s2/favicons?domain=play.google.com&sz=128' },
        { name: 'Spotify', icon: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=128' },
        { name: 'Nextory', icon: 'https://www.google.com/s2/favicons?domain=nextory.com&sz=128' }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#14213D]/10 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                
                {/* Audiobooks Promotion Card */}
                <div className="bg-[#14213D]/[0.02] border border-[#14213D]/10 rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col items-center">
                    
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        AUDIOBOOK EDITIONS
                    </span>

                    <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Want to listen to the audio book?
                    </h2>

                    <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-serif italic max-w-2xl mb-8">
                        Explore our collection! Our books are also available as audiobooks. Click the button below to listen on your favorite platform.
                    </p>

                    {/* Non-clickable Platform Icons Row */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                        {platformIcons.map((item, index) => (
                            <div 
                                key={index}
                                className="w-10 h-10 rounded-lg bg-white border border-[#14213D]/10 flex items-center justify-center p-2 shadow-sm"
                                title={item.name}
                            >
                                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                        ))}
                    </div>

                    <a 
                        href="/pages/audiobooks"
                        className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-pointer border-0 shadow-none transition-all uppercase no-underline inline-block text-center"
                    >
                        Listen to Audiobooks &rarr;
                    </a>

                </div>

            </div>
        </section>
    );
}

export default AudioBookSection;
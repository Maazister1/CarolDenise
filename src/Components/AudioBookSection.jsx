import React from 'react';

function AudioBookSection() {
    // Audiobook 1: The Family Matriarch Distribution Links with larger icon formatting
    const audiobook1Links = [
        { 
            name: 'Barnes & Noble', 
            url: 'https://www.barnesandnoble.com/w/the-family-matriarch-carol-denise/1144175986?ean=2940202201547',
            icon: 'https://www.google.com/s2/favicons?domain=barnesandnoble.com&sz=128'
        },
        { 
            name: 'Libro.fm', 
            url: 'https://libro.fm/audiobooks/9798295386343-the-family-matriarch',
            icon: 'https://www.google.com/s2/favicons?domain=libro.fm&sz=128'
        },
        { 
            name: 'Audiobooks.com', 
            url: 'https://www.audiobooks.co.uk/audiobook/family-matriarch-a-labor-and-a-legacy-of-love/1007395?qId=aa47d588ab74ef44d781226ed330312a&pos=1',
            icon: 'https://www.google.com/s2/favicons?domain=audiobooks.com&sz=128'
        },
        { 
            name: 'Everand', 
            url: 'https://www.everand.com/audiobook/979343868/The-Family-Matriarch-A-Labor-and-A-Legacy-of-Love',
            icon: 'https://www.google.com/s2/favicons?domain=everand.com&sz=128'
        },
        { 
            name: 'Kobo', 
            url: 'https://www.kobo.com/ww/en/audiobook/the-family-matriarch?sId=2c167c3d-5252-48a5-8190-a1207ae99b7d&ssId=NJrmxCAIXs6ilW0uiCPwX&cPos=1',
            icon: 'https://www.google.com/s2/favicons?domain=kobo.com&sz=128'
        },
        { 
            name: 'Google Play Books', 
            url: 'https://play.google.com/store/audiobooks/details?id=AQAAAEAapBzkFM',
            icon: 'https://www.google.com/s2/favicons?domain=play.google.com&sz=128'
        },
        { 
            name: 'Spotify', 
            url: 'https://open.spotify.com/show/4RMEQbUPappwo9apXC4jFO',
            icon: 'https://www.google.com/s2/favicons?domain=spotify.com&sz=128'
        },
        { 
            name: 'Nextory', 
            url: 'https://nextory.com/dk/book/the-family-matriarch-a-labor-and-a-legacy-of-love-5665914',
            icon: 'https://www.google.com/s2/favicons?domain=nextory.com&sz=128'
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#14213D]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        AUDIOBOOK EDITIONS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Listen to the Journey
                    </h2>
                    <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-serif italic">
                        Explore our available audiobooks and upcoming releases across major platforms.
                    </p>
                </div>

                {/* Audiobook 1: The Family Matriarch */}
                <div className="mb-20 bg-[#14213D]/[0.02] border border-[#14213D]/10 rounded-2xl p-8 md:p-12 shadow-sm">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <span className="text-xs font-semibold text-[#14213D]/60 uppercase tracking-widest mb-2 block">
                            Audiobook 1
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] mb-4">
                            The Family Matriarch: A Labor and A Legacy of Love
                        </h3>
                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-serif">
                            Now live and available on multiple audiobook platforms as part of our distribution service. Choose your preferred platform below:
                        </p>
                    </div>

                    {/* Platforms Grid with Larger Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        {audiobook1Links.map((item, index) => (
                            <a 
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3.5 p-4 bg-white border border-[#14213D]/15 rounded-lg shadow-sm hover:shadow-md hover:border-[#14213D] transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#14213D]/5 flex items-center justify-center p-2 flex-shrink-0 shadow-inner">
                                    <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                                </div>
                                <span className="text-sm font-medium text-[#14213D] group-hover:translate-x-1 transition-transform flex-1">
                                    {item.name}
                                </span>
                                <span className="text-xs font-bold text-[#14213D]/40 group-hover:text-[#14213D] transition-colors">
                                    &rarr;
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Audiobook 2: Superheroes In Training (Coming Soon Space) */}
                <div className="max-w-3xl mx-auto bg-white border-2 border-dashed border-[#14213D]/20 rounded-2xl p-8 md:p-12 text-center shadow-sm">
                    <span className="text-xs font-semibold text-[#14213D]/60 uppercase tracking-widest mb-2 block">
                        Audiobook 2
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] mb-4">
                        Superheroes In Training: So, What Had HAPPENED Was...
                    </h3>
                    <p className="text-sm sm:text-base text-[#14213D]/70 leading-relaxed font-serif italic mb-6">
                        Audiobook edition is currently in development and coming soon to major listening platforms.
                    </p>
                    <div className="inline-block bg-[#14213D] text-white text-xs uppercase tracking-widest px-6 py-2.5 rounded-full shadow">
                        Coming Soon
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AudioBookSection;
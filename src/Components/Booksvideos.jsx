import React, { useState } from 'react';

function Booksvideos() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        {
            id: 'family',
            title: 'The Family Matriarch Series',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203181/family.mp4',
            description: 'A 15-second trailer into the legacy, love, and lessons.',
            tag: 'Teaser'
        },
        {
            id: 'long-trailer-1',
            title: 'Extended Cinematic Trailer I',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201152/long-trailer1.mp4',
            description: 'An immersive extended look into the characters and world.',
            tag: 'Extended Cut'
        },
        {
            id: 'superhero',
            title: 'Superheroes In Training',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203427/superhero.mp4',
            description: 'So, what had HAPPENED was... discover the adventure.',
            tag: 'Teaser'
        },
        {
            id: 'long-trailer-2',
            title: 'Extended Cinematic Trailer II',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201281/long-trailer2.mp4',
            description: 'Dive deeper with our second extended feature showcase.',
            tag: 'Extended Cut'
        }
    ];

    // Hover = silent preview (like streaming / cinema sites); leave = back to still frame
    const startPreview = (e) => {
        const v = e.currentTarget.querySelector('video');
        if (v) v.play().catch(() => {});
    };
    const stopPreview = (e) => {
        const v = e.currentTarget.querySelector('video');
        if (v) {
            v.pause();
            v.currentTime = 1;
        }
    };

    return (
        <section className="w-full py-14 md:py-20 px-4 sm:px-6 md:px-12 bg-[#14213D]/[0.12] border-b border-[#14213D]/10 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2 sm:mb-3 block">
                        FEATURED MEDIA
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-3 sm:mb-4">
                        Series Trailers
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#14213D]/80 leading-relaxed font-serif italic px-2">
                        Hover to preview, click to watch.
                    </p>
                </div>

                {/* Trailer Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {videos.map((vid, i) => (
                        <button
                            key={vid.id}
                            type="button"
                            onClick={() => setActiveVideo(vid)}
                            onMouseEnter={startPreview}
                            onMouseLeave={stopPreview}
                            className="group text-left flex flex-col bg-white rounded-none overflow-hidden border-2 border-[#14213D]/30 hover:border-[#14213D] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative w-full aspect-video bg-[#14213D] overflow-hidden">
                                <video
                                    src={`${vid.src}#t=1`}
                                    preload="metadata"
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#14213D]/25 group-hover:bg-transparent transition-colors duration-300" />

                                {/* Tag */}
                                <span className="absolute top-2 left-2 bg-white/95 text-[#14213D] text-[8px] sm:text-[10px] font-bold uppercase tracking-widest px-1.5 sm:px-2 py-0.5 rounded-sm shadow">
                                    {vid.tag}
                                </span>

                                {/* Play button */}
                                <span className="absolute inset-0 flex items-center justify-center">
                                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#14213D] flex items-center justify-center shadow-lg ring-4 ring-white/30 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-start gap-3 p-3 sm:p-4 border-t-2 border-transparent group-hover:border-[#14213D] transition-colors duration-300">
                                <span className="hidden sm:block text-2xl font-serif text-[#14213D]/20 leading-none">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-xs sm:text-sm md:text-base font-serif text-[#14213D] leading-snug line-clamp-2">
                                        {vid.title}
                                    </h3>
                                    <p className="hidden sm:block text-[11px] text-[#14213D]/60 mt-1 leading-relaxed line-clamp-2">
                                        {vid.description}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Fullscreen Modal Popup */}
                {activeVideo && (
                    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm">
                        <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 rounded-lg shadow-2xl">
                            {/* Cross Button */}
                            <button 
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#14213D] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg font-bold hover:bg-[#14213D]/80 transition-colors z-10 shadow"
                            >
                                &times;
                            </button>
                            
                            <h3 className="text-lg sm:text-2xl font-serif text-[#14213D] mb-3 sm:mb-4 text-center pr-10">
                                {activeVideo.title}
                            </h3>
                            
                            <div className="w-full aspect-video bg-black rounded overflow-hidden shadow-inner flex items-center justify-center">
                                <video 
                                    src={activeVideo.src} 
                                    controls 
                                    autoPlay
                                    playsInline
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}

export default Booksvideos;
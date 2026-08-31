import React, { useState } from 'react';

function Booksvideos() {
    const [activeVideo, setActiveVideo] = useState(null);

    const videos = [
        {
            id: 'family',
            title: 'The Family Matriarch Series',
            src: '/family.mp4',
            description: 'A 15-second trailer into the legacy, love, and lessons.'
        },
        {
            id: 'superhero',
            title: 'Superheroes In Training',
            src: '/superhero.mp4',
            description: 'So, what had HAPPENED was... discover the adventure.'
        }
    ];

    return (
        <section className="w-full py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-[#14213D]/[0.08] border-b border-[#14213D]/10 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2 sm:mb-3 block">
                        FEATURED MEDIA
                    </span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-3 sm:mb-4">
                        Series Trailers
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-[#14213D]/80 leading-relaxed font-serif italic px-2">
                        Watch our 15-second book series trailers. Click any video to expand.
                    </p>
                </div>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {videos.map((vid) => (
                        <div 
                            key={vid.id}
                            className="flex flex-col bg-white border border-[#14213D]/10 p-4 sm:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg sm:rounded-none"
                        >
                            <h3 className="text-lg sm:text-xl font-serif text-[#14213D] mb-3 sm:mb-4 text-center border-b border-[#14213D]/10 pb-2 sm:pb-3">
                                {vid.title}
                            </h3>
                            {/* Thumbnail Container - Click to open modal */}
                            <div 
                                onClick={() => setActiveVideo(vid)}
                                className="w-full aspect-video bg-black overflow-hidden relative mb-3 sm:mb-4 rounded-md shadow-inner cursor-pointer group"
                            >
                                <video 
                                    src={vid.src} 
                                    autoPlay 
                                    loop 
                                    muted 
                                    playsInline
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <span className="bg-[#14213D]/90 text-white text-[11px] sm:text-xs px-2.5 py-1 rounded shadow opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        Click to Expand
                                    </span>
                                </div>
                            </div>
                            <p className="text-[11px] sm:text-xs md:text-sm text-[#14213D]/70 text-center leading-relaxed">
                                {vid.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Fullscreen Modal Popup */}
                {activeVideo && (
                    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4">
                        <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 rounded-lg shadow-2xl">
                            {/* Cross Button */}
                            <button 
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#14213D] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg font-bold hover:bg-[#14213D]/80 transition-colors z-10"
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
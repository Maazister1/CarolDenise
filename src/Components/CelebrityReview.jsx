import React, { useState } from 'react';

function CelebrityReview() {
    const [isOpen, setIsOpen] = useState(false);

    const celebrityData = {
        title: 'Celebrity Shoutout',
        src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788205756/celebrityreview.mp4',
        description: 'Special thoughts on the series from our guest.'
    };

    return (
        <section className="w-full py-12 px-4 md:px-8 bg-[#14213D]/[0.08] border-b border-[#14213D]/10 font-sans">
            <div className="max-w-4xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-xl mx-auto mb-10">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2 block">
                        SPECIAL FEATURE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#14213D] mb-2">
                        Celebrity Shoutout
                    </h2>
                    <p className="text-xs sm:text-sm text-[#14213D]/80 font-serif italic">
                        Watch our special guest feature. Click to expand.
                    </p>
                </div>

                {/* Compact Centered Card */}
                <div className="max-w-xs mx-auto">
                    <div className="bg-white border border-[#14213D]/10 p-4 shadow-md rounded-lg">
                        <h3 className="text-base font-serif text-[#14213D] mb-3 text-center border-b border-[#14213D]/10 pb-2">
                            {celebrityData.title}
                        </h3>
                        
                        {/* Video Thumbnail (Smaller height for compactness) */}
                        <div 
                            onClick={() => setIsOpen(true)}
                            className="w-full aspect-[9/14] bg-black overflow-hidden relative mb-3 rounded cursor-pointer group"
                        >
                            <video 
                                src={celebrityData.src} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                <span className="bg-[#14213D]/90 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    Click to Expand
                                </span>
                            </div>
                        </div>
                        
                        <p className="text-[11px] text-[#14213D]/70 text-center">
                            {celebrityData.description}
                        </p>
                    </div>
                </div>

                {/* Fullscreen Modal Popup */}
                {isOpen && (
                    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                        <div className="relative bg-white w-full max-w-md p-4 rounded-lg shadow-xl flex flex-col items-center">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 bg-[#14213D] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold hover:bg-[#14213D]/80 transition-colors z-10"
                            >
                                &times;
                            </button>
                            
                            <h3 className="text-lg font-serif text-[#14213D] mb-3 text-center pr-8 w-full">
                                {celebrityData.title}
                            </h3>
                            
                            <div className="w-full max-w-[260px] aspect-[9/16] bg-black rounded overflow-hidden shadow-inner">
                                <video 
                                    src={celebrityData.src} 
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

export default CelebrityReview;
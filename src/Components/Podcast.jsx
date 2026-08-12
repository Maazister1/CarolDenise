// import React from 'react';
// import podcastImg from '../assets/podcast.jpg';

// function Podcast() {
//     return (
//         <section className="w-full bg-[#14213D] text-white py-20 md:py-28 px-6 md:px-12 font-sans relative">
//             <div className="max-w-7xl mx-auto">
                
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
//                     {/* Left Side: Title, Description & Platform Links */}
//                     <div className="lg:col-span-5 flex flex-col items-start text-left">
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
//                             THE PODCAST
//                         </span>
                        
//                         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight mb-6 leading-tight">
//                             Letters, out loud.
//                         </h2>
                        
//                         <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal mb-8 max-w-md">
//                             Conversations on family, faith, leadership and the quiet work of raising people well.
//                         </p>
                        
//                         {/* Platform Links */}
//                         <div className="flex flex-wrap items-center gap-6">
//                             <a href="#spotify" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
//                                 SPOTIFY
//                             </a>
//                             <a href="#apple" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
//                                 APPLE PODCASTS
//                             </a>
//                             <a href="#youtube" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
//                                 YOUTUBE
//                             </a>
//                         </div>
//                     </div>

//                     {/* Right Side: Podcast Image, Episode Info & Audio Player */}
//                     <div className="lg:col-span-7 flex flex-col">
                        
//                         {/* Podcast Image Banner */}
//                         <div className="w-full h-260px sm:h-360px overflow-hidden bg-black/40 mb-6">
//                             <img 
//                                 src={podcastImg} 
//                                 alt="Podcast Episode Cover" 
//                                 className="w-full h-full object-cover object-center"
//                             />
//                         </div>

//                         {/* Episode Info */}
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-2 block">
//                             LATEST EPISODE — 01 — 38 MIN
//                         </span>

//                         <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3">
//                             A Labor and A Legacy of Love
//                         </h3>

//                         <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-normal max-w-2xl">
//                             Why the matriarch's role is the least discussed and most load-bearing job in a family — and what happens when no one names it.
//                         </p>

//                         {/* Simulated Custom Audio Player Bar */}
//                         <div className="w-full bg-white text-black py-3 px-4 sm:px-6 flex items-center justify-between shadow-lg mb-6">
//                             <div className="flex items-center gap-4">
//                                 <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
//                                     <svg className="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M8 5v14l11-7z"/>
//                                     </svg>
//                                 </button>
//                                 <span className="text-xs font-semibold tracking-wider">0:00 / 0:00</span>
//                             </div>

//                             {/* Range Slider / Track Line */}
//                             <div className="flex-1 mx-6 hidden sm:block">
//                                 <div className="w-full h-1 bg-gray-300 relative rounded-full">
//                                     <div className="absolute top-0 left-0 w-0 h-full bg-black rounded-full"></div>
//                                 </div>
//                             </div>

//                             <div className="flex items-center gap-4 text-black">
//                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
//                                 </svg>
//                                 <svg className="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
//                                     <circle cx="12" cy="5" r="1.5"/>
//                                     <circle cx="12" cy="12" r="1.5"/>
//                                     <circle cx="12" cy="19" r="1.5"/>
//                                 </svg>
//                             </div>
//                         </div>

//                         {/* All Episodes Link */}
//                         <div>
//                             <a href="#all-episodes" className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5A93B] transition-colors no-underline inline-block">
//                                 ALL EPISODES
//                             </a>
//                         </div>

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Podcast;

import React from 'react';
import podcastImg from '../assets/podcast.jpg';

function Podcast() {
    return (
        <section 
            className="w-full text-white py-20 md:py-28 px-6 md:px-12 font-sans relative bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `linear-gradient(rgba(20, 33, 61, 0.35), rgba(20, 33, 61, 0.35)), url('https://i.pinimg.com/736x/90/f1/51/90f151b86fc1ff55256a85f594a78ab5.jpg')` 
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Title, Description & Platform Links */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4 block">
                            THE PODCAST
                        </span>
                        
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight mb-6 leading-tight">
                            Letters, out loud.
                        </h2>
                        
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal mb-8 max-w-md">
                            Conversations on family, faith, leadership and the quiet work of raising people well.
                        </p>
                        
                        {/* Platform Links */}
                        <div className="flex flex-wrap items-center gap-6">
                            <a href="#spotify" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
                                SPOTIFY
                            </a>
                            <a href="#apple" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
                                APPLE PODCASTS
                            </a>
                            <a href="#youtube" className="text-xs font-bold uppercase tracking-widest text-white hover:text-[#E5A93B] transition-colors no-underline">
                                YOUTUBE
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Podcast Image, Episode Info & Audio Player */}
                    <div className="lg:col-span-7 flex flex-col">
                        
                        {/* Podcast Image Banner */}
                        <div className="w-full h-[260px] sm:h-[360px] overflow-hidden bg-black/40 mb-6 shadow-xl">
                            <img 
                                src={podcastImg} 
                                alt="Podcast Episode Cover" 
                                className="w-full h-full object-cover object-center"
                            />
                        </div>

                        {/* Episode Info */}
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-white/90 mb-2 block">
                            LATEST EPISODE — 01 — 38 MIN
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3">
                            A Labor and A Legacy of Love
                        </h3>

                        <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6 font-normal max-w-2xl">
                            Why the matriarch's role is the least discussed and most load-bearing job in a family — and what happens when no one names it.
                        </p>

                        {/* Simulated Custom Audio Player Bar */}
                        <div className="w-full bg-white text-black py-3 px-4 sm:px-6 flex items-center justify-between shadow-lg mb-6">
                            <div className="flex items-center gap-4">
                                <button className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                                    <svg className="w-3.5 h-3.5 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>
                                <span className="text-xs font-semibold tracking-wider">0:00 / 0:00</span>
                            </div>

                            {/* Range Slider / Track Line */}
                            <div className="flex-1 mx-6 hidden sm:block">
                                <div className="w-full h-1 bg-gray-300 relative rounded-full">
                                    <div className="absolute top-0 left-0 w-0 h-full bg-black rounded-full"></div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-black">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                                </svg>
                                <svg className="w-4 h-4 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="1.5"/>
                                    <circle cx="12" cy="12" r="1.5"/>
                                    <circle cx="12" cy="19" r="1.5"/>
                                </svg>
                            </div>
                        </div>

                        {/* All Episodes Link */}
                        <div>
                            <a href="#all-episodes" className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#E5A93B] transition-colors no-underline inline-block">
                                ALL EPISODES
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Podcast;
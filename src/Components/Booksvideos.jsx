// import React, { useState, useEffect, useRef } from 'react';
// import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

// function Booksvideos() {
//     const [activeVideo, setActiveVideo] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeoutRef = useRef(null);

//     const videos = [
//         {
//             id: 'family',
//             title: 'The Family Matriarch Series',
//             src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203181/family.mp4',
//             description: 'A 15-second trailer into the legacy, love, and lessons.'
//         },
//            {
//             id: 'long-trailer-1',
//             title: 'Extended Cinematic Trailer I',
//             src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201152/long-trailer1.mp4',
//             description: 'An immersive extended look into the characters and world.'
//         },
//         {
//             id: 'superhero',
//             title: 'Superheroes In Training',
//             src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203427/superhero.mp4',
//             description: 'So, what had HAPPENED was... discover the adventure.'
//         },
     
//         {
//             id: 'long-trailer-2',
//             title: 'Extended Cinematic Trailer II',
//             src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201281/long-trailer2.mp4',
//             description: 'Dive deeper with our second extended feature showcase.'
//         }
//     ];

//     // Auto-slide effect every 4 seconds
//     useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout(() => {
//             setCurrentIndex((prevIndex) => (prevIndex >= videos.length - 2 ? 0 : prevIndex + 1));
//         }, 4000);

//         return () => {
//             resetTimeout();
//         };
//     }, [currentIndex, videos.length]);

//     const resetTimeout = () => {
//         if (timeoutRef.current) {
//             clearTimeout(timeoutRef.current);
//         }
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex >= videos.length - 2 ? 0 : prevIndex + 1));
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 2 : prevIndex - 1));
//     };

//     return (
//         <section className="w-full py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-[#14213D]/[0.08] border-b border-[#14213D]/10 font-sans overflow-hidden">
//             <div className="max-w-7xl mx-auto">
                
//                 {/* Section Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
//                     <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2 sm:mb-3 block">
//                         FEATURED MEDIA
//                     </span>
//                     <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-3 sm:mb-4">
//                         Series Trailers
//                     </h2>
//                     <p className="text-xs sm:text-sm md:text-base text-[#14213D]/80 leading-relaxed font-serif italic px-2">
//                         Explore our book series trailers. Click any video to expand and watch in full screen.
//                     </p>
//                 </div>

//                 {/* Slider Main Wrapper */}
//                 <div className="relative w-full max-w-full mx-auto px-4 sm:px-12">
                    
//                     {/* Left Arrow Button */}
//                     <button 
//                         onClick={prevSlide}
//                         className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 bg-white text-[#14213D] hover:bg-[#14213D] hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#14213D]/10 transition-colors"
//                         aria-label="Previous Slide"
//                     >
//                         <IconChevronLeft className="w-6 h-6" />
//                     </button>

//                     {/* Right Arrow Button */}
//                     <button 
//                         onClick={nextSlide}
//                         className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 bg-white text-[#14213D] hover:bg-[#14213D] hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#14213D]/10 transition-colors"
//                         aria-label="Next Slide"
//                     >
//                         <IconChevronRight className="w-6 h-6" />
//                     </button>

//                     {/* Slides Container with Blur/Fade Mask */}
//                     <div className="overflow-hidden rounded-xl py-2 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_10%_90%,transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_5%_95%,transparent_100%)]">
//                         <div 
//                             className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-6"
//                             style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
//                         >
//                             {videos.map((vid) => (
//                                 <div 
//                                     key={vid.id} 
//                                     className="w-full sm:w-1/2 lg:w-1/2 flex-shrink-0"
//                                 >
//                                     <div className="bg-white border border-[#14213D]/10 p-4 sm:p-6 shadow-xl rounded-xl flex flex-col items-center h-full">
//                                         <h3 className="text-sm sm:text-lg font-serif text-[#14213D] mb-3 text-center border-b border-[#14213D]/10 pb-2 w-full truncate">
//                                             {vid.title}
//                                         </h3>
                                        
//                                         {/* Video Thumbnail Container */}
//                                         <div 
//                                             onClick={() => setActiveVideo(vid)}
//                                             className="w-full aspect-video bg-black overflow-hidden relative mb-3 rounded-lg shadow-inner cursor-pointer group"
//                                         >
//                                             <video 
//                                                 src={vid.src} 
//                                                 autoPlay 
//                                                 loop 
//                                                 muted 
//                                                 playsInline
//                                                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                                             />
//                                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
//                                                 <span className="bg-[#14213D]/90 text-white text-[10px] px-2 py-1 rounded shadow opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
//                                                     Expand
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <p className="text-[11px] sm:text-xs text-[#14213D]/70 text-center leading-relaxed line-clamp-2">
//                                             {vid.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Custom Bottom Indicators */}
//                     <div className="flex justify-center items-center gap-2.5 mt-6">
//                         {[0, 1, 2].map((idx) => (
//                             <button
//                                 key={idx}
//                                 onClick={() => setCurrentIndex(idx)}
//                                 className={`transition-all duration-300 rounded-full h-3 ${
//                                     currentIndex === idx 
//                                         ? 'w-10 bg-amber-500 shadow-md' 
//                                         : 'w-3 bg-[#14213D]/30 hover:bg-[#14213D]/50'
//                                 }`}
//                                 aria-label={`Go to slide ${idx + 1}`}
//                             />
//                         ))}
//                     </div>

//                 </div>

//                 {/* Fullscreen Modal Popup */}
//                 {activeVideo && (
//                     <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm">
//                         <div className="relative bg-white w-full max-w-4xl p-4 sm:p-6 rounded-lg shadow-2xl">
//                             {/* Cross Button */}
//                             <button 
//                                 onClick={() => setActiveVideo(null)}
//                                 className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#14213D] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg font-bold hover:bg-[#14213D]/80 transition-colors z-10 shadow"
//                             >
//                                 &times;
//                             </button>
                            
//                             <h3 className="text-lg sm:text-2xl font-serif text-[#14213D] mb-3 sm:mb-4 text-center pr-10">
//                                 {activeVideo.title}
//                             </h3>
                            
//                             <div className="w-full aspect-video bg-black rounded overflow-hidden shadow-inner flex items-center justify-center">
//                                 <video 
//                                     src={activeVideo.src} 
//                                     controls 
//                                     autoPlay
//                                     playsInline
//                                     className="w-full h-full object-contain"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}

//             </div>
//         </section>
//     );
// }

// export default Booksvideos;

import React, { useState, useEffect, useRef } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

function Booksvideos() {
    const [activeVideo, setActiveVideo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const videos = [
        {
            id: 'family',
            title: 'The Family Matriarch Series',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203181/family.mp4',
            description: 'A 15-second trailer into the legacy, love, and lessons.'
        },
        {
            id: 'long-trailer-1',
            title: 'Extended Cinematic Trailer I',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201152/long-trailer1.mp4',
            description: 'An immersive extended look into the characters and world.'
        },
        {
            id: 'superhero',
            title: 'Superheroes In Training',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1788203427/superhero.mp4',
            description: 'So, what had HAPPENED was... discover the adventure.'
        },
        {
            id: 'long-trailer-2',
            title: 'Extended Cinematic Trailer II',
            src: 'https://res.cloudinary.com/gm9p9g7j/video/upload/v1790201281/long-trailer2.mp4',
            description: 'Dive deeper with our second extended feature showcase.'
        }
    ];

    // Auto-slide effect every 4 seconds
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex >= videos.length - 2 ? 0 : prevIndex + 1));
        }, 4000);

        return () => {
            resetTimeout();
        };
    }, [currentIndex, videos.length]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex >= videos.length - 2 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? videos.length - 2 : prevIndex - 1));
    };

    return (
        <section className="w-full py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-[#14213D]/[0.08] border-b border-[#14213D]/10 font-sans overflow-hidden">
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
                        Explore our book series trailers. Click any video to expand and watch in full screen.
                    </p>
                </div>

                {/* Slider Main Wrapper */}
                <div className="relative w-full max-w-full mx-auto px-4 sm:px-12">
                    
                    {/* Left Arrow Button */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 bg-white text-[#14213D] hover:bg-[#14213D] hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#14213D]/10 transition-colors"
                        aria-label="Previous Slide"
                    >
                        <IconChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow Button */}
                    <button 
                        onClick={nextSlide}
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 bg-white text-[#14213D] hover:bg-[#14213D] hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center border border-[#14213D]/10 transition-colors"
                        aria-label="Next Slide"
                    >
                        <IconChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slides Container with Reduced Blur/Fade Mask */}
                    <div className="overflow-hidden rounded-xl py-2 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_3%_97%,transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_2%_98%,transparent_100%)]">
                        <div 
                            className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-6"
                            style={{ transform: `translateX(-${currentIndex * (100 / 2)}%)` }}
                        >
                            {videos.map((vid) => (
                                <div 
                                    key={vid.id} 
                                    className="w-full sm:w-1/2 lg:w-1/2 flex-shrink-0"
                                >
                                    <div className="bg-white border border-[#14213D]/10 p-4 sm:p-6 shadow-xl rounded-xl flex flex-col items-center h-full">
                                        <h3 className="text-sm sm:text-lg font-serif text-[#14213D] mb-3 text-center border-b border-[#14213D]/10 pb-2 w-full truncate">
                                            {vid.title}
                                        </h3>
                                        
                                        {/* Video Thumbnail Container */}
                                        <div 
                                            onClick={() => setActiveVideo(vid)}
                                            className="w-full aspect-video bg-black overflow-hidden relative mb-3 rounded-lg shadow-inner cursor-pointer group"
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
                                                <span className="bg-[#14213D]/90 text-white text-[10px] px-2 py-1 rounded shadow opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                                    Expand
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-[11px] sm:text-xs text-[#14213D]/70 text-center leading-relaxed line-clamp-2">
                                            {vid.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Custom Bottom Indicators */}
                    <div className="flex justify-center items-center gap-2.5 mt-6">
                        {[0, 1, 2].map((idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`transition-all duration-300 rounded-full h-3 ${
                                    currentIndex === idx 
                                        ? 'w-10 bg-amber-500 shadow-md' 
                                        : 'w-3 bg-[#14213D]/30 hover:bg-[#14213D]/50'
                                }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

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
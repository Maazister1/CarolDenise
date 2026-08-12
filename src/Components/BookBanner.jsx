// import React from 'react';

// function BookBanner() {
//     return (
//         <section className="w-full bg-[#14213D] text-white py-20 md:py-28 px-6 md:px-12 font-sans relative">
//             <div className="max-w-7xl mx-auto">
                
//                 {/* Top Mission Title & Main Heading */}
//                 <div className="max-w-3xl mb-20">
//                     <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
//                         THE MISSION
//                     </span>
//                     <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.15] tracking-tight">
//                         Stories can inspire hope, strengthen relationships, and remind people they are never alone.
//                     </h2>
//                 </div>

//                 {/* Divider Line */}
//                 <div className="w-full h-1px bg-white/20 mb-16"></div>

//                 {/* Three Columns Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    
//                     {/* Column 1: Hope */}
//                     <div className="flex flex-col">
//                         <h3 className="text-2xl font-serif text-white font-normal mb-3">
//                             Hope
//                         </h3>
//                         <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
//                             Every book is written to reach beyond the page and meet a reader in the middle of a hard season.
//                         </p>
//                     </div>

//                     {/* Column 2: Connection */}
//                     <div className="flex flex-col">
//                         <h3 className="text-2xl font-serif text-white font-normal mb-3">
//                             Connection
//                         </h3>
//                         <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
//                             Belonging is built at kitchen tables, in classrooms, and in the ordinary rooms where people show up for each other.
//                         </p>
//                     </div>

//                     {/* Column 3: Purpose */}
//                     <div className="flex flex-col">
//                         <h3 className="text-2xl font-serif text-white font-normal mb-3">
//                             Purpose
//                         </h3>
//                         <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
//                             Beyond publishing: helping readers discover purpose, build meaningful connections, and choose hope every day.
//                         </p>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default BookBanner;

import React from 'react';

function BookBanner() {
    return (
        <section 
            className="w-full text-white py-20 md:py-28 px-6 md:px-12 font-sans relative bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `linear-gradient(rgba(20, 33, 61, 0.82), rgba(20, 33, 61, 0.82)), url('https://i.pinimg.com/1200x/89/2b/60/892b60d11eb60cfdb951e156f242e233.jpg')` 
            }}
        >
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Top Mission Title & Main Heading */}
                <div className="max-w-3xl mb-20">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-4 block">
                        THE MISSION
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-white leading-[1.15] tracking-tight">
                        Stories can inspire hope, strengthen relationships, and remind people they are never alone.
                    </h2>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-white/20 mb-16"></div>

                {/* Three Columns Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    
                    {/* Column 1: Hope */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-serif text-white font-normal mb-3">
                            Hope
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                            Every book is written to reach beyond the page and meet a reader in the middle of a hard season.
                        </p>
                    </div>

                    {/* Column 2: Connection */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-serif text-white font-normal mb-3">
                            Connection
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                            Belonging is built at kitchen tables, in classrooms, and in the ordinary rooms where people show up for each other.
                        </p>
                    </div>

                    {/* Column 3: Purpose */}
                    <div className="flex flex-col">
                        <h3 className="text-2xl font-serif text-white font-normal mb-3">
                            Purpose
                        </h3>
                        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                            Beyond publishing: helping readers discover purpose, build meaningful connections, and choose hope every day.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BookBanner;
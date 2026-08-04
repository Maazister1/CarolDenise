// import React from 'react';
// import book1 from '../assets/book1.png';
// import book2 from '../assets/book2.png';

// function BookShowcase() {
//     return (
//         <section className="w-full py-20 px-4 md:px-12 bg-white relative overflow-hidden">
//             <div className="max-w-6xl mx-auto">
                
//                 {/* Header Text */}
//                 <div className="mb-16">
//                     <span className="text-xs font-bold uppercase tracking-widest text-[#14213D]/60 block mb-3">
//                         THE BOOKS
//                     </span>
//                     <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#14213D] tracking-tight leading-[1.15] mb-4">
//                         Written as letters. Read as inheritance.
//                     </h2>
//                     <p className="text-base sm:text-lg text-[#14213D]/70 max-w-2xl">
//                         Two series: one for the women holding families together, one for the young men learning who they are.
//                     </p>
//                 </div>

//                 {/* 2 Cards Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    
//                     {/* Card 1: The Family Matriarch */}
//                     <div className="relative rounded-3xl border-4 border-[#14213D] bg-[#F9F9FB] p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
//                         <div>
//                             {/* Book Image Box */}
//                             <div className="w-full h-72 sm:h-80 flex items-center justify-center mb-8 overflow-hidden p-4">
//                                 <img 
//                                     src={book1} 
//                                     alt="The Family Matriarch" 
//                                     className="h-full w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>

//                             {/* Card Content */}
//                             <span className="text-xs font-bold uppercase tracking-widest text-[#14213D]/60 mb-2 block">
//                                 DEBUT RELEASE
//                             </span>
//                             <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D] mb-1">
//                                 The Family Matriarch
//                             </h3>
//                             <p className="text-sm font-medium text-[#14213D]/70 mb-4">
//                                 A Labor and A Legacy of Love
//                             </p>
//                             <p className="text-sm text-[#14213D]/80 leading-relaxed mb-8">
//                                 A love letter to a daughter on the weight, the work and the inheritance of leading a family.
//                             </p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex items-center gap-4 pt-4 border-t border-[#14213D]/10">
//                             <a 
//                                 href="https://www.amazon.com/dp/B0CKNSH8Z1/" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex-1 text-center py-3 px-4 rounded-xl bg-[#14213D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#14213D]/90 transition-all shadow-md no-underline"
//                             >
//                                 Purchase
//                             </a>
//                             <a 
//                                 href="https://www.amazon.com/dp/B0CKNSH8Z1/" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex-1 text-center py-3 px-4 rounded-xl bg-white border-2 border-[#14213D] text-[#14213D] text-xs font-bold uppercase tracking-wider hover:bg-[#14213D] hover:text-white transition-all shadow-sm no-underline"
//                             >
//                                 Learn More
//                             </a>
//                         </div>
//                     </div>

//                     {/* Card 2: Superheroes In Training */}
//                     <div className="relative rounded-3xl border-4 border-[#14213D] bg-[#F9F9FB] p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
//                         <div>
//                             {/* Book Image Box */}
//                             <div className="w-full h-72 sm:h-80 flex items-center justify-center mb-8 overflow-hidden p-4">
//                                 <img 
//                                     src={book2} 
//                                     alt="Superheroes In Training" 
//                                     className="h-full w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
//                                 />
//                             </div>

//                             {/* Card Content */}
//                             <span className="text-xs font-bold uppercase tracking-widest text-[#14213D]/60 mb-2 block">
//                                 VOLUME 01
//                             </span>
//                             <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D] mb-1">
//                                 Superheroes In Training
//                             </h3>
//                             <p className="text-sm font-medium text-[#14213D]/70 mb-4">
//                                 So what had happened was... Volume One
//                             </p>
//                             <p className="text-sm text-[#14213D]/80 leading-relaxed mb-8">
//                                 Unexpected encounters with everyday superheroes, told with humor and hard-won life lessons.
//                             </p>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex items-center gap-4 pt-4 border-t border-[#14213D]/10">
//                             <a 
//                                 href="https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Spanish-ebook/dp/B0GK4MJ3WT?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex-1 text-center py-3 px-4 rounded-xl bg-[#14213D] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#14213D]/90 transition-all shadow-md no-underline"
//                             >
//                                 Purchase
//                             </a>
//                             <a 
//                                 href="https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Spanish-ebook/dp/B0GK4MJ3WT?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="flex-1 text-center py-3 px-4 rounded-xl bg-white border-2 border-[#14213D] text-[#14213D] text-xs font-bold uppercase tracking-wider hover:bg-[#14213D] hover:text-white transition-all shadow-sm no-underline"
//                             >
//                                 Learn More
//                             </a>
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default BookShowcase;


import React from 'react';
import book0 from '../assets/book0.png';
import book3 from '../assets/book3.png';

function BookShowcase() {
    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE BOOKS
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Written as letters. Read as inheritance.
                    </h2>
                    <p className="text-base sm:text-lg text-[#14213D]/80 max-w-2xl font-normal leading-relaxed">
                        Two series: one for the women holding families together, one for the young men learning who they are.
                    </p>
                </div>

                {/* Books Grid - Only 2 Books */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    
                    {/* Book 1: The Family Matriarch */}
                    <div className="flex flex-col">
                        {/* Image Box */}
                        <div className="bg-[#f9f9f9] border border-[#14213D]/10 h-380px sm:h-440px flex items-center justify-center p-8 mb-6">
                            <img 
                                src={book0} 
                                alt="The Family Matriarch" 
                                className="max-h-full max-w-full object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Details */}
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            DEBUT RELEASE
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] font-normal mb-1">
                            The Family Matriarch
                        </h3>
                        <p className="text-sm font-serif italic text-[#14213D]/70 mb-4">
                            A Labor and A Legacy of Love
                        </p>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6">
                            A love letter to a daughter on the weight, the work and the inheritance of leading a family.
                        </p>

                        {/* Links */}
                        <div className="flex items-center gap-6 mt-auto">
                            <a href="#purchase" className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors">
                                PURCHASE
                            </a>
                            <span className="text-[#14213D]/20">/</span>
                            <a href="#learn-more" className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors">
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                    {/* Book 2: Superheroes In Training */}
                    <div className="flex flex-col">
                        {/* Image Box */}
                        <div className="bg-[#f9f9f9] border border-[#14213D]/10 h-380px sm:h-440px flex items-center justify-center p-8 mb-6">
                            <img 
                                src={book3} 
                                alt="Superheroes In Training" 
                                className="max-h-full max-w-full object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Details */}
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#14213D]/70 mb-2">
                            YOUNG MEN SERIES
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#14213D] font-normal mb-1">
                            Superheroes In Training
                        </h3>
                        <p className="text-sm font-serif italic text-[#14213D]/70 mb-4">
                            So what had happened was... Volume One
                        </p>
                        <p className="text-sm text-[#14213D]/80 leading-relaxed mb-6">
                            Unexpected encounters with everyday superheroes, told with humor and hard-won life lessons.
                        </p>

                        {/* Links */}
                        <div className="flex items-center gap-6 mt-auto">
                            <a href="#purchase" className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors">
                                PURCHASE
                            </a>
                            <span className="text-[#14213D]/20">/</span>
                            <a href="#learn-more" className="text-xs font-bold uppercase tracking-wider text-[#14213D] hover:text-[#E5A93B] no-underline transition-colors">
                                LEARN MORE
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default BookShowcase;
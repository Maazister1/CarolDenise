import React from 'react';

function Readers() {
    // Reviews array with dynamic star ratings (3, 4, or 5 stars)
    const reviews = [
        {
            quote: "Superheroes in Training is a refreshing and heartfelt collection that blends humor with meaningful life lessons. Carol Denise writes in a way that feels genuine and uplifting.",
            name: "Thomas Kelly",
            role: "CEO & Founder",
            rating: 5
        },
        {
            quote: "This book offers more than stories. It provides encouragement, wisdom, and a powerful reminder that everyday moments can shape character and purpose.",
            name: "Elizabeth",
            role: "Director",
            rating: 4
        },
        {
            quote: "As a teenage mom, I found this book very emotional yet uplifting. I hope to pass this down to my daughter, who is now 4.",
            name: "Ann-Marie Massey",
            role: "Insurance Broker",
            rating: 5
        },
        {
            quote: "The Family Matriarch made such a beautiful gift to my granddaughters, and the words moved them as they embarked on a new journey all by themselves.",
            name: "Liam Steiner",
            role: "Quality Manager",
            rating: 3
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 font-sans border-t border-[#14213D]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                    READERS
                </span>
                <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                    What people say
                </h2>
            </div>

            {/* Infinite Sliding Marquee Container */}
            <div className="relative w-full overflow-hidden flex">
                <div className="flex gap-8 animate-marquee whitespace-nowrap py-4">
                    {/* Render reviews twice to create a seamless infinite loop */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div 
                            key={index} 
                            className="w-[320px] sm:w-[420px] md:w-[480px] flex-shrink-0 bg-[#F7F7F7] p-8 border border-[#14213D]/10 flex flex-col justify-between whitespace-normal"
                        >
                            <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-6">
                                "{review.quote}"
                            </p>
                            
                            <div className="mt-auto">
                                {/* Star Rating Display */}
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? 'text-[#E5A93B]' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Name & Role */}
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-[1px] bg-[#14213D]/50"></span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[#14213D]">
                                        {review.name} <span className="font-normal text-[#14213D]/70 normal-case ml-1">{review.role}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Seamless marquee animation styles */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: max-content;
                    animation: marquee 35s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}

export default Readers;
import React, { useState } from 'react';

function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle subscription logic here
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans border-t border-[#14213D]/10">
            <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Newsletter Title & Tag */}
                    <div className="lg:col-span-6 flex flex-col items-start">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            NEWSLETTER
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                            Latest updates, straight to you.
                        </h2>
                    </div>

                    {/* Right Side: Input Form & Subtext */}
                    <div className="lg:col-span-6 flex flex-col">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="relative flex items-center border-b border-[#14213D]/30 pb-2 mb-3">
                                <input 
                                    type="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address" 
                                    required
                                    className="w-full bg-transparent text-[#14213D] placeholder-[#14213D]/40 text-sm sm:text-base outline-none border-0 px-0"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-transparent text-[#14213D] hover:text-[#E5A93B] text-xs font-bold tracking-widest uppercase cursor-pointer border-0 transition-colors ml-4 whitespace-nowrap"
                                >
                                    SUBSCRIBE
                                </button>
                            </div>
                            <span className="text-xs text-[#14213D]/60 font-normal">
                                Letters, chapter releases and event news. No noise.
                            </span>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Newsletter;
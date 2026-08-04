// import React, { useState } from 'react';
// import Logo from "../assets/logo.png";

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [activeTab, setActiveTab] = useState('Home');
//     const [booksDropdown, setBooksDropdown] = useState(false);

//     return (
//         <div className="w-full px-4 md:px-8 pt-4 pb-6 z-50 relative">
//             <nav className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md px-3 py-2.5 flex items-center justify-between rounded-full border border-[#14213D]/10 shadow-sm">
                
//                 {/* Logo Section */}
//                 <a href="/" className="flex items-center gap-3 no-underline group pl-3">
//                     <div className="relative w-32 h-10 overflow-hidden flex items-center">
//                         <img 
//                             src={Logo} 
//                             alt="Logo" 
//                             className="object-contain h-full"
//                         />
//                     </div>
//                 </a>

//                 {/* Desktop Menu Items */}
//                 <div className="hidden lg:flex items-center bg-[#14213D]/5 border border-[#14213D]/10 rounded-full p-1 gap-1">
                    
//                     {/* Home */}
//                     <a 
//                         href="/" 
//                         onClick={() => setActiveTab('Home')}
//                         className={`px-5 py-2 rounded-full text-sm font-medium transition-all no-underline ${
//                             activeTab === 'Home' 
//                                 ? 'bg-white text-[#14213D] shadow-xs border border-[#14213D]/10' 
//                                 : 'text-[#14213D]/70 hover:text-[#14213D] hover:bg-white/50'
//                         }`}
//                     >
//                         Home
//                     </a>

//                     {/* About */}
//                     <a 
//                         href="#about" 
//                         onClick={() => setActiveTab('About')}
//                         className={`px-5 py-2 rounded-full text-sm font-medium transition-all no-underline ${
//                             activeTab === 'About' 
//                                 ? 'bg-white text-[#14213D] shadow-xs border border-[#14213D]/10' 
//                                 : 'text-[#14213D]/70 hover:text-[#14213D] hover:bg-white/50'
//                         }`}
//                     >
//                         About
//                     </a>

//                     {/* Books Dropdown */}
//                     <div 
//                         className="relative"
//                         onMouseEnter={() => setBooksDropdown(true)}
//                         onMouseLeave={() => setBooksDropdown(false)}
//                     >
//                         <button 
//                             onClick={() => setActiveTab('Books')}
//                             className={`px-5 py-2 rounded-full text-sm font-medium transition-all bg-transparent border-0 cursor-pointer flex items-center gap-1.5 ${
//                                 activeTab === 'Books' 
//                                     ? 'bg-white text-[#14213D] shadow-xs border border-[#14213D]/10' 
//                                     : 'text-[#14213D]/70 hover:text-[#14213D] hover:bg-white/50'
//                             }`}
//                         >
//                             Books
//                             <svg className={`w-3.5 h-3.5 transition-transform ${booksDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                         </button>
//                         {booksDropdown && (
//                             <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-[#14213D]/10 rounded-2xl shadow-xl py-2 flex flex-col z-50">
//                                 <a href="#chapter1" className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline">Chapter 1</a>
//                                 <a href="#chapter2" className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline">Chapter 2</a>
//                             </div>
//                         )}
//                     </div>

//                     {/* Contact Us */}
//                     <a 
//                         href="#contact" 
//                         onClick={() => setActiveTab('Contact')}
//                         className={`px-5 py-2 rounded-full text-sm font-medium transition-all no-underline ${
//                             activeTab === 'Contact' 
//                                 ? 'bg-white text-[#14213D] shadow-xs border border-[#14213D]/10' 
//                                 : 'text-[#14213D]/70 hover:text-[#14213D] hover:bg-white/50'
//                         }`}
//                     >
//                         Contact Us
//                     </a>

//                     {/* Reviews */}
//                     <a 
//                         href="#reviews" 
//                         onClick={() => setActiveTab('Reviews')}
//                         className={`px-5 py-2 rounded-full text-sm font-medium transition-all no-underline ${
//                             activeTab === 'Reviews' 
//                                 ? 'bg-white text-[#14213D] shadow-xs border border-[#14213D]/10' 
//                                 : 'text-[#14213D]/70 hover:text-[#14213D] hover:bg-white/50'
//                         }`}
//                     >
//                         Reviews
//                     </a>
//                 </div>

//                 {/* Desktop Action Button */}
//                 <div className="hidden lg:flex items-center pr-1">
//                     <button className="flex items-center gap-3 bg-[#14213D] text-white hover:bg-[#14213D]/90 text-sm font-medium pl-6 py-1.5 rounded-full cursor-pointer border-0 shadow-md transition-all">
//                         Purchase Now
//                         {/* Yellow background icon container with padding */}
//                         <span className="size-8 rounded-full bg-[#E5A93B] flex items-center justify-center text-[#14213D] mr-1 p-1">
//                             <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                             </svg>
//                         </span>
//                     </button>
//                 </div>

//                 {/* Mobile Menu Toggle Button */}
//                 <button 
//                     onClick={() => setMenuOpen(!menuOpen)} 
//                     aria-label="Toggle Menu"
//                     className="lg:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-2"
//                 >
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//                 </button>

//                 {/* Mobile Dropdown Menu */}
//                 {menuOpen && (
//                     <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-[#14213D]/10 flex flex-col p-6 gap-3 lg:hidden z-50 shadow-xl rounded-b-3xl">
//                         <a href="/" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D] no-underline py-2 border-b border-[#14213D]/10">
//                             Home
//                         </a>
//                         <a href="#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">
//                             About
//                         </a>
//                         <div className="py-1 border-b border-[#14213D]/10 pb-3">
//                             <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-wider">Books</span>
//                             <div className="flex flex-col pl-4 mt-2 gap-2">
//                                 <a href="#chapter1" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline">Chapter 1</a>
//                                 <a href="#chapter2" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline">Chapter 2</a>
//                             </div>
//                         </div>
//                         <a href="#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">
//                             Contact Us
//                         </a>
//                         <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">
//                             Reviews
//                         </a>
//                         <button className="flex items-center justify-center gap-2.5 bg-[#14213D] text-white text-sm font-medium px-5 py-3 rounded-full cursor-pointer border-0 mt-2 shadow-md">
//                             Purchase Now
//                             <span className="size-6 rounded-full bg-[#E5A93B] flex items-center justify-center text-[#14213D] p-1">
//                                 <svg width="10" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M.6 4.602h10m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                                 </svg>
//                             </span>
//                         </button>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('About');
    const [booksDropdown, setBooksDropdown] = useState(false);

    return (
        <div className="w-full px-4 md:px-8 pt-4 pb-6 z-50 relative font-sans">
            <nav className="max-w-7xl mx-auto bg-white px-6 py-4 flex items-center justify-between rounded-none border-b border-[#14213D]/20 shadow-none">
                
                {/* Logo Section exact text style matching screenshot */}
                <a href="/" className="flex flex-col no-underline pl-2">
                    <span className="font-serif text-lg tracking-tight text-[#14213D] leading-tight">Carol Denise</span>
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#14213D]/70 font-semibold">THE FAMILY MATRIARCH</span>
                </a>

                {/* Desktop Menu Items */}
                <div className="hidden xl:flex items-center gap-8">
                    
                    {/* Chapter */}
                    <a 
                        href="#about" 
                        onClick={() => setActiveTab('About')}
                        className={`text-sm font-medium transition-colors no-underline ${
                            activeTab === 'About' 
                                ? 'text-[#14213D] font-semibold' 
                                : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Chapter
                    </a>

                    {/* Books Dropdown */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setBooksDropdown(true)}
                        onMouseLeave={() => setBooksDropdown(false)}
                    >
                        <button 
                            onClick={() => setActiveTab('Books')}
                            className={`text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1 ${
                                activeTab === 'Books' 
                                    ? 'text-[#14213D] font-semibold' 
                                    : 'text-[#14213D]/70 hover:text-[#14213D]'
                            }`}
                        >
                            Books
                            <svg className={`w-3.5 h-3.5 transition-transform ${booksDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {booksDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-[#14213D]/10 rounded-none shadow-xl py-2 flex flex-col z-50">
                                <a href="#series-women" className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline">The Family Matriarch</a>
                                <a href="#series-men" className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline">Young Men Series</a>
                            </div>
                        )}
                    </div>

                    {/* About the author */}
                    <a 
                        href="#community" 
                        onClick={() => setActiveTab('Community')}
                        className={`text-sm font-medium transition-colors no-underline ${
                            activeTab === 'Community' 
                                ? 'text-[#14213D] font-semibold' 
                                : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        About the author
                    </a>

                    {/* Contact */}
                    <a 
                        href="#contact" 
                        onClick={() => setActiveTab('Contact')}
                        className={`text-sm font-medium transition-colors no-underline ${
                            activeTab === 'Contact' 
                                ? 'text-[#14213D] font-semibold' 
                                : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Contact
                    </a>
                </div>

                {/* Desktop Action Button matching screenshot with brand blue hover */}
                <div className="hidden xl:flex items-center">
                    <button className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-8 py-3.5 rounded-none cursor-pointer border-0 shadow-none transition-all uppercase">
                        PURCHASE BOOK
                    </button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    aria-label="Toggle Menu"
                    className="xl:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-2"
                >
                    <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#14213D] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-t border-[#14213D]/10 flex flex-col p-6 gap-3 xl:hidden z-50 shadow-xl rounded-none">
                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Chapter</a>
                        <div className="py-1 border-b border-[#14213D]/10 pb-3">
                            <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-wider">Books</span>
                            <div className="flex flex-col pl-4 mt-2 gap-2">
                                <a href="#series-women" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline">The Family Matriarch</a>
                                <a href="#series-men" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline">Young Men Series</a>
                            </div>
                        </div>
                        <a href="#community" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">About the author</a>
                        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Contact</a>
                        
                        <button className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-5 py-3 rounded-none cursor-pointer border-0 mt-2 shadow-none uppercase transition-all">
                            PURCHASE BOOK
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
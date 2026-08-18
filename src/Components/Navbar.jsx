
// import React, { useState, useRef, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import logoImage from '../assets/logo.png'; // Make sure logo.png exists in your assets folder

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [booksDropdown, setBooksDropdown] = useState(false);
//     const dropdownRef = useRef(null);
//     const location = useLocation();

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setBooksDropdown(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     // Check current path to determine active tab
//     const currentPath = location.pathname;

//     const isActive = (path) => {
//         if (path === '/' && currentPath === '/') return true;
//         if (path !== '/' && currentPath.startsWith(path)) return true;
//         return false;
//     };

//     return (
//         <div className="w-full px-4 md:px-8 pt-4 pb-6 z-50 relative font-sans">
//             <nav className="max-w-7xl mx-auto bg-white px-6 py-4 flex items-center justify-between rounded-none border-b border-[#14213D]/20 shadow-none">
                
//                 {/* Logo Section with logo.png */}
//                 <a href="/" className="flex items-center no-underline pl-2 group">
//                     <img src={logoImage} alt="Carol Denise Logo" className="h-10 sm:h-12 w-auto object-contain" />
//                 </a>

//                 {/* Desktop Menu Items */}
//                 <div className="hidden xl:flex items-center gap-8">
                    
//                     {/* Home */}
//                     <a 
//                         href="/" 
//                         className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
//                             isActive('/') && currentPath === '/' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                         }`}
//                     >
//                         Home
//                         <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${currentPath === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                     </a>

//                     {/* Blogs */}
//                     <a 
//                         href="/pages/authorblogs" 
//                         className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
//                             isActive('/pages/authorblogs') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                         }`}
//                     >
//                         Blogs
//                         <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/authorblogs') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                     </a>

//                     {/* Books Dropdown */}
//                     <div 
//                         className="relative"
//                         ref={dropdownRef}
//                     >
//                         <button 
//                             onClick={() => {
//                                 setBooksDropdown(!booksDropdown);
//                             }}
//                             onMouseEnter={() => setBooksDropdown(true)}
//                             className={`relative py-1 text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1 group ${
//                                 currentPath.includes('/books') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                             }`}
//                         >
//                             Books
//                             <svg className={`w-3.5 h-3.5 transition-transform ${booksDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                             </svg>
//                             <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${currentPath.includes('/books') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                         </button>

//                         {booksDropdown && (
//                             <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-[#14213D]/10 rounded-none shadow-xl py-2 flex flex-col z-50 animate-fadeIn">
//                                 <a 
//                                     href="/books/the-family" 
//                                     onClick={() => setBooksDropdown(false)}
//                                     className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline"
//                                 >
//                                     The Family Matriarch
//                                 </a>
//                                 <a 
//                                     href="/books/superheroes" 
//                                     onClick={() => setBooksDropdown(false)}
//                                     className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline"
//                                 >
//                                     Superheroes in Training
//                                 </a>
//                             </div>
//                         )}
//                     </div>

//                     {/* Reviews */}
//                     <a 
//                         href="/pages/reviews" 
//                         className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
//                             isActive('/pages/reviews') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                         }`}
//                     >
//                         Reviews
//                         <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/reviews') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                     </a>

//                     {/* About the author */}
//                     <a 
//                         href="/pages/author" 
//                         className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
//                             isActive('/pages/author') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                         }`}
//                     >
//                         About the author
//                         <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/author') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                     </a>

//                     {/* Contact */}
//                     <a 
//                         href="/pages/contact" 
//                         className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
//                             isActive('/pages/contact') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
//                         }`}
//                     >
//                         Contact
//                         <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
//                     </a>
//                 </div>

//                 {/* Desktop Action Button */}
//                 <div className="hidden xl:flex items-center">
//                     <a 
//                         href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-8 py-3.5 rounded-none cursor-pointer border-0 shadow-none transition-all uppercase no-underline inline-block text-center"
//                     >
//                         PURCHASE BOOK
//                     </a>
//                 </div>

//                 {/* Mobile Menu Toggle Button */}
//                 <button 
//                     onClick={() => setMenuOpen(!menuOpen)} 
//                     aria-label="Toggle Menu"
//                     className="xl:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-0 p-2"
//                 >
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
//                     <span className={`block w-6 h-0.5 bg-[#14213D] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//                 </button>

//                 {/* Mobile Dropdown Menu */}
//                 {menuOpen && (
//                     <div className="absolute top-full left-0 w-full bg-white border-t border-[#14213D]/10 flex flex-col p-6 gap-3 xl:hidden z-50 shadow-xl rounded-none">
//                         <a href="/" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${currentPath === '/' ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Home</a>
//                         <a href="/blogs" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/authorblogs') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Blogs</a>
                        
//                         <div className="py-1 border-b border-[#14213D]/10 pb-3">
//                             <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-wider">Books</span>
//                             <div className="flex flex-col pl-4 mt-2 gap-2">
//                                 <a href="/books/the-family" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">The Family Matriarch</a>
//                                 <a href="/books/superheroes" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">Superheroes in Training</a>
//                             </div>
//                         </div>

//                         <a href="/pages/reviews" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/reviews') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Reviews</a>
//                         <a href="/pages/author" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/author') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>About the author</a>
//                         <a href="/pages/contact" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/contact') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Contact</a>
                        
//                         <a 
//                             href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             onClick={() => setMenuOpen(false)}
//                             className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-5 py-3 rounded-none cursor-pointer border-0 mt-2 shadow-none uppercase transition-all no-underline text-center block"
//                         >
//                             PURCHASE BOOK
//                         </a>
//                     </div>
//                 )}
//             </nav>
//         </div>
//     );
// }

// export default Navbar;

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Make sure logo.png exists in your assets folder

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [booksDropdown, setBooksDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setBooksDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Check current path to determine active tab
    const currentPath = location.pathname;

    const isActive = (path) => {
        if (path === '/' && currentPath === '/') return true;
        if (path !== '/' && currentPath.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="w-full px-4 md:px-8 pt-4 pb-6 z-50 relative font-sans">
            <nav className="max-w-7xl mx-auto bg-white px-6 py-4 flex items-center justify-between rounded-none border-b border-[#14213D]/20 shadow-none">
                
                {/* Logo Section with logo.png */}
                <a href="/" className="flex items-center no-underline pl-2 group">
                    <img src={logoImage} alt="Carol Denise Logo" className="h-10 sm:h-12 w-auto object-contain" />
                </a>

                {/* Desktop Menu Items */}
                <div className="hidden xl:flex items-center gap-8">
                    
                    {/* Home */}
                    <a 
                        href="/" 
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            isActive('/') && currentPath === '/' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Home
                        <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${currentPath === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Blogs - Fixed to /blogs */}
                    <a 
                        href="/blogs" 
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            isActive('/blogs') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Blogs
                        <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/blogs') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Books Dropdown */}
                    <div 
                        className="relative"
                        ref={dropdownRef}
                    >
                        <button 
                            onClick={() => {
                                setBooksDropdown(!booksDropdown);
                            }}
                            onMouseEnter={() => setBooksDropdown(true)}
                            className={`relative py-1 text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1 group ${
                                currentPath.includes('/books') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                            }`}
                        >
                            Books
                            <svg className={`w-3.5 h-3.5 transition-transform ${booksDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${currentPath.includes('/books') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </button>

                        {booksDropdown && (
                            <div className="absolute top-full left-0 mt-3 w-56 bg-white border border-[#14213D]/10 rounded-none shadow-xl py-2 flex flex-col z-50 animate-fadeIn">
                                <a 
                                    href="/books/the-family" 
                                    onClick={() => setBooksDropdown(false)}
                                    className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline"
                                >
                                    The Family Matriarch
                                </a>
                                <a 
                                    href="/books/superheroes" 
                                    onClick={() => setBooksDropdown(false)}
                                    className="px-4 py-2.5 text-sm text-[#14213D]/80 hover:bg-[#14213D] hover:text-white transition-colors no-underline"
                                >
                                    Superheroes in Training
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Reviews */}
                    <a 
                        href="/pages/reviews" 
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            isActive('/pages/reviews') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Reviews
                        <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/reviews') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* About the author */}
                    <a 
                        href="/pages/author" 
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            isActive('/pages/author') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        About the author
                        <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/author') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Contact */}
                    <a 
                        href="/pages/contact" 
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            isActive('/pages/contact') ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Contact
                        <span className={`absolute bottom-4px left-0 w-full h-2px bg-[#14213D] transition-all duration-300 origin-left ${isActive('/pages/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>
                </div>

                {/* Desktop Action Button */}
                <div className="hidden xl:flex items-center">
                    <a 
                        href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-8 py-3.5 rounded-none cursor-pointer border-0 shadow-none transition-all uppercase no-underline inline-block text-center"
                    >
                        PURCHASE BOOK
                    </a>
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
                        <a href="/" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${currentPath === '/' ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Home</a>
                        <a href="/blogs" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/blogs') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Blogs</a>
                        
                        <div className="py-1 border-b border-[#14213D]/10 pb-3">
                            <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-wider">Books</span>
                            <div className="flex flex-col pl-4 mt-2 gap-2">
                                <a href="/books/the-family" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">The Family Matriarch</a>
                                <a href="/books/superheroes" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">Superheroes in Training</a>
                            </div>
                        </div>

                        <a href="/pages/reviews" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/reviews') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Reviews</a>
                        <a href="/pages/author" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/author') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>About the author</a>
                        <a href="/pages/contact" onClick={() => setMenuOpen(false)} className={`text-base font-medium no-underline py-2 border-b border-[#14213D]/10 ${isActive('/pages/contact') ? 'text-[#14213D] font-bold' : 'text-[#14213D]/80'}`}>Contact</a>
                        
                        <a 
                            href="https://www.amazon.com/stores/Carol-Denise/author/B0DZWH9JJN?ref=ap_rdr&shoppingPortalEnabled=true" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#111111] text-white hover:bg-[#14213D] text-xs font-bold tracking-widest px-5 py-3 rounded-none cursor-pointer border-0 mt-2 shadow-none uppercase transition-all no-underline text-center block"
                        >
                            PURCHASE BOOK
                        </a>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
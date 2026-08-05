import React, { useState, useRef, useEffect } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');
    const [booksDropdown, setBooksDropdown] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <div className="w-full px-4 md:px-8 pt-4 pb-6 z-50 relative font-sans">
            <nav className="max-w-7xl mx-auto bg-white px-6 py-4 flex items-center justify-between rounded-none border-b border-[#14213D]/20 shadow-none">
                
                {/* Logo Section */}
                <a href="/" className="flex flex-col no-underline pl-2">
                    <span className="font-serif text-lg tracking-tight text-[#14213D] leading-tight">Carol Denise</span>
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#14213D]/70 font-semibold">THE FAMILY MATRIARCH</span>
                </a>

                {/* Desktop Menu Items */}
                <div className="hidden xl:flex items-center gap-8">
                    
                    {/* Home */}
                    <a 
                        href="/" 
                        onClick={() => setActiveTab('Home')}
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            activeTab === 'Home' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Home
                        <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'Home' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Blogs */}
                    <a 
                        href="/pages/authorblogs" 
                        onClick={() => setActiveTab('Blogs')}
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            activeTab === 'Blogs' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Blogs
                        <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'Blogs' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Books Dropdown (Click & Hover supported) */}
                    <div 
                        className="relative"
                        ref={dropdownRef}
                    >
                        <button 
                            onClick={() => {
                                setActiveTab('Books');
                                setBooksDropdown(!booksDropdown);
                            }}
                            onMouseEnter={() => setBooksDropdown(true)}
                            className={`relative py-1 text-sm font-medium transition-colors bg-transparent border-0 cursor-pointer flex items-center gap-1 group ${
                                activeTab === 'Books' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                            }`}
                        >
                            Books
                            <svg className={`w-3.5 h-3.5 transition-transform ${booksDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                            <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'Books' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </button>

                        {booksDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-[#14213D]/10 rounded-none shadow-xl py-2 flex flex-col z-50">
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
                        onClick={() => setActiveTab('Reviews')}
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            activeTab === 'Reviews' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Reviews
                        <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'Reviews' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* About the author */}
                    <a 
                        href="/pages/author" 
                        onClick={() => setActiveTab('About')}
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            activeTab === 'About' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        About the author
                        <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'About' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>

                    {/* Contact */}
                    <a 
                        href="/pages/contact" 
                        onClick={() => setActiveTab('Contact')}
                        className={`relative py-1 text-sm font-medium transition-colors no-underline group ${
                            activeTab === 'Contact' ? 'text-[#14213D] font-semibold' : 'text-[#14213D]/70 hover:text-[#14213D]'
                        }`}
                    >
                        Contact
                        <span className={`absolute bottom-0 left-0 w-full h-2px bg-[#14213D] transition-all duration-300 ${activeTab === 'Contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                    </a>
                </div>

                {/* Desktop Action Button */}
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
                        <a href="/" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Home</a>
                        <a href="/pages/authorblogs" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Blogs</a>
                        
                        <div className="py-1 border-b border-[#14213D]/10 pb-3">
                            <span className="text-xs font-semibold text-[#14213D]/50 uppercase tracking-wider">Books</span>
                            <div className="flex flex-col pl-4 mt-2 gap-2">
                                <a href="/books/the-family" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">The Family Matriarch</a>
                                <a href="/books/superheroes" onClick={() => setMenuOpen(false)} className="text-sm text-[#14213D]/80 no-underline py-1">Superheroes in Training</a>
                            </div>
                        </div>

                        <a href="/pages/reviews" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Reviews</a>
                        <a href="/pages/author" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">About the author</a>
                        <a href="/pages/contact" onClick={() => setMenuOpen(false)} className="text-base font-medium text-[#14213D]/80 no-underline py-2 border-b border-[#14213D]/10">Contact</a>
                        
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
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../Components/blogPosts';

const ArrowIcon = ({ className = 'w-4 h-4' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

function Meta({ post, light = false }) {
    return (
        <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-white/70' : 'text-[#14213D]/60'}`}>
            <span className={light ? 'text-white' : 'text-[#14213D]'}>{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
        </div>
    );
}

function Blogs() {
    const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];
    const [active, setActive] = useState('All');

    const [featured, ...rest] = blogPosts;
    const filtered = active === 'All' ? rest : blogPosts.filter((p) => p.category === active);

    return (
        <div className="w-full bg-white font-sans">

            {/* ---------- Header ---------- */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        THE JOURNAL · 2026
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Blogs
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Letters, lessons and messages from Mom, on family, legacy, and the tools that help us carry it all.
                    </p>
                </div>
            </section>

            {/* ---------- Featured post ---------- */}
            {active === 'All' && featured && (
                <section className="w-full py-16 md:py-20 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto">
                        <Link
                            to={`/pages/blogs/${featured.slug}`}
                            className="group grid grid-cols-1 lg:grid-cols-12 bg-[#14213D] text-white no-underline overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500"
                        >
                            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[460px] overflow-hidden">
                                <img
                                    src={featured.image}
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <span className="absolute top-5 left-5 bg-white text-[#14213D] text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">
                                    Featured
                                </span>
                            </div>
                            <div className="lg:col-span-5 flex flex-col justify-center p-8 sm:p-12">
                                <Meta post={featured} light />
                                <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-tight mt-4 mb-4">
                                    {featured.title}
                                </h2>
                                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-serif italic mb-8">
                                    {featured.excerpt}
                                </p>
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                    Read the post
                                    <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* ---------- Posts grid ---------- */}
            <section className={`w-full pb-16 md:pb-24 px-6 md:px-12 ${active === 'All' ? '' : 'pt-16 md:pt-20'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 border-b border-[#14213D]/10 pb-6">
                        <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight">
                            {active === 'All' ? 'Latest Posts' : active}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActive(cat)}
                                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 border cursor-pointer transition-colors duration-300 ${
                                        active === cat
                                            ? 'bg-[#14213D] text-white border-[#14213D]'
                                            : 'bg-white text-[#14213D]/70 border-[#14213D]/15 hover:text-[#14213D] hover:border-[#14213D]/50'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((post) => (
                            <Link
                                key={post.slug}
                                to={`/pages/blogs/${post.slug}`}
                                className="group flex flex-col bg-white border border-[#14213D]/10 no-underline hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-1 p-6 sm:p-7">
                                    <Meta post={post} />
                                    <h3 className="text-xl sm:text-2xl font-serif text-[#14213D] leading-snug mt-3 mb-3">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-[#14213D]/70 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#14213D]">
                                        Read more
                                        <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Blogs;

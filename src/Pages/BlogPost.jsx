import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogPosts from '../Components/blogPosts';

function BlogPost() {
    const { slug } = useParams();
    const index = blogPosts.findIndex((p) => p.slug === slug);
    const post = blogPosts[index];

    if (!post) {
        return (
            <section className="w-full py-24 px-6 md:px-12 text-center font-sans">
                <h1 className="text-3xl sm:text-5xl font-serif text-[#14213D] mb-4">Post not found</h1>
                <p className="text-[#14213D]/70 font-serif italic mb-8">This post may have moved or no longer exists.</p>
                <Link
                    to="/pages/blogs"
                    className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all"
                >
                    BACK TO BLOGS
                </Link>
            </section>
        );
    }

    const next = blogPosts[(index + 1) % blogPosts.length];
    const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

    return (
        <div className="w-full bg-white font-sans">

            {/* ---------- Header ---------- */}
            <section className="w-full pt-12 md:pt-16 pb-10 px-6 md:px-12">
                <div className="max-w-3xl mx-auto">
                    <Link to="/pages/blogs" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#14213D]/60 hover:text-[#14213D] no-underline mb-8">
                        ← All posts
                    </Link>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/60 mb-4">
                        <span className="text-[#14213D]">{post.category}</span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight leading-[1.1] mb-6">
                        {post.title}
                    </h1>
                    <p className="text-lg sm:text-xl text-[#14213D]/75 leading-relaxed font-serif italic">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            {/* ---------- Cover image ---------- */}
            <section className="w-full px-6 md:px-12">
                <div className="max-w-5xl mx-auto h-64 sm:h-96 lg:h-[480px] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            </section>

            {/* ---------- Body ---------- */}
            <section className="w-full py-12 md:py-16 px-6 md:px-12">
                <article className="max-w-3xl mx-auto">
                    {post.content.map((block, i) =>
                        block.startsWith('## ') ? (
                            <h2 key={i} className="text-2xl sm:text-3xl font-serif text-[#14213D] mt-10 mb-4">
                                {block.slice(3)}
                            </h2>
                        ) : (
                            <p
                                key={i}
                                className={`text-base sm:text-lg text-[#14213D]/85 leading-relaxed font-serif mb-6 ${
                                    i === 0 ? 'first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-[#14213D]' : ''
                                }`}
                            >
                                {block}
                            </p>
                        )
                    )}

                    {post.link && (
                        <Link
                            to={post.link.to}
                            className="mt-4 inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all"
                        >
                            {post.link.label}
                        </Link>
                    )}

                    {/* Next post */}
                    {next && next.slug !== post.slug && (
                        <Link
                            to={`/pages/blogs/${next.slug}`}
                            className="group mt-14 flex items-center justify-between gap-6 border-y border-[#14213D]/10 py-6 no-underline"
                        >
                            <div>
                                <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/60 mb-1">Next post</span>
                                <span className="text-lg sm:text-2xl font-serif text-[#14213D]">{next.title}</span>
                            </div>
                            <span className="text-2xl text-[#14213D] transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </Link>
                    )}
                </article>
            </section>

            {/* ---------- More posts ---------- */}
            <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-[#F7F7F7] border-t border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-10">
                        More from the blog
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {others.map((p) => (
                            <Link
                                key={p.slug}
                                to={`/pages/blogs/${p.slug}`}
                                className="group flex flex-col bg-white border border-[#14213D]/10 no-underline hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#14213D]/60">{p.category}</span>
                                    <h3 className="text-lg sm:text-xl font-serif text-[#14213D] leading-snug mt-2">{p.title}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BlogPost;

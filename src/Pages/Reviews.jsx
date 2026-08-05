import React, { useState } from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

function Reviews() {
    const [reviewForm, setReviewForm] = useState({
        name: '',
        location: '',
        book: '',
        comment: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const testimonials = [
        {
            quote: "Superheroes in Training is a refreshing and heartfelt collection that blends humor with meaningful life lessons. Carol Denise writes in a way that feels genuine and uplifting.",
            name: "Thomas Kelly",
            location: "New York, NY",
            bookBought: "Verified Buyer · Superheroes in Training",
            image: img1
        },
        {
            quote: "This book offers more than stories. It provides encouragement, wisdom, and a powerful reminder that everyday moments can shape character and purpose.",
            name: "Elizabeth",
            location: "Chicago, IL",
            bookBought: "Verified Buyer · The Family Matriarch",
            image: img2
        },
        {
            quote: "As a teenage mom, I found this book very emotional yet uplifting. I hope to pass this down to my daughter, who is now 4.",
            name: "Ann-Marie Massey",
            location: "Atlanta, GA",
            bookBought: "Verified Buyer · The Family Matriarch",
            image: img3
        },
        {
            quote: "The Family Matriarch made such a beautiful gift to my granddaughters, and the words moved them as they embarked on a new journey all by themselves.",
            name: "Liam Steiner",
            location: "Austin, TX",
            bookBought: "Verified Buyer · Young Men Series",
            image: img1
        },
        {
            quote: "An absolute masterpiece on family values and resilience. Every chapter feels like a personal mentoring session with Carol herself.",
            name: "Sarah Jenkins",
            location: "Seattle, WA",
            bookBought: "Verified Buyer · The Family Matriarch",
            image: img2
        },
        {
            quote: "The practical insights in these books changed how our household communicates. Truly inspiring work that leaves a lasting footprint.",
            name: "Marcus Vance",
            location: "Denver, CO",
            bookBought: "Verified Buyer · Superheroes in Training",
            image: img3
        }
    ];

    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Header / Hero Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        VERIFIED BOOK BUYERS · 2026
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        What Readers Are Saying
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Genuine reviews and feedback from readers who purchased and experienced the books firsthand.
                    </p>
                </div>
            </section>

            {/* Testimonials Extended Grid Section */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                        {testimonials.map((item, index) => (
                            <div key={index} className="flex flex-col p-8 bg-[#F7F7F7] border border-[#14213D]/10 justify-between">
                                <div>
                                    {/* Star Rating SVGs in Gold/Yellow */}
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 fill-[#E5A93B]" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5A93B] block mb-3">
                                        {item.bookBought}
                                    </span>
                                    <p className="text-base sm:text-lg font-serif italic text-[#14213D] leading-relaxed mb-8">
                                        "{item.quote}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-[#14213D]/10">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#14213D]/15 shrink-0 border border-[#14213D]/20">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#14213D]">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-[#14213D]/70 normal-case mt-0.5">
                                            {item.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leave a Review Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 border-t border-[#14213D]/10">
                <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-[#14213D]/10 text-left">
                    <div className="text-center mb-10">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2 block">
                            SHARE YOUR EXPERIENCE
                        </span>
                        <h2 className="text-3xl font-serif font-normal text-[#14213D]">
                            Leave a Book Review
                        </h2>
                    </div>

                    {submitted ? (
                        <div className="py-12 text-center">
                            <h3 className="text-2xl font-serif text-[#14213D] mb-2">Thank You for Your Feedback!</h3>
                            <p className="text-sm text-[#14213D]/80 font-serif">Your verified review has been submitted successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                    YOUR NAME
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    required
                                    value={reviewForm.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name" 
                                    className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                        YOUR LOCATION / CITY
                                    </label>
                                    <input 
                                        type="text" 
                                        name="location" 
                                        required
                                        value={reviewForm.location}
                                        onChange={handleChange}
                                        placeholder="e.g. New York, NY" 
                                        className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                        BOOK PURCHASED
                                    </label>
                                    <input 
                                        type="text" 
                                        name="book" 
                                        required
                                        value={reviewForm.book}
                                        onChange={handleChange}
                                        placeholder="e.g. The Family Matriarch" 
                                        className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                    YOUR REVIEW / COMMENT
                                </label>
                                <textarea 
                                    name="comment" 
                                    rows="4" 
                                    required
                                    value={reviewForm.comment}
                                    onChange={handleChange}
                                    placeholder="Write your experience with the book here..." 
                                    className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none transition-all uppercase cursor-pointer"
                            >
                                SUBMIT REVIEW
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Reviews;
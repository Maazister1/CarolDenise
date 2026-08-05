import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahan aap apni form submission logic (jaise EmailJS ya backend API call) add kar sakte hain
        setSubmitted(true);
    };

    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Hero / Header Section */}
            <section className="w-full bg-[#F7F7F7] py-16 md:py-24 px-6 md:px-12 text-center border-b border-[#14213D]/10">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        GET IN TOUCH · 2026
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Let’s Connect
                    </h1>
                    <p className="text-base sm:text-lg text-[#14213D]/80 leading-relaxed max-w-2xl mx-auto font-serif italic">
                        Have questions, feedback, or want to collaborate? Reach out to us and we’ll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            {/* Main Content Section: Info & Form Grid */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Side: Contact Information */}
                        <div className="lg:col-span-5 flex flex-col items-start text-left">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                                DIRECT INQUIRIES
                            </span>

                            <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                                We'd Love to Hear From You
                            </h2>

                            <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-8">
                                Whether you have a query about our books, need assistance with an order, or just want to share your thoughts, our inbox is always open.
                            </p>

                            <div className="space-y-6 text-sm sm:text-base text-[#14213D]/80 font-serif w-full border-t border-[#14213D]/15 pt-6">
                                <div>
                                    <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-1">
                                        EMAIL ADDRESS
                                    </span>
                                    <a href="mailto:Caroldeniseauthor@gmail.com" className="text-lg font-medium text-[#14213D] hover:underline">
                                      Caroldeniseauthor@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <span className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-1">
                                        RESPONSE TIME
                                    </span>
                                    <p className="text-base text-[#14213D]">
                                        Within 24 to 48 business hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-7 bg-[#F7F7F7] p-8 sm:p-12 border border-[#14213D]/10">
                            {submitted ? (
                                <div className="py-16 text-center">
                                    <h3 className="text-3xl font-serif text-[#14213D] mb-3">Thank You!</h3>
                                    <p className="text-sm sm:text-base text-[#14213D]/80 font-serif">
                                        Your message has been sent successfully. We will get back to you shortly.
                                    </p>
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
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your full name" 
                                            className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                            EMAIL ADDRESS
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email address" 
                                            className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-2">
                                            MESSAGE
                                        </label>
                                        <textarea 
                                            name="message" 
                                            rows="5" 
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Write your message here..." 
                                            className="w-full bg-white border border-[#14213D]/20 px-4 py-3.5 text-sm text-[#14213D] focus:outline-none focus:border-[#14213D] transition-colors rounded-none resize-none"
                                        ></textarea>
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="w-full inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none transition-all uppercase cursor-pointer"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
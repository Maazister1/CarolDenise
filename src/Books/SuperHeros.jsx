// import React, { useState, useEffect } from 'react';
// import bookImage from '../assets/book2.png';
// import comingImage from '../assets/coming.png';
// import amazonIcon from '../assets/amazon.png';

// function SuperHeros() {
//     const [selectedFormat1, setSelectedFormat1] = useState('Hardcover');
//     const [selectedFormat2, setSelectedFormat2] = useState('Hardcover');
//     const [activeSection, setActiveSection] = useState('volume1');

//     const formats = [
//         { name: 'eBook', price: '$2.99' },
//         { name: 'Paperback', price: '$17.99' },
//         { name: 'Hardcover', price: '$22.99' }
//     ];

//     const amazonUrl = "https://www.amazon.com/Superheroes-Training-what-had-HAPPENED/dp/B0DMHQ99D/";

//     // Intersection Observer with refined threshold for accurate section tracking
//     useEffect(() => {
//         const sections = ['volume1', 'volume2', 'volume3'];
        
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(entry.target.id);
//                     }
//                 });
//             },
//             { threshold: 0.2, rootMargin: '-10% 0px -40% 0px' }
//         );

//         sections.forEach((id) => {
//             const el = document.getElementById(id);
//             if (el) observer.observe(el);
//         });

//         return () => {
//             sections.forEach((id) => {
//                 const el = document.getElementById(id);
//                 if (el) observer.unobserve(el);
//             });
//         };
//     }, []);

//     const scrollToSection = (id) => {
//         setActiveSection(id); // Instantly update active state on click
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
//             <div className="max-w-7xl mx-auto">
                
//                 {/* --- NAVIGATION BUTTONS: WIDER, SHORTER HEIGHT, SINGLE LINE TEXT --- */}
//                 <div className="flex justify-center items-center gap-4 sm:gap-6 mb-16">
//                     <button 
//                         onClick={() => scrollToSection('volume1')}
//                         className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
//                             activeSection === 'volume1' 
//                                 ? 'bg-[#14213D] text-white border border-[#14213D]' 
//                                 : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
//                         }`}
//                     >
//                         <span>VOL</span>
//                         <span>01</span>
//                     </button>
//                     <button 
//                         onClick={() => scrollToSection('volume2')}
//                         className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
//                             activeSection === 'volume2' 
//                                 ? 'bg-[#14213D] text-white border border-[#14213D]' 
//                                 : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
//                         }`}
//                     >
//                         <span>VOL</span>
//                         <span>02</span>
//                     </button>
//                     <button 
//                         onClick={() => scrollToSection('volume3')}
//                         className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
//                             activeSection === 'volume3' 
//                                 ? 'bg-[#14213D] text-white border border-[#14213D]' 
//                                 : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
//                         }`}
//                     >
//                         <span>VOL</span>
//                         <span>03</span>
//                     </button>
//                 </div>

//                 {/* ==================== VOLUME 1 SECTION ==================== */}
//                 <div id="volume1" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pt-8 border-t border-gray-100">
                    
//                     {/* Left Side: Book Mockup */}
//                     <div className="lg:col-span-5 flex justify-center">
//                         <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm">
//                             <img 
//                                 src={bookImage} 
//                                 alt="Superheroes In Training Book Volume 1" 
//                                 className="max-h-full max-w-full object-contain shadow-2xl"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side: Details */}
//                     <div className="lg:col-span-7 flex flex-col items-start text-left">
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
//                             YOUNG MEN SERIES · 2026 · VOLUME 01
//                         </span>

//                         <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
//                             Superheroes In Training
//                         </h1>

//                         <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
//                             So what had happened was... Volume One
//                         </p>

//                         <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
//                             “Superheroes in Training – So what had happened was…” is a captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor. In Part 1, short stories highlight the whimsical yet transformative impact of these encounters, altering the course of one’s journey.
//                         </p>

//                         {/* Format Selector */}
//                         <div className="w-full mb-8">
//                             <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
//                                 CHOOSE YOUR PREFERENCE
//                             </span>

//                             <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
//                                 {formats.map((format) => (
//                                     <div 
//                                         key={format.name}
//                                         onClick={() => setSelectedFormat1(format.name)}
//                                         className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
//                                             selectedFormat1 === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
//                                         }`}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center">
//                                                 {selectedFormat1 === format.name && (
//                                                     <div className="w-2 h-2 rounded-full bg-[#14213D]"></div>
//                                                 )}
//                                             </div>
//                                             <span className="text-sm sm:text-base text-[#14213D] font-serif">
//                                                 {format.name}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm sm:text-base text-[#14213D] font-medium">
//                                             {format.price}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
//                             <a 
//                                 href={amazonUrl} 
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-md"
//                             >
//                                 <img src={amazonIcon} alt="Amazon" className="w-4 h-4 object-contain brightness-0 invert" />
//                                 PURCHASE NOW
//                             </a>
//                             <a 
//                                 href="/SuperHeros.pdf" 
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
//                             >
//                                 FREE CHAPTER
//                             </a>
//                         </div>
//                     </div>
//                 </div>


//                 {/* ==================== VOLUME 2 SECTION ==================== */}
//                 <div id="volume2" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pt-16 border-t border-gray-200">
                    
//                     {/* Left Side: Book Mockup */}
//                     <div className="lg:col-span-5 flex justify-center">
//                         <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm">
//                             <img 
//                                 src={bookImage} 
//                                 alt="Superheroes In Training Book Volume 2" 
//                                 className="max-h-full max-w-full object-contain shadow-2xl"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side: Details */}
//                     <div className="lg:col-span-7 flex flex-col items-start text-left">
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
//                             YOUNG MEN SERIES · 2026 · VOLUME 02
//                         </span>

//                         <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
//                             Superheroes In Training
//                         </h2>

//                         <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
//                             So what had happened was... Volume Two
//                         </p>

//                         <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
//                             In Part 2, "Messages from Mom" delivers heartfelt wisdom from maternal figures, offering guidance and reassurance in a world filled with uncertainties. It addresses pressing issues like the loneliness epidemic and being mindful of vampires among us.
//                         </p>

//                         {/* Format Selector */}
//                         <div className="w-full mb-8">
//                             <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
//                                 CHOOSE YOUR PREFERENCE
//                             </span>

//                             <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
//                                 {formats.map((format) => (
//                                     <div 
//                                         key={format.name}
//                                         onClick={() => setSelectedFormat2(format.name)}
//                                         className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
//                                             selectedFormat2 === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
//                                         }`}
//                                     >
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center">
//                                                 {selectedFormat2 === format.name && (
//                                                     <div className="w-2 h-2 rounded-full bg-[#14213D]"></div>
//                                                 )}
//                                             </div>
//                                             <span className="text-sm sm:text-base text-[#14213D] font-serif">
//                                                 {format.name}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm sm:text-base text-[#14213D] font-medium">
//                                             {format.price}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
//                             <a 
//                                 href={amazonUrl} 
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-md"
//                             >
//                                 <img src={amazonIcon} alt="Amazon" className="w-4 h-4 object-contain brightness-0 invert" />
//                                 PURCHASE NOW
//                             </a>
//                             <a 
//                                 href="/SuperHeros_Volume2.pdf" 
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
//                             >
//                                 FREE CHAPTER
//                             </a>
//                         </div>
//                     </div>
//                 </div>


//                 {/* ==================== VOLUME 3 SECTION (COMING SOON) ==================== */}
//                 <div id="volume3" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-16 border-t border-gray-200">
                    
//                     {/* Left Side: Coming Soon Image */}
//                     <div className="lg:col-span-5 flex justify-center">
//                         <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm relative">
//                             <div className="absolute top-4 left-4 z-20 bg-white text-[#14213D] px-4 py-1.5 border border-gray-200">
//                                 <span className="text-[10px] font-bold uppercase tracking-widest">
//                                     COMING SOON
//                                 </span>
//                             </div>
//                             <img 
//                                 src={comingImage} 
//                                 alt="Volume 3 Coming Soon" 
//                                 className="max-h-full max-w-full object-contain shadow-2xl"
//                             />
//                         </div>
//                     </div>

//                     {/* Right Side: Details */}
//                     <div className="lg:col-span-7 flex flex-col items-start text-left">
//                         <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
//                             YOUNG MEN SERIES · UPCOMING · VOLUME 03
//                         </span>

//                         <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
//                             Superheroes In Training
//                         </h2>

//                         <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
//                             So what had happened was... Volume Three
//                         </p>

//                         <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
//                             The journey continues in Volume 3 with brand new empowering narratives and uplifting life lessons. Designed to inspire resilience and purpose, this upcoming edition brings even more valuable insights and practical tools for our young men.
//                         </p>

//                         {/* Format Placeholder */}
//                         <div className="w-full mb-8 opacity-60">
//                             <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
//                                 CHOOSE YOUR PREFERENCE (COMING SOON)
//                             </span>

//                             <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
//                                 {formats.map((format) => (
//                                     <div key={format.name} className="py-3.5 px-2 flex items-center justify-between">
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-4 h-4 rounded-full border border-gray-300"></div>
//                                             <span className="text-sm sm:text-base text-gray-500 font-serif">
//                                                 {format.name}
//                                             </span>
//                                         </div>
//                                         <span className="text-sm sm:text-base text-gray-500 font-medium">
//                                             {format.price}
//                                         </span>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Disabled Action Buttons */}
//                         <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
//                             <button 
//                                 disabled 
//                                 className="inline-flex items-center justify-center bg-gray-200 text-gray-400 text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-not-allowed uppercase"
//                             >
//                                 COMING SOON
//                             </button>
//                             <button 
//                                 disabled 
//                                 className="inline-flex items-center justify-center bg-transparent text-gray-400 border border-gray-200 text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-not-allowed uppercase"
//                             >
//                                 COMING SOON
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default SuperHeros;

import React, { useState, useEffect } from 'react';
import bookImage from '../assets/book2.png';
import comingImage from '../assets/coming.png';
import amazonIcon from '../assets/amazon.png';

function SuperHeros() {
    const [selectedFormat1, setSelectedFormat1] = useState('Hardcover');
    const [selectedFormat2, setSelectedFormat2] = useState('Hardcover');
    const [activeSection, setActiveSection] = useState('volume1');
    const [selectedLang, setSelectedLang] = useState('English');

    const formats = [
        { name: 'eBook', price: '$2.99' },
        { name: 'Paperback', price: '$17.99' },
        { name: 'Hardcover', price: '$22.99' }
    ];

    // Multilingual Content Dictionary for Volumes
    const contentData = {
        English: {
            vol1: {
                title: 'Superheroes In Training',
                subtitle: 'So what had happened was... Volume One',
                description: '“Superheroes in Training – So what had happened was…” is a captivating collection of stories of unexpected encounters with superheroes, where life lessons are involved and with humor. In Part 1, short stories highlight the whimsical yet transformative impact of these encounters, altering the course of one’s journey.',
                amazonUrl: 'https://www.amazon.com/Superheroes-Training-what-had-HAPPENED/dp/B0DMHQ99D/'
            },
            vol2: {
                title: 'Superheroes In Training',
                subtitle: 'So what had happened was... Volume Two',
                description: 'In Part 2, "Messages from Mom" delivers heartfelt wisdom from maternal figures, offering guidance and reassurance in a world filled with uncertainties. It addresses pressing issues like the loneliness epidemic and being mindful of vampires among us.',
                amazonUrl: 'https://www.amazon.com/Superheroes-Training-what-had-HAPPENED/dp/B0DMHQ99D/'
            },
            vol3: {
                title: 'Superheroes In Training',
                subtitle: 'So what had happened was... Volume Three',
                description: 'The journey continues in Volume 3 with brand new empowering narratives and uplifting life lessons. Designed to inspire resilience and purpose, this upcoming edition brings even more valuable insights and practical tools for our young men.',
                amazonUrl: '#'
            }
        },
        French: {
            vol1: {
                title: 'Superhéros En Entraînement',
                subtitle: 'Alors, Qu\'est-ce qui s\'est PASSÉ... Volume Un',
                description: 'Superhéros En Entraînement : Alors, Qu\'est-ce qui s\'est PASSÉ... est un voyage captivant et valorisant conçu pour guider les jeunes esprits. Il explore les principes fondamentaux du caractère, de la résilience et de la croissance à travers des récits stimulants.',
                amazonUrl: 'https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Pas%C3%B3-ebook/dp/B0GFWRHD9X?ref_=ast_author_dp_rw&th=1&psc=1'
            },
            vol2: {
                title: 'Superhéros En Entraînement',
                subtitle: 'Alors, Qu\'est-ce qui s\'est PASSÉ... Volume Deux',
                description: 'La suite du voyage en Volume 2 offre des récits stimulants et des leçons de vie inspirantes pour encourager la résilience et le sens des responsabilités chez les jeunes.',
                amazonUrl: 'https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Pas%C3%B3-ebook/dp/B0GFWRHD9X?ref_=ast_author_dp_rw&th=1&psc=1'
            },
            vol3: {
                title: 'Superhéros En Entraînement',
                subtitle: 'Alors, Qu\'est-ce qui s\'est PASSÉ... Volume Trois',
                description: 'Le voyage continue dans le Volume 3 avec de nouveaux récits valorisants et des outils pratiques pour nos jeunes hommes.',
                amazonUrl: '#'
            }
        },
        Spanish: {
            vol1: {
                title: 'Superhéroes En Entrenamiento',
                subtitle: 'Entonces, ¿Qué PASÓ...? Volumen Uno',
                description: 'Superhéroes En Entrenamiento: Entonces, ¿Qué PASÓ...? es un viaje atractivo y empoderador diseñado para guiar a las mentes jóvenes. Explora los principios fundamentales del carácter, la resiliencia y el crecimiento a través de historias cercanas.',
                amazonUrl: 'https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Spanish-ebook/dp/B0GK4MJ3WT?ref_=ast_author_dp_rw&th=1&psc=1'
            },
            vol2: {
                title: 'Superhéroes En Entrenamiento',
                subtitle: 'Entonces, ¿Qué PASÓ...? Volumen Dos',
                description: 'En el Volumen 2 se continúa el viaje con sabios consejos y herramientas prácticas orientadas al desarrollo personal y la fortaleza mental.',
                amazonUrl: 'https://www.amazon.com/Superh%C3%A9roes-En-Entrenamiento-Entonces-Spanish-ebook/dp/B0GK4MJ3WT?ref_=ast_author_dp_rw&th=1&psc=1'
            },
            vol3: {
                title: 'Superhéroes En Entrenamiento',
                subtitle: 'Entonces, ¿Qué PASÓ...? Volumen Tres',
                description: 'La travesía continúa en el Volumen 3 con narrativas empoderadoras inéditas y valiosas lecciones de vida para inspirar propósito.',
                amazonUrl: '#'
            }
        }
    };

    const currentLangData = contentData[selectedLang];

    // Intersection Observer with refined threshold for accurate section tracking
    useEffect(() => {
        const sections = ['volume1', 'volume2', 'volume3'];
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '-10% 0px -40% 0px' }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach((id) => {
                const el = document.getElementById(id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        setActiveSection(id); // Instantly update active state on click
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* --- LANGUAGE SELECTION TABS --- */}
                <div className="flex flex-col items-center mb-10">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                        SELECT EDITION LANGUAGE
                    </span>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {['English', 'French', 'Spanish'].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => setSelectedLang(lang)}
                                className={`px-6 py-2.5 text-xs font-bold tracking-widest uppercase transition-all rounded-md border ${
                                    selectedLang === lang 
                                        ? 'bg-[#14213D] text-white border-[#14213D] shadow-sm' 
                                        : 'bg-white text-[#14213D] border-[#14213D]/30 hover:bg-black/5'
                                }`}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- NAVIGATION BUTTONS: WIDER, SHORTER HEIGHT, SINGLE LINE TEXT --- */}
                <div className="flex justify-center items-center gap-4 sm:gap-6 mb-16">
                    <button 
                        onClick={() => scrollToSection('volume1')}
                        className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
                            activeSection === 'volume1' 
                                ? 'bg-[#14213D] text-white border border-[#14213D]' 
                                : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
                        }`}
                    >
                        <span>VOL</span>
                        <span>01</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('volume2')}
                        className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
                            activeSection === 'volume2' 
                                ? 'bg-[#14213D] text-white border border-[#14213D]' 
                                : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
                        }`}
                    >
                        <span>VOL</span>
                        <span>02</span>
                    </button>
                    <button 
                        onClick={() => scrollToSection('volume3')}
                        className={`w-36 sm:w-44 h-12 sm:h-14 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm tracking-wider transition-all shadow-sm ${
                            activeSection === 'volume3' 
                                ? 'bg-[#14213D] text-white border border-[#14213D]' 
                                : 'bg-white text-[#14213D] border border-[#14213D] hover:bg-[#14213D]/5'
                        }`}
                    >
                        <span>VOL</span>
                        <span>03</span>
                    </button>
                </div>

                {/* ==================== VOLUME 1 SECTION ==================== */}
                <div id="volume1" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pt-8 border-t border-gray-100">
                    
                    {/* Left Side: Book Mockup */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm">
                            <img 
                                src={bookImage} 
                                alt="Superheroes In Training Book Volume 1" 
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            YOUNG MEN SERIES · 2026 · VOLUME 01 ({selectedLang.toUpperCase()})
                        </span>

                        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            {currentLangData.vol1.title}
                        </h1>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            {currentLangData.vol1.subtitle}
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            {currentLangData.vol1.description}
                        </p>

                        {/* Format Selector */}
                        <div className="w-full mb-8">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                                CHOOSE YOUR PREFERENCE ({selectedLang.toUpperCase()})
                            </span>

                            <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
                                {formats.map((format) => (
                                    <div 
                                        key={format.name}
                                        onClick={() => setSelectedFormat1(format.name)}
                                        className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
                                            selectedFormat1 === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center">
                                                {selectedFormat1 === format.name && (
                                                    <div className="w-2 h-2 rounded-full bg-[#14213D]"></div>
                                                )}
                                            </div>
                                            <span className="text-sm sm:text-base text-[#14213D] font-serif">
                                                {format.name}
                                            </span>
                                        </div>
                                        <span className="text-sm sm:text-base text-[#14213D] font-medium">
                                            {format.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <a 
                                href={currentLangData.vol1.amazonUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-md"
                            >
                                <img src={amazonIcon} alt="Amazon" className="w-4 h-4 object-contain brightness-0 invert" />
                                PURCHASE {selectedLang.toUpperCase()}
                            </a>
                            <a 
                                href="/SuperHeros.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                FREE CHAPTER
                            </a>
                        </div>
                    </div>
                </div>


                {/* ==================== VOLUME 2 SECTION ==================== */}
                <div id="volume2" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24 pt-16 border-t border-gray-200">
                    
                    {/* Left Side: Book Mockup */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm">
                            <img 
                                src={bookImage} 
                                alt="Superheroes In Training Book Volume 2" 
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            YOUNG MEN SERIES · 2026 · VOLUME 02 ({selectedLang.toUpperCase()})
                        </span>

                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            {currentLangData.vol2.title}
                        </h2>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            {currentLangData.vol2.subtitle}
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            {currentLangData.vol2.description}
                        </p>

                        {/* Format Selector */}
                        <div className="w-full mb-8">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                                CHOOSE YOUR PREFERENCE ({selectedLang.toUpperCase()})
                            </span>

                            <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
                                {formats.map((format) => (
                                    <div 
                                        key={format.name}
                                        onClick={() => setSelectedFormat2(format.name)}
                                        className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
                                            selectedFormat2 === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center">
                                                {selectedFormat2 === format.name && (
                                                    <div className="w-2 h-2 rounded-full bg-[#14213D]"></div>
                                                )}
                                            </div>
                                            <span className="text-sm sm:text-base text-[#14213D] font-serif">
                                                {format.name}
                                            </span>
                                        </div>
                                        <span className="text-sm sm:text-base text-[#14213D] font-medium">
                                            {format.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <a 
                                href={currentLangData.vol2.amazonUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-md"
                            >
                                <img src={amazonIcon} alt="Amazon" className="w-4 h-4 object-contain brightness-0 invert" />
                                PURCHASE {selectedLang.toUpperCase()}
                            </a>
                            <a 
                                href="/SuperHeros_Volume2.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                FREE CHAPTER
                            </a>
                        </div>
                    </div>
                </div>


                {/* ==================== VOLUME 3 SECTION (COMING SOON) ==================== */}
                <div id="volume3" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-16 border-t border-gray-200">
                    
                    {/* Left Side: Coming Soon Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden shadow-sm relative">
                            <div className="absolute top-4 left-4 z-20 bg-white text-[#14213D] px-4 py-1.5 border border-gray-200">
                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                    COMING SOON
                                </span>
                            </div>
                            <img 
                                src={comingImage} 
                                alt="Volume 3 Coming Soon" 
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Details */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            YOUNG MEN SERIES · UPCOMING · VOLUME 03 ({selectedLang.toUpperCase()})
                        </span>

                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            {currentLangData.vol3.title}
                        </h2>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            {currentLangData.vol3.subtitle}
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            {currentLangData.vol3.description}
                        </p>

                        {/* Format Placeholder */}
                        <div className="w-full mb-8 opacity-60">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                                CHOOSE YOUR PREFERENCE (COMING SOON)
                            </span>

                            <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
                                {formats.map((format) => (
                                    <div key={format.name} className="py-3.5 px-2 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                                            <span className="text-sm sm:text-base text-gray-500 font-serif">
                                                {format.name}
                                            </span>
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-500 font-medium">
                                            {format.price}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Disabled Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <button 
                                disabled 
                                className="inline-flex items-center justify-center bg-gray-200 text-gray-400 text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-not-allowed uppercase"
                            >
                                COMING SOON
                            </button>
                            <button 
                                disabled 
                                className="inline-flex items-center justify-center bg-transparent text-gray-400 border border-gray-200 text-xs font-bold tracking-widest px-8 py-4 rounded-none cursor-not-allowed uppercase"
                            >
                                COMING SOON
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SuperHeros;
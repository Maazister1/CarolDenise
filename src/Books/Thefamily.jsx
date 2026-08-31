import React, { useState } from 'react';
import book1 from '../assets/book1.png';

function TheFamily() {
    const [selectedFormat, setSelectedFormat] = useState('Hardcover');
    const [selectedLang, setSelectedLang] = useState('English');

    const formats = [
        { name: 'eBook', price: '$9.99' },
        { name: 'Paperback', price: '$19.99' },
        { name: 'Hardcover', price: '$39.99' },
        { name: 'Audiobook', price: '$13.00' }
    ];

    const bookContent = {
        English: {
            title: 'The Family Matriarch',
            subtitle: 'A Labor and A Legacy of Love',
            description: 'The Family Matriarch: A Labor and A Legacy of Love centers around the topic of the family matriarch and the importance of that role. It is a personal take on the role of a woman in a family. The author, Carol, wrote this book as a love letter to her daughter, who she considers a matriarch-in-training. She hopes that her words will inspire not only her daughter but countless other matriarchs-in-training.',
            links: {
                eBook: 'https://www.amazon.com/Family-Matriarch-Labor-Legacy-Love-ebook/dp/B0CKNSH8Z1/',
                Paperback: 'https://www.amazon.com/Family-Matriarch-Labor-Legacy-Love/dp/B0CKNSH8Z1/',
                Hardcover: 'https://www.amazon.com/Family-Matriarch-Labor-Legacy-Love/dp/B0CKNSH8Z1/',
                Audiobook: 'https://www.barnesandnoble.com/w/the-family-matriarch-carol-denise/1144175986?ean=2940202201547'
            }
        },
        French: {
            title: 'La Matriarche Familiale',
            subtitle: 'Un Travail et Un Héritage d’Amour',
            description: 'La Matriarche Familiale : Un Travail et Un Héritage d’Amour se concentre sur le thème de la matriarche de la famille et l’importance de ce rôle. C’est une vision personnelle du rôle d’une femme au sein d’une famille. L’auteure, Carol, a écrit ce livre comme une lettre d’amour à sa fille, qu’elle considère comme une matriarche en formation.',
            links: {
                eBook: 'https://www.amazon.com/Matriarche-Familiale-Travail-H%C3%A9ritage-damour-ebook/dp/B0DHLRYGXM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR',
                Paperback: 'https://www.amazon.com/Matriarche-Familiale-Travail-H%C3%A9ritage-damour-ebook/dp/B0DHLRYGXM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR',
                Hardcover: 'https://www.amazon.com/Matriarche-Familiale-Travail-H%C3%A9ritage-damour-ebook/dp/B0DHLRYGXM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR',
                Audiobook: 'https://www.amazon.com/Matriarche-Familiale-Travail-H%C3%A9ritage-damour-ebook/dp/B0DHLRYGXM?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.7O-5GYzBewovFaty3Ggy-7T2bYOqgyKHvSHufeIjegmRuds64lrI_sZgptXNksH9H7K-pJKspHss90XvqZxmVA8Y6A6c4UBSvgd_rALGYQw_2tw0Ta7ZoZXdWz1ZcqD3.DRAYJTmbg0EKk4hR_e4AVUpm4ll3WSaij3o8UBnLTSA&dib_tag=AUTHOR'
            }
        },
        Spanish: {
            title: 'La Familia Matriarca',
            subtitle: 'Un Trabajo y Un Legado de Amor',
            description: 'La Familia Matriarca: Un Trabajo y Un Legado de Amor se centra en el tema de la matriarca de la familia y la importancia de ese papel. Es una perspectiva personal sobre el papel de una mujer en la familia. La autora, Carol, escribió este libro como una carta de amor para su hija, a quien considera una matriarca en formación.',
            links: {
                eBook: 'https://www.amazon.com/Familia-Matriarca-Trabajo-Legado-Spanish-ebook/dp/B0GJP52896?ref_=ast_author_dp_rw&th=1&psc=1',
                Paperback: 'https://www.amazon.com/Familia-Matriarca-Trabajo-Legado-Spanish-ebook/dp/B0GJP52896?ref_=ast_author_dp_rw&th=1&psc=1',
                Hardcover: 'https://www.amazon.com/Familia-Matriarca-Trabajo-Legado-Spanish-ebook/dp/B0GJP52896?ref_=ast_author_dp_rw&th=1&psc=1',
                Audiobook: 'https://www.barnesandnoble.com/w/the-family-matriarch-carol-denise/1144175986?ean=2940202201547'
            }
        }
    };

    const currentContent = bookContent[selectedLang];
    const currentPurchaseUrl = currentContent.links[selectedFormat];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Book Mockup Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="w-full max-w-[420px] h-[460px] sm:h-[540px] bg-[#F7F7F7] flex items-center justify-center p-8 overflow-hidden rounded-xl shadow-sm">
                            <img 
                                src={book1} 
                                alt="The Family Matriarch Book" 
                                className="max-h-full max-w-full object-contain shadow-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Side: Language Switcher, Details, Description & Buttons */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        
                        {/* Language Selection Tabs (Placed Right at the Top where requested) */}
                        <div className="w-full mb-6">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                                SELECT EDITION LANGUAGE
                            </span>
                            <div className="flex flex-wrap gap-2.5">
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

                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3">
                            THE FAMILY MATRIARCH · 2026 ({selectedLang.toUpperCase()})
                        </span>

                        <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-2">
                            {currentContent.title}
                        </h1>

                        <p className="text-base sm:text-lg font-serif italic text-[#14213D]/80 mb-6">
                            {currentContent.subtitle}
                        </p>

                        <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed mb-6">
                            {currentContent.description}
                        </p>

                        {/* Choose Your Format Section */}
                        <div className="w-full mb-8">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                                CHOOSE YOUR PREFERENCE ({selectedLang.toUpperCase()})
                            </span>

                            <div className="flex flex-col divide-y divide-[#14213D]/15 border-t border-b border-[#14213D]/15">
                                {formats.map((format) => (
                                    <div 
                                        key={format.name}
                                        onClick={() => setSelectedFormat(format.name)}
                                        className={`py-3.5 px-2 flex items-center justify-between cursor-pointer transition-colors ${
                                            selectedFormat === format.name ? 'bg-[#14213D]/5 font-medium' : 'hover:bg-black/5'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full border border-[#14213D] flex items-center justify-center">
                                                {selectedFormat === format.name && (
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
                                href={currentPurchaseUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#14213D]/90 text-white text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase shadow-md"
                            >
                                PURCHASE {selectedLang.toUpperCase()} ({selectedFormat.toUpperCase()})
                            </a>
                            <a 
                                href="/The-Family-Matriarch-Chapter-One.pdf" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center bg-transparent hover:bg-black/5 text-[#14213D] border border-[#14213D]/30 text-xs font-bold tracking-widest px-8 py-4 rounded-none no-underline transition-all uppercase"
                            >
                                FREE CHAPTER
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default TheFamily;
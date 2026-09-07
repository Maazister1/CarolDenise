import React from 'react'
import { 
  IconBook, 
  IconExternalLink, 
  IconBrandAmazon, 
  IconBrandGoogle, 
  IconBooks,
  IconBookmark,
  IconShoppingCart
} from '@tabler/icons-react'

function Distribution() {
  const book1Links = [
    { name: 'Bookshop', url: 'https://bookshop.org/p/books/the-family-matriarch-a-labor-and-a-legacy-of-love-carol-denise/c4770d31574cac65?ean=9798295588198&next=t', icon: IconShoppingCart },
    { name: 'Bol', url: 'https://www.bol.com/nl/nl/p/the-family-matriarch/9300000256885684/', icon: IconBook },
    { name: 'Everand', url: 'https://www.everand.com/book/989081245/The-Family-Matriarch-A-Labor-and-A-Legacy-of-Love', icon: IconBookmark },
    { name: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/the-family-matriarch-1?sId=8b1c57c8-6fcd-4c7a-9080-fcf4cfa48bea&ssId=uzc5QY3szv-C5hkNMRkR_&cPos=1', icon: IconBooks },
    { name: 'Amazon (English)', url: 'https://www.amazon.com/dp/B0CKNNSV27', icon: IconBrandAmazon },
    { name: 'Amazon (French)', url: 'https://www.amazon.com/dp/B0DHLRYGXM', icon: IconBrandAmazon },
    { name: 'Amazon (Spanish)', url: 'https://www.amazon.com/dp/B0DY9ZYM2V', icon: IconBrandAmazon },
  ];

  const book2Links = [
    { name: 'Bookshop', url: 'https://bookshop.org/p/books/superheroes-in-training-so-what-had-happened-was-carol-denise/8044e05a7c551265?ean=9798295583766&next=t', icon: IconShoppingCart },
    { name: 'Everand', url: 'https://www.everand.com/book/988517835/Superheroes-In-Training-So-what-had-HAPPENED-was', icon: IconBookmark },
    { name: 'Kobo', url: 'https://www.kobo.com/us/en/ebook/superheroes-in-training?sId=1864e6a6-3651-488c-924f-b2c68ccc17aa&ssId=kF-6hweSSau_1LGBBzEGJ&cPos=1', icon: IconBooks },
    { name: 'Google Books', url: 'http://google.com.pk/books/edition/Superheroes_In_Training/1tmzEQAAQBAJ?hl=en&gbpv=1&dq=Superheroes+In+Training+%22So,+what+had+HAPPENED+was...%22+by+Carol+Denise&pg=PT4&printsec=frontcover', icon: IconBrandGoogle },
    { name: 'Amazon', url: 'https://www.amazon.co.uk/Superheroes-Training-what-had-HAPPENED-ebook/dp/B0GHPQQBCX?ref_=ast_author_mpb', icon: IconBrandAmazon },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-[#14213D]">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight mb-3">Book Distribution & Availability</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Explore and purchase published works across various global platforms and retailers.
        </p>
      </div>

      {/* Single column stack: one section on top, the other below it */}
      <div className="flex flex-col gap-8">
        
        {/* Book 1 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-2 text-[#14213D] mb-3 text-xs font-bold uppercase tracking-widest bg-[#14213D]/5 px-3 py-1 rounded-full w-fit">
            <IconBook className="w-3.5 h-3.5 text-[#14213D]" /> Published Work
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#14213D] mb-6 leading-snug">
            The Family Matriarch: A Labor and A Legacy of Love
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {book1Links.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a 
                  key={idx} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#14213D]/5 border border-gray-100 hover:border-[#14213D]/20 transition-all text-xs sm:text-sm text-gray-700 hover:text-[#14213D] group shadow-sm"
                >
                  <span className="flex items-center gap-2.5 font-medium truncate">
                    <IconComponent className="w-4 h-4 text-[#14213D] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{item.name}</span>
                  </span>
                  <IconExternalLink className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#14213D] transition-colors ml-2" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Book 2 */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="flex items-center gap-2 text-[#14213D] mb-3 text-xs font-bold uppercase tracking-widest bg-[#14213D]/5 px-3 py-1 rounded-full w-fit">
            <IconBook className="w-3.5 h-3.5 text-[#14213D]" /> Published Work
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#14213D] mb-6 leading-snug">
            Superheroes In Training: So, What Had HAPPENED Was...
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {book2Links.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <a 
                  key={idx} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-[#14213D]/5 border border-gray-100 hover:border-[#14213D]/20 transition-all text-xs sm:text-sm text-gray-700 hover:text-[#14213D] group shadow-sm"
                >
                  <span className="flex items-center gap-2.5 font-medium truncate">
                    <IconComponent className="w-4 h-4 text-[#14213D] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{item.name}</span>
                  </span>
                  <IconExternalLink className="w-4 h-4 text-gray-400 shrink-0 group-hover:text-[#14213D] transition-colors ml-2" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Distribution
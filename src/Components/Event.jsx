import React from 'react'
import calenderbg from '../assets/CalenderBg.png'
import { IconMapPin, IconCalendar, IconClock, IconSparkles } from '@tabler/icons-react'

function Event() {
    // Weekdays configuration for September 2026 calendar view
    const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    
    // September 2026 days array (September starts on a Tuesday = index 2)
    const daysInMonth = [
        null, null, 1, 2, 3, 4, 5,
        6, 7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
            {/* Outer Wrapper with Original Image Kept Intact */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                
                {/* Real Image Element to prevent cutting & maintain aspect ratio */}
                <img 
                    src={calenderbg} 
                    alt="Event Background" 
                    className="w-full h-auto object-cover min-h-[380px] sm:min-h-[420px] max-h-[500px] block"
                />

                {/* Lighter Dark Overlay for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>

                {/* Content Layer (Text + Calendar Overlay) */}
                <div className="absolute inset-0 p-6 sm:p-10 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
                    
                    {/* Left Content Section */}
                    <div className="text-left max-w-xl flex flex-col gap-3">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span className="bg-amber-500/25 text-amber-300 border border-amber-500/40 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                <IconSparkles className="w-3.5 h-3.5" />
                                UntitledTown Book & Author Festival
                            </span>
                            <span className="text-[11px] font-semibold tracking-wider text-gray-100 flex items-center gap-1.5 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                                <IconClock className="w-3.5 h-3.5 text-amber-300" />
                                SEP 25 - 27, 2026
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-serif font-normal tracking-tight text-white m-0 leading-snug drop-shadow-md">
                            Lions Mouth Author Talk
                        </h3>

                        <p className="text-xs sm:text-sm font-medium text-amber-200 tracking-wide flex items-center gap-1.5 drop-shadow">
                            <IconMapPin className="w-4 h-4 text-amber-400 shrink-0" />
                            Lions Mouth Bookstore, 211 N Washington St, Green Bay, 54301
                        </p>

                        <p className="text-xs sm:text-sm text-gray-100 leading-relaxed font-normal bg-black/40 p-3.5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
                            Friday Sept 25 - Sun Sept 27, 2026. Join us at Lions Mouth Bookstore for an exclusive author talk, readings, and community book signing event as part of the UntitledTown festival.
                        </p>
                    </div>
                    
                    {/* Right Calendar Widget Section */}
                    <div className="shrink-0 bg-white text-[#14213D] p-4 w-full sm:w-[260px] shadow-2xl rounded-xl border border-white/20">
                        <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-[#14213D]/10">
                            <span className="text-xs font-bold tracking-wider uppercase text-[#14213D] flex items-center gap-1.5">
                                <IconCalendar className="w-4 h-4 text-[#14213D]/70" />
                                September 2026
                            </span>
                        </div>
                        
                        {/* Weekdays Header */}
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                            {weekDays.map((day, idx) => (
                                <span key={idx} className="text-[10px] font-bold text-[#14213D]/50">{day}</span>
                            ))}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                            {daysInMonth.map((date, idx) => {
                                // Highlighting festival dates: 25, 26, 27
                                const isFestivalDate = date >= 25 && date <= 27;
                                const isMainDate = date === 25;
                                return (
                                    <div 
                                        key={idx} 
                                        className={`h-7 text-xs flex items-center justify-center relative font-semibold rounded ${
                                            isMainDate 
                                                ? 'bg-[#14213D] text-white font-bold shadow-md scale-105' 
                                                : isFestivalDate
                                                ? 'bg-[#14213D]/20 text-[#14213D] font-bold'
                                                : date 
                                                ? 'text-[#14213D]/80 hover:bg-[#14213D]/5' 
                                                : 'text-transparent'
                                        }`}
                                    >
                                        {date}
                                        {isMainDate && (
                                            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-900 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#14213D]/10 flex items-center justify-between text-[11px] text-[#14213D]/70 font-medium">
                            <span>Festival Dates</span>
                            <span className="text-emerald-600 font-bold flex items-center gap-1">✓ Sep 25-27</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Event;
import React from 'react';
import { Link } from 'react-router-dom';
import bookletImage from '../assets/Message From Mom_ On Loneliness.png';

/* ---------- Small inline icons (stroke = currentColor) ---------- */
const Icon = ({ children, className = 'w-5 h-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);
const PhoneIcon = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Icon>;
const MailIcon = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m3 7 9 6 9-6" /></Icon>;
const GlobeIcon = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></Icon>;
const ShieldIcon = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>;
const HeartIcon = (p) => <Icon {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></Icon>;
const ChatIcon = (p) => <Icon {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>;
const HomeIcon = (p) => <Icon {...p}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></Icon>;
const ArrowIcon = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;

const detailIcon = { phone: PhoneIcon, email: MailIcon, web: GlobeIcon };

// NOTE: All contacts below are placeholders. Replace with real names, numbers and links before going live.
const primaryEmergency = {
    name: 'Emergency Services',
    desc: 'Police, fire and medical emergencies. If you or someone near you is in immediate danger, call right away.',
    phone: '000-000-0000'
};

const emergencyContacts = [
    { name: 'Crisis Support Line', desc: 'Free, confidential support 24 hours a day', phone: '000-000-0000', icon: ChatIcon, hours: '24/7' },
    { name: 'Loneliness Support Line', desc: 'Someone to talk to when you feel alone', phone: '000-000-0000', icon: HeartIcon, hours: '24/7' },
    { name: 'Family & Domestic Help', desc: 'Safe, private help for families in need', phone: '000-000-0000', icon: HomeIcon, hours: 'Daily' }
];

const resourceGroups = [
    {
        title: 'Messages From Mom',
        desc: 'Heartfelt notes, wisdom, and guidance curated for everyday life and personal growth.',
        contacts: [
            { name: 'Parenting Helpline', type: 'phone', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Family Counseling Center', type: 'email', detail: 'info@example.com', href: 'mailto:info@example.com' },
            { name: 'Mothers Support Network', type: 'web', detail: 'www.example.com', href: '#' }
        ]
    },
    {
        title: 'Tools for your Toolbox',
        desc: 'Practical guides, templates, and resources designed to help you build and manage your journey.',
        contacts: [
            { name: 'Community Resource Center', type: 'phone', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Youth Mentorship Program', type: 'email', detail: 'mentor@example.com', href: 'mailto:mentor@example.com' },
            { name: 'Wellness & Mental Health', type: 'web', detail: 'www.example.com', href: '#' }
        ]
    },
    {
        title: 'Community & Connection',
        desc: 'Places and people that help rebuild connection and community.',
        contacts: [
            { name: 'Local Community Center', type: 'phone', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Senior Support Services', type: 'email', detail: 'seniors@example.com', href: 'mailto:seniors@example.com' },
            { name: 'Volunteer Network', type: 'web', detail: 'www.example.com', href: '#' }
        ]
    }
];

const telHref = (phone) => `tel:${phone.replace(/\D/g, '')}`;

function ResourcesPage() {
    return (
        <div className="w-full bg-white font-sans">

            {/* ---------- Hero ---------- */}
            <section className="relative w-full bg-[#14213D] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden">
                {/* Decorative rings */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/10"></div>
                <div className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full border border-white/10"></div>
                <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full border border-white/5"></div>

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-7">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
                            RESOURCES · SUPPORT · CONNECTION
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight leading-[1.1] mb-6">
                            You don't have to <br className="hidden sm:block" />
                            <span className="italic">carry it alone.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-serif">
                            Helpful contacts, guides and support, gathered in one place for the matriarchs, the families and everyone in between.
                        </p>
                    </div>

                    {/* Quick-jump card */}
                    <div className="lg:col-span-5">
                        <div className="bg-white/5 border border-white/15 p-6 sm:p-8 backdrop-blur-sm">
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4 block">
                                ON THIS PAGE
                            </span>
                            <ul className="flex flex-col divide-y divide-white/10">
                                {[
                                    { label: 'Emergency Contacts', href: '#emergency', num: '01' },
                                    { label: 'Helpful Contacts', href: '#helpful', num: '02' },
                                    { label: 'A Message From Mom', href: '#message', num: '03' }
                                ].map((item) => (
                                    <li key={item.href}>
                                        <a href={item.href} className="group flex items-center gap-4 py-3.5 text-white no-underline">
                                            <span className="text-xs font-serif italic text-white/50">{item.num}</span>
                                            <span className="flex-1 text-sm sm:text-base font-serif">{item.label}</span>
                                            <ArrowIcon className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-transform duration-300" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Safety strip ---------- */}
            <div className="w-full bg-red-700 text-white px-6 md:px-12 py-3.5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
                    </span>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide">
                        In immediate danger? Call{' '}
                        <a href={telHref(primaryEmergency.phone)} className="underline underline-offset-4 hover:text-white/80">
                            {primaryEmergency.phone}
                        </a>{' '}
                        now.
                    </p>
                </div>
            </div>

            {/* ---------- Emergency Contacts ---------- */}
            <section id="emergency" className="w-full py-16 md:py-24 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                        <div>
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-red-700 mb-3 block">
                                01 · IN AN EMERGENCY
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                                Emergency Contacts
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#14213D]/70 font-serif italic max-w-sm md:text-right">
                            Save these numbers. One call can change everything.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Featured emergency card */}
                        <div className="lg:col-span-5 relative bg-[#14213D] text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[320px]">
                            <ShieldIcon className="pointer-events-none absolute -right-8 -bottom-8 w-56 h-56 text-white/5" />
                            <div className="relative">
                                <div className="w-12 h-12 flex items-center justify-center bg-red-700 mb-6">
                                    <ShieldIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-serif mb-3">{primaryEmergency.name}</h3>
                                <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-sm">{primaryEmergency.desc}</p>
                            </div>
                            <div className="relative mt-8">
                                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">CALL</span>
                                <a href={telHref(primaryEmergency.phone)} className="block text-4xl sm:text-5xl font-serif tracking-tight text-white no-underline hover:text-white/80">
                                    {primaryEmergency.phone}
                                </a>
                            </div>
                        </div>

                        {/* Other emergency lines */}
                        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                            {emergencyContacts.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="group flex flex-col lg:flex-row lg:items-center gap-5 bg-[#f9f9f9] border border-[#14213D]/10 border-l-4 border-l-red-700 p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-[#14213D]/15 bg-white text-[#14213D] group-hover:bg-[#14213D] group-hover:text-white transition-colors duration-300">
                                            <ItemIcon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="text-lg font-serif text-[#14213D]">{item.name}</h3>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-red-700 border border-red-700/30 px-1.5 py-0.5">
                                                    {item.hours}
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#14213D]/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                        <a
                                            href={telHref(item.phone)}
                                            className="inline-flex items-center justify-center gap-2 bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3 px-5 no-underline transition-all whitespace-nowrap"
                                        >
                                            <PhoneIcon className="w-3.5 h-3.5" />
                                            {item.phone}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Helpful Contacts ---------- */}
            <section id="helpful" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#f9f9f9] border-t border-[#14213D]/10 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            02 · GUIDES & SUPPORT
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                            Helpful Contacts
                        </h2>
                        <p className="text-sm sm:text-base text-[#14213D]/70 font-serif italic">
                            For the everyday moments, when you need a hand, a guide, or simply someone to talk to.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resourceGroups.map((group, i) => (
                            <div
                                key={group.title}
                                className="group relative flex flex-col bg-white border border-[#14213D]/10 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Top accent that grows on hover */}
                                <span className="absolute top-0 left-0 h-1 w-12 bg-[#14213D] group-hover:w-full transition-all duration-500"></span>

                                <span className="text-5xl font-serif italic text-[#14213D]/15 leading-none mb-4">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="text-xl sm:text-2xl font-serif text-[#14213D] mb-3">{group.title}</h3>
                                <p className="text-sm text-[#14213D]/70 leading-relaxed mb-6">{group.desc}</p>

                                <ul className="mt-auto flex flex-col gap-2">
                                    {group.contacts.map((contact) => {
                                        const DetailIcon = detailIcon[contact.type];
                                        return (
                                            <li key={contact.name}>
                                                <a
                                                    href={contact.href}
                                                    className="flex items-center gap-3 p-3 border border-[#14213D]/10 hover:border-[#14213D]/40 hover:bg-[#14213D]/[0.03] no-underline transition-colors"
                                                >
                                                    <span className="w-9 h-9 shrink-0 flex items-center justify-center bg-[#14213D]/5 text-[#14213D]">
                                                        <DetailIcon className="w-4 h-4" />
                                                    </span>
                                                    <span className="flex flex-col min-w-0">
                                                        <span className="text-sm text-[#14213D] font-medium">{contact.name}</span>
                                                        <span className="text-xs text-[#14213D]/60 font-serif italic truncate">{contact.detail}</span>
                                                    </span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Message From Mom band ---------- */}
            <section id="message" className="w-full py-16 md:py-24 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-4 flex justify-center">
                        <div className="relative bg-[#f9f9f9] border border-[#14213D]/10 p-8 w-full max-w-xs flex items-center justify-center">
                            <img
                                src={bookletImage}
                                alt="Message From Mom On Loneliness"
                                className="max-h-[300px] w-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-4 block">
                            03 · A MESSAGE FROM MOM
                        </span>
                        <span className="block text-7xl font-serif text-[#14213D]/15 leading-none -mb-6">&ldquo;</span>
                        {/* Placeholder line: replace with a real quote from the booklet when available */}
                        <blockquote className="text-2xl sm:text-4xl font-serif italic text-[#14213D] leading-snug mb-8">
                            Reaching out is not a weakness. It is the bravest thing you can do for the people who love you.
                        </blockquote>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/books/message-from-mom"
                                className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all"
                            >
                                READ THE BOOKLET
                            </Link>
                            <Link
                                to="/pages/contact"
                                className="inline-flex items-center justify-center border border-[#14213D]/30 text-[#14213D] text-xs font-bold uppercase tracking-wider py-3.5 px-8 no-underline transition-all bg-white"
                            >
                                SUGGEST A RESOURCE
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ResourcesPage;

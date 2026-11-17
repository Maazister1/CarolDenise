import React from 'react';
import { Link } from 'react-router-dom';
import bookletImage from '../assets/Message From Mom_ A Loneliness Book New Cover Mockup.png';

/* ---------- Small inline icons (stroke = currentColor) ---------- */
const Icon = ({ children, className = 'w-5 h-5' }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);
const PhoneIcon = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Icon>;
const ShieldIcon = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>;
const HeartIcon = (p) => <Icon {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></Icon>;
const ChatIcon = (p) => <Icon {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Icon>;
const HomeIcon = (p) => <Icon {...p}><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></Icon>;
const StarIcon = (p) => <Icon {...p}><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" /></Icon>;
const CheckIcon = (p) => <Icon {...p}><path d="M20 6 9 17l-5-5" /></Icon>;
const ArrowIcon = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;

/* ---------- Content ---------- */
const primaryEmergency = {
    name: 'Medical Emergency',
    desc: 'Police, fire and medical emergencies. If you or someone near you is in immediate danger, call right away.',
    phone: '911'
};

const crisisLines = [
    { name: 'Suicide and Crisis Line', desc: 'Call or text, any time of day or night.', phone: '988', tel: '988', icon: ChatIcon },
    { name: 'Veterans Crisis Line', desc: 'Dial 988 then press 1, or text 838255.', phone: '988 · Press 1', tel: '988', icon: StarIcon },
    { name: 'Domestic Abuse Helpline', desc: 'Safe, confidential help for anyone experiencing abuse.', phone: '1-800-799-SAFE (7233)', tel: '18007997233', icon: HomeIcon }
];

const helplines = [
    { name: 'Anti-Human & Sex Trafficking Hotline', phone: '1-888-373-7888', tel: '18883737888' },
    { name: 'Disaster Distress Helpline', phone: '1-800-985-5990', tel: '18009855990' },
    { name: 'National Alliance on Mental Illness (NAMI)', phone: '1-800-950-6264', tel: '18009506264', note: 'National Information Helpline, or text “NAMI” to 741741' },
    { name: 'National Maternal Mental Health Hotline', phone: '1-833-TLC-MAMA', tel: '18338526262', note: '1-833-852-6262' },
    { name: 'Poison Help Hotline', phone: '1-800-222-1222', tel: '18002221222' },
    { name: 'SAMHSA National Helpline', phone: '1-800-662-HELP', tel: '18006624357', note: 'Substance Abuse and Mental Health Services Administration (1-800-662-4357)' },
    { name: 'Centers for Disease Control and Prevention (CDC)', phone: '1-800-232-4636', tel: '18002324636' },
    { name: 'World Health Organization (WHO)', phone: '1-202-974-3000', tel: '12029743000', note: 'Americas Regional Office' }
];

const n11Numbers = [
    { num: '211', title: 'Social Emergency', desc: 'When you need help with food, utilities, substance use, housing, mental health, a safe haven from domestic violence, or other related services. Trained professionals connect you with local agencies who can help.' },
    { num: '311', title: 'Non-emergency Services', desc: 'Non-emergency law enforcement, noise, abandoned vehicles, large debris, garbage bin replacement, dangerous animal concerns, damaged traffic signs, graffiti, leaking hydrant or sewer.' },
    { num: '411', title: 'Directory Assistance', desc: 'When you need assistance finding contact information.' },
    { num: '511', title: 'Travel Information', desc: 'Nationwide service regarding current travel conditions affecting your time, mode, and route of transportation.' },
    { num: '611', title: 'Telephone Service Problems', desc: 'Reporting problems with your telephone service.' },
    { num: '711', title: 'Telecommunications Relay Service', desc: 'Allows people with hearing or speech disabilities to make phone calls.' },
    { num: '811', title: 'Call Before You Dig', desc: 'Service will determine the utilities below ground prior to digging.' },
    { num: '911', title: 'Medical Emergency', desc: 'Police, fire and medical emergencies.' }
];

const prepareList = [
    <>If you haven’t already done so, make a plan and build an emergency preparedness kit for the types of disasters that could affect you in your area. Build a kit for your home and one for your car. Go to{' '}
        <a href="https://www.ready.gov/plan" target="_blank" rel="noopener noreferrer" className="text-[#14213D] font-semibold underline underline-offset-4">Ready.gov/plan</a>{' '}
        to review likely scenarios for your area. This step is not about being paranoid or being afraid of a zombie apocalypse. It’s about having a plan and being prepared for real-life crisis scenarios.</>,
    <>I recommend having a practical means to put out a small house and/or car fire, such as fire suppressant sprays and/or fire blankets.</>,
    <>I recommend having a seat belt cutter and windshield breaker on your keychain and in every vehicle.</>
];

const notes = [
    { title: 'Do your homework', text: 'Find the resources that are helpful to you in your life and in your community. Plug important numbers into your phone. Be prepared.' },
    { title: 'It may not be you', text: 'Remember, it may not be you who ends up in a potential crisis scenario. Your plan, quick thinking, and even your emergency kit could save the life of someone else: a neighbor, a friend, a loved one or even your beloved fur-baby.' },
    { title: 'Stay Informed and Educated', text: 'Beyond having contact numbers, staying informed is vital. Pay attention to news stories and public announcements that provide useful numbers or resources. (Note: Don’t overwhelm yourself with the News and their desire to scare you. The News can be a good source for headlines. It is up to you to decide which topics warrant further investigation and action on your part. And it is up to you to know when you’ve had enough of the News. When necessary, turn it off.)' }
];

function ResourcesPage() {
    return (
        <div className="w-full bg-white font-sans">

            {/* ---------- Safety strip ---------- */}
            <div className="w-full bg-red-700 text-white px-6 md:px-12 py-3.5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
                    </span>
                    <p className="text-xs sm:text-sm font-semibold tracking-wide">
                        In immediate danger? Call{' '}
                        <a href="tel:911" className="underline underline-offset-4 hover:text-white/80">911</a>
                        . In crisis? Call or text{' '}
                        <a href="tel:988" className="underline underline-offset-4 hover:text-white/80">988</a>.
                    </p>
                </div>
            </div>

            {/* ---------- Hero ---------- */}
            <section className="relative w-full bg-[#14213D] text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden">
                {/* Decorative rings */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full border border-white/10"></div>
                <div className="pointer-events-none absolute -top-10 -right-10 w-52 h-52 rounded-full border border-white/10"></div>
                <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full border border-white/5"></div>

                <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                    <div className="lg:col-span-7">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/70 mb-4 block">
                            TOOLS FOR YOUR TOOLBOX
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-serif font-normal tracking-tight leading-[1.1] mb-6">
                            Equip yourself with <br className="hidden sm:block" />
                            <span className="italic">tools and resources.</span>
                        </h1>
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-serif">
                            Incorporating tools and resources into daily life can provide quick access to support, especially when time is of the essence.
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
                                    { label: 'Emergency & Crisis Lines', href: '#emergency', num: '01' },
                                    { label: 'N-1-1 Numbers', href: '#n11', num: '02' },
                                    { label: 'Be Prepared', href: '#prepare', num: '03' },
                                    { label: 'A Message From Mom', href: '#message', num: '04' }
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

            {/* ---------- Emergency & Crisis Lines ---------- */}
            <section id="emergency" className="w-full py-16 md:py-24 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                        <div>
                            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-red-700 mb-3 block">
                                01 · IN AN EMERGENCY
                            </span>
                            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight">
                                Emergency & Crisis Lines
                            </h2>
                        </div>
                        <p className="text-sm sm:text-base text-[#14213D]/70 font-serif italic max-w-sm md:text-right">
                            Plug important numbers into your phone. Be prepared.
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
                                <a href="tel:911" className="block text-6xl sm:text-7xl font-serif tracking-tight text-white no-underline hover:text-white/80">
                                    {primaryEmergency.phone}
                                </a>
                            </div>
                        </div>

                        {/* Crisis lines */}
                        <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                            {crisisLines.map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div
                                        key={item.name}
                                        className="group flex flex-col md:flex-row md:items-center gap-5 bg-[#f9f9f9] border border-[#14213D]/10 border-l-4 border-l-red-700 p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 shrink-0 flex items-center justify-center border border-[#14213D]/15 bg-white text-[#14213D] group-hover:bg-[#14213D] group-hover:text-white transition-colors duration-300">
                                            <ItemIcon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                                <h3 className="text-lg font-serif text-[#14213D]">{item.name}</h3>
                                                <span className="text-[9px] font-bold uppercase tracking-widest text-red-700 border border-red-700/30 px-1.5 py-0.5">
                                                    24/7
                                                </span>
                                            </div>
                                            <p className="text-sm text-[#14213D]/70 leading-relaxed">{item.desc}</p>
                                        </div>
                                        <a
                                            href={`tel:${item.tel}`}
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

                    {/* More helplines */}
                    <div className="mt-16">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#14213D] mb-6">More National Helplines</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {helplines.map((item) => (
                                <a
                                    key={item.name}
                                    href={`tel:${item.tel}`}
                                    className="group flex flex-col justify-between gap-4 bg-white border border-[#14213D]/10 p-5 no-underline hover:border-[#14213D]/40 hover:shadow-lg transition-all duration-300"
                                >
                                    <div>
                                        <h4 className="text-sm sm:text-base font-serif text-[#14213D] leading-snug mb-1">{item.name}</h4>
                                        {item.note && <p className="text-xs text-[#14213D]/60 leading-relaxed">{item.note}</p>}
                                    </div>
                                    <span className="flex items-center gap-2 text-sm font-bold tracking-wide text-[#14213D]">
                                        <span className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#14213D]/5 group-hover:bg-[#14213D] group-hover:text-white transition-colors duration-300">
                                            <PhoneIcon className="w-3.5 h-3.5" />
                                        </span>
                                        {item.phone}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- N-1-1 Numbers ---------- */}
            <section id="n11" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#f9f9f9] border-t border-[#14213D]/10 scroll-mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            02 · KNOW YOUR NUMBERS
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                            N-1-1 Numbers
                        </h2>
                        <p className="text-sm sm:text-base text-[#14213D]/70 font-serif italic">
                            N-1-1 numbers are set aside by the Federal Communications Commission (FCC) and are operated by the service provider.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {n11Numbers.map((item) => (
                            <a
                                key={item.num}
                                href={`tel:${item.num}`}
                                className={`group relative flex flex-col p-7 border no-underline shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${item.num === '911' ? 'bg-[#14213D] border-[#14213D] text-white' : 'bg-white border-[#14213D]/10 text-[#14213D]'}`}
                            >
                                <span className={`absolute top-0 left-0 h-1 w-12 group-hover:w-full transition-all duration-500 ${item.num === '911' ? 'bg-red-700' : 'bg-[#14213D]'}`}></span>
                                <span className="text-5xl sm:text-6xl font-serif tracking-tight leading-none mb-4">{item.num}</span>
                                <h3 className="text-lg font-serif mb-2">{item.title}</h3>
                                <p className={`text-sm leading-relaxed ${item.num === '911' ? 'text-white/75' : 'text-[#14213D]/70'}`}>{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Be Prepared ---------- */}
            <section id="prepare" className="w-full py-16 md:py-24 px-6 md:px-12 scroll-mt-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            03 · BE PREPARED
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-6">
                            Have a plan.
                        </h2>
                        <ul className="flex flex-col gap-5">
                            {prepareList.map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="w-7 h-7 shrink-0 mt-0.5 flex items-center justify-center bg-[#14213D] text-white">
                                        <CheckIcon className="w-4 h-4" />
                                    </span>
                                    <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-6">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 block lg:mt-2">
                            NOTE
                        </span>
                        {notes.map((note, i) => (
                            <div key={note.title} className="flex gap-5 border-b border-[#14213D]/10 pb-6 last:border-b-0">
                                <span className="text-3xl font-serif italic text-[#14213D]/20 leading-none">{String(i + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-serif text-[#14213D] mb-2">{note.title}</h3>
                                    <p className="text-sm sm:text-base text-[#14213D]/75 leading-relaxed">{note.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Message From Mom ---------- */}
            <section id="message" className="relative w-full py-16 md:py-24 px-6 md:px-12 bg-[#14213D] text-white overflow-hidden scroll-mt-20">
                <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-white/10"></div>
                <HeartIcon className="pointer-events-none absolute top-10 -left-10 w-64 h-64 text-white/[0.04]" />

                <div className="relative max-w-4xl mx-auto text-center">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-6 block">
                        04 · A MESSAGE FROM MOM
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-serif italic leading-tight mb-8">
                        Remember that YOU matter! <br className="hidden sm:block" />And in the end, love wins!
                    </h2>
                    <div className="flex flex-col gap-5 text-sm sm:text-lg text-white/80 leading-relaxed font-serif text-left sm:text-center">
                        <p>
                            In conclusion, integrating these tools into your toolbox and into your daily life—being inquisitive, empathetic, prepared, and informed—can help you build a strong sense of social awareness, resilience, and support, both for yourself and the broader community.
                        </p>
                        <p>
                            There will be times when you DO NOT KNOW what you need to know in order to move forward. That’s okay. You CAN learn what you need to learn. You can acquire the tools and resources that you need to build a good life. We’ve got this! YOU’VE GOT THIS! YOU can do this!
                        </p>
                        <p>
                            When nothing seems to make sense… and you don’t know what you don’t know… go back to what you DO know: You are wanted! You are needed! And YOU, young person, are of great value! You are of unique and unrepeatable value. YOU are greatly loved by me and by many of those around you!
                        </p>
                        <p>
                            The best is yet to come. Why? Because the best is ALWAYS yet to come! And in the end, LOVE WINS!
                        </p>
                    </div>

                    <div className="mt-12 mx-auto max-w-2xl border-t border-white/15 pt-10">
                        <span className="block text-6xl font-serif text-white/20 leading-none -mb-4">&ldquo;</span>
                        <blockquote className="text-xl sm:text-3xl font-serif italic leading-snug">
                            LOVE WINS! That is the truth. If you cannot bring yourself to believe that yet, you can borrow my faith in love. Love is the MOST valuable tool in your toolbox. Keep that one close.
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ---------- Booklet CTA ---------- */}
            <section className="w-full py-16 md:py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="bg-[#f9f9f9] border border-[#14213D]/10 p-8 w-full max-w-md flex items-center justify-center">
                            <img
                                src={bookletImage}
                                alt="Message From Mom On Loneliness"
                                className="max-h-[300px] w-auto object-contain mix-blend-multiply"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-7">
                        <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                            MESSAGE FROM MOM
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                            Message FrOm Mom On Loneliness
                        </h2>
                        <p className="text-sm sm:text-base text-[#14213D]/75 leading-relaxed mb-8">
                            A short, heartfelt booklet for anyone carrying the weight of loneliness, and for everyone ready to help lift it.
                        </p>
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

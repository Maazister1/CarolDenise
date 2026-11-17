import React from 'react';

// NOTE: All contacts below are placeholders. Replace with real names, numbers and links before going live.
const emergencyContacts = [
    { name: 'Emergency Services', desc: 'Police, fire and medical emergencies', phone: '000-000-0000' },
    { name: 'Crisis Support Line', desc: 'Free, confidential support 24 hours a day', phone: '000-000-0000' },
    { name: 'Loneliness Support Line', desc: 'Someone to talk to when you feel alone', phone: '000-000-0000' },
    { name: 'Family & Domestic Help', desc: 'Safe, private help for families in need', phone: '000-000-0000' }
];

const resourceGroups = [
    {
        title: 'Messages From Mom',
        desc: 'Heartfelt notes, wisdom, and guidance curated for everyday life and personal growth.',
        contacts: [
            { name: 'Parenting Helpline', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Family Counseling Center', detail: 'info@example.com', href: 'mailto:info@example.com' },
            { name: 'Mothers Support Network', detail: 'www.example.com', href: '#' }
        ]
    },
    {
        title: 'Tools for your Toolbox',
        desc: 'Practical guides, templates, and resources designed to help you build and manage your journey.',
        contacts: [
            { name: 'Community Resource Center', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Youth Mentorship Program', detail: 'mentor@example.com', href: 'mailto:mentor@example.com' },
            { name: 'Wellness & Mental Health', detail: 'www.example.com', href: '#' }
        ]
    },
    {
        title: 'Community & Connection',
        desc: 'Places and people that help rebuild connection and community.',
        contacts: [
            { name: 'Local Community Center', detail: '000-000-0000', href: 'tel:0000000000' },
            { name: 'Senior Support Services', detail: 'seniors@example.com', href: 'mailto:seniors@example.com' },
            { name: 'Volunteer Network', detail: 'www.example.com', href: '#' }
        ]
    }
];

function ResourcesPage() {
    return (
        <div className="w-full bg-white font-sans">

            {/* Header Section */}
            <section className="w-full py-16 md:py-24 px-6 md:px-12 border-b border-[#14213D]/10">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        USEFUL CONTENT
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#14213D] tracking-tight mb-4">
                        Resources
                    </h1>
                    <p className="text-sm sm:text-base text-[#14213D]/80 leading-relaxed font-serif italic">
                        Helpful contacts, guides and support, all in one place.
                    </p>
                </div>
            </section>

            {/* Emergency Contacts */}
            <section className="w-full py-16 md:py-20 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-red-700 mb-3 block">
                        IN AN EMERGENCY
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-10">
                        Emergency Contacts
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {emergencyContacts.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col justify-between bg-[#14213D]/[0.03] border border-[#14213D]/10 border-t-4 border-t-red-700 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div>
                                    <h3 className="text-lg font-serif text-[#14213D] mb-2">{item.name}</h3>
                                    <p className="text-sm text-[#14213D]/70 leading-relaxed mb-6">{item.desc}</p>
                                </div>
                                <a
                                    href={`tel:${item.phone.replace(/\D/g, '')}`}
                                    className="inline-flex items-center justify-center bg-[#14213D] hover:bg-[#1f3563] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 no-underline transition-all"
                                >
                                    CALL {item.phone}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Groups */}
            <section className="w-full py-16 md:py-20 px-6 md:px-12 bg-[#f9f9f9] border-t border-[#14213D]/10">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#14213D]/70 mb-3 block">
                        GUIDES & SUPPORT
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-serif font-normal text-[#14213D] tracking-tight mb-10">
                        Helpful Contacts
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {resourceGroups.map((group) => (
                            <div
                                key={group.title}
                                className="flex flex-col bg-white border border-[#14213D]/10 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
                            >
                                <h3 className="text-xl sm:text-2xl font-serif text-[#14213D] mb-3">{group.title}</h3>
                                <p className="text-sm text-[#14213D]/70 leading-relaxed mb-6">{group.desc}</p>

                                <ul className="flex flex-col divide-y divide-[#14213D]/10 border-t border-[#14213D]/10">
                                    {group.contacts.map((contact) => (
                                        <li key={contact.name} className="py-3.5 flex items-center justify-between gap-4">
                                            <span className="text-sm text-[#14213D] font-medium">{contact.name}</span>
                                            <a
                                                href={contact.href}
                                                className="text-xs text-[#14213D]/70 hover:text-[#14213D] font-serif italic no-underline whitespace-nowrap"
                                            >
                                                {contact.detail}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ResourcesPage;

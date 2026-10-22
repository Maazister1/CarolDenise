import React, { useEffect, useRef, useState } from 'react';

// Animates its children in when scrolled into view.
// Once visible, headings, images and grid cards inside also animate in one by one (see index.css).
function Reveal({ children, from = 'up' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const hidden = {
        left: '-translate-x-16',
        right: 'translate-x-16',
        up: 'translate-y-12',
        down: '-translate-y-12',
        zoom: 'scale-90',
        blur: 'blur-md scale-105'
    }[from];

    return (
        <div
            ref={ref}
            className={`reveal transition-all duration-1000 ease-out motion-reduce:transition-none ${
                // translate-none / scale-none (not 0 / 100) so fixed-position modals inside still cover the viewport
                visible ? 'is-visible opacity-100 translate-none scale-none blur-none' : `opacity-0 ${hidden}`
            }`}
        >
            {children}
        </div>
    );
}

export default Reveal;

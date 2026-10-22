import { useEffect } from 'react';

// Long blocks are split into their inner children so each part animates as it scrolls in
function splitTallBlock(el, depth = 0) {
    if (depth > 2 || el.offsetHeight <= window.innerHeight * 1.2) return [el];

    let inner = el;
    while (inner.children.length === 1) inner = inner.children[0];
    if (inner.children.length < 2) return [el];

    return [...inner.children].flatMap((child) => splitTallBlock(child, depth + 1));
}

// Adds scroll reveal animations to every section of the page inside `containerRef`.
// Pages that already use <Reveal> (home page) are left alone.
function useScrollReveal(containerRef, key) {
    useEffect(() => {
        const container = containerRef.current;
        // .reveal without .scroll-reveal means a <Reveal> wrapper; this hook adds both classes itself,
        // so it must not mistake its own blocks for one when the effect re-runs
        if (!container || container.querySelector('.reveal:not(.scroll-reveal)')) return;

        const sections = [...container.querySelectorAll('section')];
        const roots = sections.length ? sections : [...container.children];

        const blocks = roots
            .filter((el) => !el.parentElement.closest('.scroll-reveal'))
            .flatMap((el) => splitTallBlock(el));

        const directions = ['from-left', 'from-right'];
        blocks.forEach((el, i) => {
            el.classList.add('reveal', 'scroll-reveal', i === 0 ? 'from-up' : directions[i % 2]);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        blocks.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [containerRef, key]);
}

export default useScrollReveal;

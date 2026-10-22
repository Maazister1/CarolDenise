import React, { useEffect, useState } from 'react';

// Thin bar at the top of the page that fills as the user scrolls
function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(max > 0 ? window.scrollY / max : 0);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-[100] h-[3px] w-full origin-left bg-[#14213D] transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
        />
    );
}

export default ScrollProgress;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LetterDisplay } from './LetterDisplay';

gsap.registerPlugin(ScrollTrigger);

const lines = [
    'The ',
    'bags ',
    'under my ',
    'eyes are ',
    'designer.'
];

function getRandomRotation() {
    // ±30°
    return Math.random() * 60 - 30;
}

function animateLettersOnScroll(ref) {
    const nodes = ref.current?.querySelectorAll('.letter-explosion') || [];
    nodes.forEach(letter => {
        const speed = parseFloat(letter.dataset.speed || '1');
        gsap.to(letter, {
            // y-offset = sensible fixed drift to prevent "breaking" layout
            y: (1 - speed) * 400,
            rotation: getRandomRotation(),
            ease: 'power2.out',
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: '1000px', // Animation finishes in first 1000px of scroll
                scrub: 1,      // Smoother scrub
                invalidateOnRefresh: true
            }
        });
    });
}

export function LetterCollision() {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        // Slight delay to ensure layout is ready
        const timer = setTimeout(() => {
            animateLettersOnScroll(ref);
        }, 100);

        const refreshHandler = () => ScrollTrigger.refresh();
        ScrollTrigger.addEventListener('refreshInit', refreshHandler);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.removeEventListener('refreshInit', refreshHandler);
            // Clean up GSAP instances
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    return (
        <div ref={ref} className="letter-explosion-container">
            <div className="explosion-main-text items-center justify-center">
                <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4">
                    <LetterDisplay word={lines[0]} />
                    <LetterDisplay word={lines[1]} />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4">
                    <LetterDisplay word={lines[2]} />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4">
                    <LetterDisplay word={lines[3]} />
                </div>
            </div>
            <div className="explosion-sub-text mt-4 md:mt-8 flex justify-center">
                <LetterDisplay word={lines[4]} />
            </div>
        </div>
    );
}

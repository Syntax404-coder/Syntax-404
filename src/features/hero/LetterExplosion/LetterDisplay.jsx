import React from 'react';

function getRandomSpeed() {
    // [0.8, 1.5) - lower = bigger drift
    return 0.8 + Math.random() * 0.7;
}

export function LetterDisplay({ word }) {
    return (
        <>
            {word.split('').map((char, i) => (
                <div
                    key={i}
                    className="letter-explosion font-black"
                    data-speed={getRandomSpeed()}
                    style={{
                        display: 'inline-block',
                        whiteSpace: 'pre',
                        fontSize: '8vw',
                        lineHeight: '0.9',
                        letterSpacing: '-0.04em'
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </div>
            ))}
        </>
    );
}

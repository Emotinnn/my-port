import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/assets/BG.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="container mx-auto relative z-10 py-8">
                <h1 className="text-4xl font-bold text-white">Phanuwawt Panya</h1>
                <p className="mt-2 text-white w-[500px]">
                 My name Phanuwat Panya you can call me Mark.
                 I Graduated with a degree in software engineering  at CAMT, Chiang Mai University.
                 who has a strong interest in software testing and business analysis. 
                </p>
            </div>
        </div>
    );
};

export default Banner;
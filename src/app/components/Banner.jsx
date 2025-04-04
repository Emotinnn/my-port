"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Banner = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);

    return (
        <div className="relative overflow-hidden bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/assets/BG.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-65"></div>
            <div className="container mx-auto relative z-10 py-8 mt-[600px]" data-aos="fade-right">
                <h1 className="text-6xl font-bold text-white text-shadow-lg/60">Phanuwawt Panya</h1>
                <p className="mt-4 text-white w-[500px] text-shadow-lg/40">
                 My name Phanuwat Panya you can call me Mark.
                 I Graduated with a degree in software engineering  at CAMT, Chiang Mai University.
                 who has a strong interest in software testing and business analysis. 
                </p>
            </div>
        </div>
    );
};

export default Banner;
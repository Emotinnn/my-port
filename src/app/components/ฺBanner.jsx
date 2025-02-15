import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="container mx-auto relative z-10 py-8">
                <h1 className="text-4xl font-bold text-white">Your Title Here</h1>
                <p className="mt-2 text-lg text-white">Your description goes here. This is a brief description of the banner content.</p>
            </div>
        </div>
    );
};

export default Banner;
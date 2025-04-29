import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center ">
                <div className="flex space-x-4">
                    <Link href="/" className="font-merriweather text-white hover:text-blue-400">Home</Link>
                    <Link href="/about" className="font-merriweather text-white hover:text-blue-400">Portfolio</Link>
                    <Link href="/services" className="font-merriweather text-white hover:text-blue-400">Services</Link>
                    <Link href="/contact" className="font-merriweather text-white hover:text-blue-400">Contact</Link>
                </div>
                {/* Phone Contact Section */}
                <div className="text-white flex items-center space-x-2 "> 
                    <img src="/assets/phone.png" alt="Phone" className="h-6 w-6" /> 
                    <a href="tel:+66931345179" className="hover:text-blue-400">093-134-5179</a>
                </div> 
            </div>
            
        </nav>
    );
};

export default NavBar;
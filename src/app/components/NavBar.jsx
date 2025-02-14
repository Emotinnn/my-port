import React from 'react';

const NavBar = () => {
    return (
        <nav className="bg-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-blue-400">Home</a>
                    <a href="#" className="text-white hover:text-blue-400">About</a>
                    <a href="#" className="text-white hover:text-blue-400">Services</a>
                    <a href="#" className="text-white hover:text-blue-400">Contact</a>
                </div>
                <div className="text-white">
                    <a href="tel:+1234567890" className="hover:text-blue-400">(+66) 93-134-5179</a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
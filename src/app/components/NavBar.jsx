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
                    <a href="tel:+66931345179" className="hover:text-blue-400 flex" >
                        <img src="/assets/phone.png" alt="Phone" className="hover:text-blue-400" height="24px" viewBox="0 -960 960 960" width="24px"/> 
                         093-134-5179
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
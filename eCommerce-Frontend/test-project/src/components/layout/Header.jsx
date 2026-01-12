import React from 'react';
import { User } from 'lucide-react';

const Header = () => {
    return (
        <header className="bg-white py-2 px-4 shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gov-blue rounded-full flex items-center justify-center text-white font-bold p-1 overflow-hidden">
                        {/* Placeholder for actual logo */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/en/3/3a/Bangladesh_Police_Logo.svg"
                            alt="Bangladesh Police"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-gov-blue text-2xl font-bold tracking-tight">Police <span className="text-nav-blue">Clearance</span></h1>
                    </div>
                </div>

                {/* Right Info */}
                <div className="flex items-center space-x-4 text-xs font-medium text-gray-600">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-gov-blue transition-colors">
                        <User size={14} className="text-red-500" />
                        <span>nobody</span>
                    </div>
                    <div className="w-px h-3 bg-gray-300"></div>
                    <button className="hover:text-gov-blue transition-colors">English</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from 'react';

const Navbar = () => {
    const navItems = [
        { label: 'Home', active: true },
        { label: 'Apply', active: false },
        { label: 'My Account', active: false },
        { label: 'Contact us', active: false },
    ];

    return (
        <nav className="bg-nav-blue text-white shadow-md">
            <div className="max-w-6xl mx-auto flex">
                {navItems.map((item, index) => (
                    <button
                        key={index}
                        className={`px-6 py-2.5 text-sm font-semibold transition-colors duration-200 border-r border-blue-700/50 last:border-r-0
              ${item.active ? 'bg-blue-600' : 'hover:bg-blue-700'}
            `}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

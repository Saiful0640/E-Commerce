import React from 'react';

const InfoCard = ({ title, items, children }) => {
    return (
        <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="bg-gov-blue text-white px-4 py-2 font-bold text-center text-sm uppercase tracking-wide">
                {title}
            </div>
            <div className="p-4">
                {items ? (
                    <ul className="space-y-3">
                        {items.map((item, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-b-0 pb-2 last:pb-0">
                                <a
                                    href={item.link || "#"}
                                    className="text-xs text-gray-700 hover:text-gov-blue hover:underline transition-colors block"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-xs text-gray-700 leading-relaxed font-bengali">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InfoCard;

import React from 'react';

const SectionHeader = ({ title }) => {
    return (
        <div className="bg-gov-blue text-white px-4 py-2.5 font-bold text-center text-lg md:text-xl rounded-t-sm shadow-md">
            {title}
        </div>
    );
};

export default SectionHeader;

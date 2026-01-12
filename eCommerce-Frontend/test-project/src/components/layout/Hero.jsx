import React from 'react';

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 h-40 relative overflow-hidden flex items-center shadow-inner">
            <div className="max-w-6xl mx-auto w-full px-4 flex justify-between items-center relative z-10">
                {/* Left Side - Graphics placeholder */}
                <div className="w-1/3">
                    <img
                        src="https://pcc.police.gov.bd/pcc/theme/images/pcc_banner_left.png"
                        alt="Certificate Preview"
                        className="h-32 object-contain drop-shadow-xl"
                        onError={(e) => { e.target.style.display = 'none' }} // Fallback if link breaks
                    />
                </div>

                {/* Center Text */}
                <div className="w-1/3 text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-md">
                        Online Police Clearance
                    </h2>
                    <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full mt-2">
                        <span className="text-white text-xl font-semibold">Certificate</span>
                    </div>
                </div>

                {/* Right Side - Graphics placeholder */}
                <div className="w-1/3 flex justify-end">
                    <img
                        src="https://pcc.police.gov.bd/pcc/theme/images/pcc_banner_right.png"
                        alt="Police Logo"
                        className="h-32 object-contain drop-shadow-xl"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>
            </div>

            {/* Background patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl -ml-24 -mb-24"></div>
        </div>
    );
};

export default Hero;

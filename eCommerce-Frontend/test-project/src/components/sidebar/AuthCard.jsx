import React from 'react';

const AuthCard = () => {
    return (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex flex-col items-center space-y-4">
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded shadow flex items-center justify-center space-x-2 transition-all group">
                <span>Sign in</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">➔</span>
            </button>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded shadow transition-all">
                Registration
            </button>
            <div className="text-[11px] text-red-600 text-center space-y-1">
                <p className="font-semibold leading-tight">To reset your password from your registered mobile,</p>
                <p className="leading-tight">
                    type <span className="font-bold">PCC PR &lt;registered mobile no&gt;</span> and send it to <span className="font-bold">26969</span>.
                </p>
                <p className="font-semibold leading-tight">You will receive a new password in the reply SMS.</p>
            </div>
        </div>
    );
};

export default AuthCard;

import React from 'react';
import { Star } from 'lucide-react';

const Marquee = () => {
    return (
        <div className="bg-gov-red text-white py-1.5 overflow-hidden flex items-center border-b border-red-800">
            <div className="whitespace-nowrap flex animate-marquee px-4">
                <span className="font-bold mr-4">Helpdesk :</span>
                <span className="font-medium mr-8">01320001824, 01320001825, Email: help.pcc@police.gov.bd</span>
                <Star size={14} className="fill-yellow-400 text-yellow-400 mt-1" />
            </div>

            {/* We can use a simple marquee simulation or standard CSS animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
        </div>
    );
};

export default Marquee;

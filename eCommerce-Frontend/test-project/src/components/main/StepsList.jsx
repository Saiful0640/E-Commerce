import React from 'react';

const StepsList = () => {
    const steps = [
        { id: "ধাপ - ১", text: "অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট ওয়েবসাইটে নিবন্ধন করে যে কেউ নিজের জন্য অথবা অন্যের পক্ষে পুলিশ ক্লিয়ারেন্স সার্টিফিকেটের এর জন্য আবেদন করতে পারবে। নিবন্ধন করার জন্য এখানে ক্লিক করুন।" },
        { id: "ধাপ - ২", text: "নিবন্ধিত ব্যবহারকারী অনলাইন পুলিশ ক্লিয়ারেন্স সার্টিফিকেট সাইটে লগ-ইন করার পর Apply মেনুতে ক্লিক করে আবেদনপত্রটি যখাযখভাবে পূরণ করুন।" },
        { id: "ধাপ - ৩", text: "আবেদন ফরমের প্রথম থাপে ব্যক্তিগত বিস্তারিত তথ্য, দ্বিতীয় ধাপে বর্তমান এবং স্থায়ী ঠিকানা পূরণ করুন। আপনার বর্তমান ঠিকানা যে জেলা বা মেট্রোপলিটন এলাকায় অবস্থিত সেই ঠিকানায় পুলিশ ভেরিফিকেশন সম্পন্ন হবে।" },
        { id: "ধাপ - ৪", text: "আবেদন ফরমের তৃতীয় থাপে প্রয়োজনীয় ডকুমেন্টসমূহের স্ক্যান কপি আপলোড করুন।" },
        { id: "ধাপ - ৫", text: "আবেদন ফরমের চতুর্থ থাপে আপনার এন্ট্রিকৃত সকল তথ্য দেখানো হবে। আবেদনে কোন ভুল থাকলে তা পূর্ববর্তী ধাপসমূহে ফেরত গিয়ে পরিবর্তন করা যাবে। তবে চতুর্থ থাপ পর আবেদনটি সাবমিট করা হয়ে গেলে আর কোন পরিবর্তন করার সুযোগ থাকবে না।" },
        { id: "ধাপ - ৬", text: "চালানের মাধ্যমে ফি পরিশোধের উপায় এবং পরবর্তী করণীয় সম্পর্কে প্রদত্ব নির্দেশনা অনুসরণ করুন।" }
    ];

    return (
        <div className="bg-white rounded-b shadow-sm border border-gray-200 border-t-0 p-6">
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex space-x-4 items-start">
                        <div className="flex-shrink-0 bg-gov-red text-white text-[10px] px-2 py-1 rounded-sm font-bold min-w-[60px] text-center mt-1 shadow-sm">
                            {step.id}
                        </div>
                        <p className="font-bengali text-sm text-gray-700 leading-relaxed">
                            {step.text}
                        </p>
                    </div>
                ))}

                <div className="flex justify-end pt-4">
                    <button className="bg-gov-blue hover:bg-nav-blue text-white px-6 py-2 rounded text-xs transition-colors shadow-sm">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StepsList;

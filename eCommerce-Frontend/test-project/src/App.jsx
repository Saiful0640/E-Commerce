import React from 'react';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Marquee from './components/layout/Marquee';
import AuthCard from './components/sidebar/AuthCard';
import InfoCard from './components/sidebar/InfoCard';
import SectionHeader from './components/main/SectionHeader';
import TermsList from './components/main/TermsList';
import DocumentList from './components/main/DocumentList';
import StepsList from './components/main/StepsList';

function App() {
  const importantLinks = [
    { label: 'Bangladesh Police', link: 'https://www.police.gov.bd/' },
    { label: 'BD Police Helpline', link: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Header />
      <Navbar />
      <Hero />
      <Marquee />

      <main className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Sidebar */}
        <aside className="lg:col-span-3 space-y-6">
          <AuthCard />

          <InfoCard title="Important Link" items={importantLinks} />

          <InfoCard title="Tips">
            <div className="text-justify leading-relaxed">
              আপনার আবেদনের সর্বশেষ অবস্থা জানতে PCC S (PCC S XXXXXXXXX) এর পর আপনার আবেদনের রেফারেন্স নম্বর লিখে যেকোন মোবাইল থেকে ক্ষুদে বার্তা পাঠান 26969 নম্বরে। ফিরতি এসএমএস এ আপনার আবেদনের সর্বশেষ স্ট্যাটাস পেয়ে যাবেন।
            </div>
          </InfoCard>

          <InfoCard title="Info">
            <div className="text-justify leading-relaxed">
              পুলিশ ক্লিয়ারেন্স ডেলিভারি নিতে প্রার্থীর পাসপোর্টের কপি অথবা আবেদনের কপি সাথে নিয়ে আসতে হবে। এছাড়া প্রার্থী বিদেশে থাকলে সংশ্লিষ্ট এমসি কর্তৃক সত্যায়িত/আটিস্টের অথর পিস কর্তৃক সত্যায়িত অটোর্ডাইজেশন লেটার আনতে হবে।
            </div>
          </InfoCard>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-8">

          <section>
            <SectionHeader title="পুলিশ ক্লিয়ারেন্স সার্টিফিকেট পাওয়ার জন্য প্রয়োজনীয় শর্তাবলী" />
            <TermsList />
          </section>

          <section>
            <SectionHeader title="প্রয়োজনীয় ডকুমেন্টসমূহ" />
            <DocumentList />
          </section>

          <section>
            <SectionHeader title="আবেদনের নিয়মাবলী" />
            <StepsList />
          </section>

          {/* Footer Logos in Main Content */}
          <div className="flex justify-center items-center space-x-8 py-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Bangladesh_Police_Logo.svg" alt="Police" className="h-12" />
            <img src="https://perkyrabbit.com/wp-content/uploads/2021/04/Perky-Rabbit-Logo-Final-02.png" alt="Developer" className="h-10" onError={(e) => { e.target.style.display = 'none' }} />
          </div>

        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-[11px] text-gray-400 text-center tracking-wide">
              Copyright © 2016-2024 All rights reserved by <span className="text-blue-500">Bangladesh Police</span>. Maintained by <span className="text-blue-500">Perky Rabbit Corporation Ltd.</span>
            </p>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-300">
              <span className="text-lg">▲</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

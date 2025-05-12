import React from 'react';
import ValuesSection from '../components/ValuesSection';
import Timeline from '../components/Timeline';
import Facts from '../components/Facts';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Om <span className="text-yellow-400">QSC</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Mer än bara en kedja – ett bolag med hjärta, ansvar och driv
            </h2>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto mt-50">
        <div className="container-custom ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/9.jpg')" }}
                ></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:-bottom-6 md:-right-6 md:w-36 md:h-36 rounded-2xl bg-yellow/20 -z-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 md:-top-6 md:-left-6 md:w-36 md:h-36 rounded-2xl bg-gold/20 -z-10"></div>
            </div>

            <div>
              <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
                Team
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 mt-4">
                Outstanding restaurang <span className="text-[#F0AE2C]">2024</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mt-4 mb-6">
              </p>
              <p className="text-gray-700 text-base sm:text-lg mt-4 mb-6">
              </p>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <Timeline />
      <Facts />
    </div>
  );
};

export default Page;
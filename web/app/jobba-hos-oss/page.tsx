"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, UserPlusIcon, CheckCircleIcon } from 'lucide-react';

import RestaurantsSection from "../components/RestaurantsSection"


const JobbHosOss = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 999;
    const duration = 2000; // 1 seconds
    const intervalTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, intervalTime);

    return () => clearInterval(counter);
  }, []);

  return (
    <div>
      {/* Jobba hos oss */}

    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Jobba hos <span className="text-yellow-400">oss</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            Bli en del av vårt team och väx med oss!
          </h2>
          <motion.div 
            className="mt-4 text-5xl font-bold text-[#F9D00F] relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {count}
            <span className="text-black text-lg font-extrabold ml-2">
              anställda
            </span>
          </motion.div>
        </div>
      </div>
      
            

    </section>

    {/* Därför ska du jobba hos oss */}
     <section className="max-w-7xl mx-auto  mt-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Därför ska du jobba hos oss
          </h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Vi erbjuder mer än bara ett jobb – vi erbjuder en karriär med möjligheter att växa och utvecklas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BriefcaseIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Karriärsutveckling</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Vi investerar i våra medarbetares tillväxt med utbildning och mentorskap för att hjälpa dig nå dina karriärmål.
            </p>
          </div>
          
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlusIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Inkluderande miljö</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Vi värdesätter mångfald och strävar efter att skapa en arbetsplats där alla känner sig välkomna och uppskattade.
            </p>
          </div>
          
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Förmåner & balans</h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Vi erbjuder konkurrenskraftiga förmåner och uppmuntrar en hälsosam balans mellan arbete och privatliv.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
              <a
                href="https://www.mcdonalds.com/se/sv-se/jobb.html"
                target="_blank"
            rel="noopener noreferrer"
                className="bg-[#F0AE2C] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:opacity-90 transition "
              >
                Jobba hos McDonald’s
              </a>
            </div>
      </div>
      
    </section>

       
    <section className="mt-50">
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center container-custom">
            <div>
              <img src="8.jpeg" alt="Ansökningsprocessen" className="w-full rounded-lg shadow-md" />
            </div>
            <div>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                 Cuatro hörnstenarna
                i vår verksamhet
                </h2>
                <p className="text-gray-700 text-base sm:text-lg">
                Vår verksamhet vilar på fyra grundläggande pelare som guidar oss i allt vi gör. Dessa hörnstenar är inte bara principer – de är vår kompass och vår kraftkälla för att skapa värde och utveckling.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-bold mb-3">Kvalitet som standard</h3>
                  <p className="text-gray-700 text-base sm:text-lg">Vi sätter alltid högsta möjliga måttstock och strävar efter att överträffa förväntningar.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-bold mb-3">Engagemang med hjärta</h3>
                  <p className="text-gray-700 text-base sm:text-lg">Varje medarbetare och partner bidrar med passion och engagemang, vilket gör skillnad på riktigt.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-bold mb-3">Innovation som drivkraft</h3>
                  <p className="text-gray-700 text-base sm:text-lg"> Vi omfamnar förändring och ser möjligheter där andra ser hinder.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-bold mb-3">Ansvar för framtiden</h3>
                  <p className="text-gray-700 text-base sm:text-lg">Vi tar vårt samhällsansvar på största allvar och arbetar för en hållbar utveckling.</p>
                </div>
              </div>
            </div>
          
        </div>
      </section>

      <div className="max-w-7xl mx-auto border-t border-black/10 mt-20">
          
        </div>
            <RestaurantsSection/>
            <div className="max-w-7xl mx-auto border-t border-black/10 mt-20"></div>

      {/* Q&A */}
      <section className='mt-20'>
      
      
      <div className=' bg-[#FBF7F7] container-custom '>
        
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Q&A
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
            VANLIGA FRÅGOR  
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2"></h3>
                  <p className="text-gray-700 text-base sm:text-lg"></p>
                </div>
              
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2"></h3>
                  <p className="text-gray-700 text-base sm:text-lg"></p>
                </div>
                
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2"></h3>
                  <p className="text-gray-700 text-base sm:text-lg"></p>
                </div>
               
              </div>
            </div>
          
        </div>
        </div>
        </section>
      
      </div>

    

    
    

    
  );
};

export default JobbHosOss;

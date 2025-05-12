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
          Är du vår nästa stjärna?
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
          Vi erbjuder mer än ett jobb – vi erbjuder en framtid att växa i.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BriefcaseIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Karriärsutveckling</h3>
            <p className="text-gray-700 text-base sm:text-lg">
            Vi satsar på din utveckling! Genom internutbildningar, mentorskap och tydliga karriärvägar hjälper vi dig att nå dina mål  oavsett om du är ny i yrkeslivet eller vill ta nästa steg.            </p>
          </div>
          
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlusIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Inkluderande miljö</h3>
            <p className="text-gray-700 text-base sm:text-lg">
            Mångfald är en styrka. Vi strävar efter att skapa en trygg och välkomnande arbetsplats där varje individ får vara sig själv och bli uppskattad för sin unika kompetens.            </p>
          </div>
          
          <div className="bg-[#FBF7F7] p-8 rounded-lg text-center hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-8 h-8 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Förmåner & balans</h3>
            <p className="text-gray-700 text-base sm:text-lg">
            Vi erbjuder konkurrenskraftiga förmåner och värnar om din livsbalans. För oss är det viktigt att du mår bra både på och utanför jobbet.            </p>
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
                <span className="text-[#F92727]">Grunden </span> i allt vi gör
                </h2>
                <p className="text-gray-700 text-base sm:text-lg">
                Vår verksamhet vilar på fyra tydliga principer som genomsyrar varje beslut, varje gästupplevelse och varje arbetsdag. De är vår kompass, vår kultur och vårt löfte.                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    1
                  </div>
            
                  <p className="text-gray-700 text-base sm:text-lg">Vi kompromissar aldrig med kvalitet. Från råvaror till bemötande och miljö – vi strävar alltid efter att överträffa förväntningar..</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    2
                  </div>
                  
                  <p className="text-gray-700 text-base sm:text-lg">Våra medarbetares engagemang är vår största styrka. Hos oss arbetar människor med hjärta, vilket märks i allt från service till samarbete.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    3
                  </div>
                
                  <p className="text-gray-700 text-base sm:text-lg"> Vi välkomnar förändring. Med öppna ögon och nyfikenhet ser vi möjligheter där andra ser hinder – och driver branschen framåt.</p>
                </div>
                
                <div>
                  <div className="w-16 h-16 bg-[#F92727] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    4
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg">Vi tar ansvar – för våra medarbetare, för miljön och för det samhälle vi verkar i. Hållbarhet är en självklar del av vår tillväxt.</p>
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
                  <h3 className="text-xl font-bold mb-2 text-[#f9d00f] ">Hur söker jag jobb hos er?</h3>
                  <p className="text-gray-700 text-base sm:text-lg"> På  <a href='https://www.mcdonalds.com/se/sv-se/jobb/sok-jobb.html' target="_blank"
            rel="noopener noreferrer"
                className=" hover:text-[#f9d00f]"> länken</a> ,kan du söka våra annonserade tjänster och ladda upp ditt CV och personliga brev. <br/>Lycka till!</p>
                </div>
              
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f9d00f]">Vad får man för lön hos er?</h3>
                  <p className="text-gray-700 text-base sm:text-lg">Hos oss på McDonald’s, via QSC Restauranger AB, följer vi gällande kollektivavtal, vilket innebär att din lön sätts utifrån tydliga kriterier som ålder och erfarenhet i branschen. Men det stannar inte där.

Vi tror på att belöna ansvar och ambition. Därför har du möjlighet till löneutveckling kopplad till din roll och ditt ansvar i restaurangen. Ju mer du växer i din roll, desto mer kan du påverka din lön.</p>
                </div>
                
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[#f9d00f]">Måste jag ha tidigare erfarenhet för att jobba på McDonald’s?</h3>
                  <p className="text-gray-700 text-base sm:text-lg">Nej, det behöver du inte!<br/>
Vi utbildar dig från grunden. Många av våra medarbetare börjar sitt allra första jobb hos oss. Du får en tydlig introduktion, bra handledning och möjlighet att växa i din egen takt. </p>
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

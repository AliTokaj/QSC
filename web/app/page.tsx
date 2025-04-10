"use client"; // Add this directive at the top of the file

import React, { useState } from 'react';

interface Item {
  name: string;
  description: string;
  role: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Owner/Operator');

  const categories: string[] = ['Owner/Operator', 'HR Director', 'Operations Director'];

  const items: Record<string, Item[]> = {
    'Owner/Operator': [
      { name: 'Claes Göran Jönsson', description: 'House-cured salmon with dill, mustard sauce and rye crisps', role: 'Owner' },
      { name: 'Claes Göran Jönsson', description: 'With horseradish cream, pickled mustard seeds and watercress', role: 'Owner' },
    ],
    'HR Director': [
      { name: 'HR Director 1', description: 'Description for HR Director 1', role: 'HR Director' },
      { name: 'HR Director 2', description: 'Description for HR Director 2', role: 'HR Director' },
    ],
    'Operations Director': [
      { name: 'Operations Director 1', description: 'Description for Operations Director 1', role: 'Operations Director' },
      { name: 'Operations Director 2', description: 'Description for Operations Director 2', role: 'Operations Director' },
    ],
  };

  return (
    <div>
     {/* Video Background and Hero Section */}
<div className="relative h-screen flex items-center justify-center overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline // Important for iOS
    className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
  >
    <source src="/welcome.mp4" type="video/mp4" />
    <source src="/welcome.webm" type="video/webm" /> {/* Fallback format */}
    Your browser does not support the video tag.
  </video>

  {/* Hero Section */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-white">
      <span className="text-[#F9D00F]">Q</span>uality{' '}
      <span className="text-[#F9D00F]">S</span>ervers{' '}
      <span className="text-[#F9D00F]">C</span>leanliness
    </h1>
    <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto">
      <span className="text-[#F9D00F]">W</span>e are dedicated to providing the best service with a focus on quality, reliability, and care.
    </p>
  </div>
</div>

      {/* Our Story Section */}
      <section className="mt-50">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative w-full">
              <div className="absolute -top-6 -left-6 bg-[#f7e6c4] w-16 sm:w-24 h-16 sm:h-24 rounded-lg"></div>
              <img
                src="/1.jpg"
                alt="mcdonald's clown"
                className="relative rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Content Section */}
            <div>
              <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Burgare med kärlek</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">Tradition Meets <span className="text-[#f9d00f]">Innovation</span></h2>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                Founded in 2010, QSC Restaurant has been a sanctuary for those seeking authentic Nordic cuisine with a modern twist.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mt-4">
                Every ingredient is carefully selected from local producers who share our commitment to sustainability and quality.
              </p>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="border-l-4 border-[#f9d00f] pl-4">
                  <h4 className="text-lg font-bold">Rubrik</h4>
                  <p className="text-gray-700 text-sm">We partner with local farmers to bring you the freshest ingredients.</p>
                </div>
                <div className="border-l-4 border-[#f9d00f] pl-4">
                  <h4 className="text-lg font-bold">Rubrik</h4>
                  <p className="text-gray-700 text-sm">Our menu evolves with the seasons, ensuring peak flavor and sustainability.</p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8">
                <a
                  href="/om-oss"
                  className="bg-[#f9d00f] text-black px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[#e0b800] transition-all duration-300"
                >
                  Läs mer om oss
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upptäcka Oss Section */}
      <section className="mt-50">
        <div className="py-20 px-4 sm:px-6 bg-[#FBF7F7] text-center">
          <div className="max-w-7xl mx-auto">
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">MÄNNISKORNA BAKOM</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">Upptäcka <span className="text-[#f9d00f]">Oss</span></h2>
            <p className="text-gray-700 text-base sm:text-lg mt-4">Our menu features a curated selection of traditional Nordic dishes with a modern twist.</p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#f9d00f] text-black'
                      : 'border border-[#f9d00f] text-gray-700 hover:bg-[#f9d00f]/20 hover:text-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Items with Motion Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {items[selectedCategory].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-left transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                  <p className="text-[#f9d00f] text-lg font-bold mt-2 text-right">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Våra kulinariska skapelser Section */}
      <section className="mt-50">
        <div className="py-20 px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Visuell resa</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
              Våra kulinariska <span className="text-[#f9d00f]">skapelser</span>
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mt-4">
              A glimpse into our world of flavors, textures, and artful presentations. Every dish we create is a masterpiece of taste and visual appeal.
            </p>
          </div>

          {/* Image Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {["/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"].map((src, index) => (
              <div key={index} className="relative overflow-hidden group rounded-lg shadow-lg aspect-square">
                {/* Image */}
                <img
                  src={src}
                  alt="Culinary Creation"
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
                {/* Transparent Black Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/50"></div>
              </div>
            ))}
          </div>

          {/* Instagram Button */}
          <div className="mt-8">
            <p className="text-gray-700 text-base">Följ oss på linkedin </p>
            <a
              href="https://www.linkedin.com/company/qsc-restauranger-ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-black px-6 py-2 rounded-lg font-medium shadow-md border border-[#F9D00F] hover:bg-[#F9D00F]/20"
            >
            QSC RESTAURANGER AB

            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
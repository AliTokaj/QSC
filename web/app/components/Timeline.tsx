"use client";
import React from "react";
import { Clock } from "lucide-react";

const milestones = [
  {
    year: "1990",
    title: "Den första restaurangen",
    description: "Vår första restaurang öppnades i Stockholm och blev snabbt en favorit bland lokalbefolkningen.",
  },
  {
    year: "2002",
    title: "Expansion till hela Sverige",
    description: "Vi började expandera till fler städer och etablerade oss som en nationell kedja med restauranger över hela landet.",
  },
  {
    year: "2005",
    title: "Internationell etablering",
    description: "Vi tog steget utanför Sveriges gränser och öppnade våra första restauranger i grannländerna.",
  },
  {
    year: "2010",
    title: "Hållbarhetsinitiativ",
    description: "Vi lanserade vårt omfattande hållbarhetsprogram med fokus på miljövänliga val och samhällsansvar.",
  },
  {
    year: "2023",
    title: "Framtiden är här",
    description: "Vi firade vår framgångsresa med över 500 restauranger globalt och fortsätter att utvecklas för att möta framtidens behov.",
  },
];

const MilestonesSection = () => {
  return (
    <section className="mt-50">
      <div className="max-w-5xl mx-auto text-center">
        <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
          VÅR RESA
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight font-display mt-4">
          Viktiga <span className="text-[#F0AE2C]">milstolpar</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto mt-8 flex flex-col space-y-6 px-4 sm:px-6 lg:px-8">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0"
          >
            <div className="flex items-center text-black text-lg font-semibold">
              <Clock className="w-5 h-5 mr-2 text-[#F0AE2C]" /> {milestone.year}
            </div>
            <div className="bg-[#FBF7F7] p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-lg text-gray-800">{milestone.title}</h3>
              <p className="text-gray-600 mt-2">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestonesSection;
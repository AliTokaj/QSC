"use client";
import React from "react";
import { motion } from "framer-motion";

const organizationData = {
  name: "Claes Göran Jönsson",
  role: "OWNER/OPERATOR",
  image: "/placeholder.svg",
  color: "bg-yellow-400",
  children: [
    {
      name: "Omar Dabous",
      role: "Driftchef ",
      color: "bg-yellow-400",
      children: [
        {
          name: "Anna Holm",
          role: "FINANCE DIRECTOR",
          color: "bg-yellow-400",
        },
        {
          name: "Johan Bergström",
          role: "OPERATION DIRECTOR",
          color: "bg-yellow-400",
          children: [
            {
              name: "Karl Nilsson",
              role: "FINANCE ASSISTANT",
              color: "bg-yellow-400",
              children: [
                {
                  name: "Daniella Svensson",
                  role: "FINANCE ASSISTANT",
                  color: "bg-yellow-400",
                },
              ],
            },
            {
              name: "Anders Jansson",
              role: "SUPERVISOR",
              color: "bg-yellow-400",
            },
            {
              name: "Emma Pettersson",
              role: "HR MANAGER",
              color: "bg-yellow-400",
            },
          ],
        },
        {
          name: "Lisa Ekström",
          role: "HR DIRECTOR",
          color: "bg-yellow-400",
        },
      ],
    },
  ],
};

const locations = [
  ["STOCKHOLM", "GÖTEBORG", "ÖREBRO", "HELSINGBORG", "UMEÅ"],
  ["UPPSALA", "MALMÖ", "LINKÖPING", "JÖNKÖPING", "LULEÅ"],
  ["VÄSTERÅS", "LUND", "NORRKÖPING", "VÄXJÖ", "SUNDSVALL"],
];

const OrgChart = ({ data }: { data: any }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className={`p-4 w-64 rounded-lg text-center text-white shadow-md ${data.color}`}
        whileHover={{ scale: 1.05 }}
      >
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-12 h-12 mx-auto rounded-full mb-2 bg-white p-1"
          />
        )}
        <h3 className="font-bold text-lg">{data.name}</h3>
        <p className="text-sm">{data.role}</p>
      </motion.div>

      {data.children && (
        <div className="flex justify-center mt-2">
          <div className="w-0.5 h-6 bg-gray-400"></div>
        </div>
      )}

      <div className="flex flex-wrap justify-center mt-2 gap-4">
        {data.children &&
          data.children.map((child: any, index: number) => (
            <div key={index} className="flex flex-col items-center">
              <OrgChart data={child} />
            </div>
          ))}
      </div>
    </div>
  );
};

const OrganizationSection = () => {
  return (
    <section className="mt-50">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold ">Organisationsträd</h1>
        <p className="text-gray-700 text-base sm:text-lg  mt-2">
          Vårt teams struktur är utformat för att ge den bästa servicen till
          våra kunder och skapa en effektiv arbetsmiljö för alla medarbetare.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-6 bg-[#FBF7F7] ">
        <div className="flex justify-center">
          <OrgChart data={organizationData} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4">
          {locations.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-4">
              {row.map((city, colIndex) => (
                <div
                  key={colIndex}
                  className="bg-pink-200 text-gray-800 font-semibold px-4 py-2 rounded-md shadow-md text-center w-full sm:w-auto"
                >
                  {city}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;

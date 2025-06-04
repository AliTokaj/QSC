import React from "react";
import { Users, Mail, Phone } from "lucide-react";
import OrganizationSection from "../components/OrganizationSection ";

const page = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Claes Göran Jönsson",
      role: "franchisetagare",
      image: "/placeholder.svg",
      email: "",
      phone: "",
      bio: " Text om Clase",
    },
    {
      id: 2,
      name: "Omar Dabous",
      role: "Driftchef",
      image: "/omar.jpeg",
      email: "erik@osc.se",
      phone: "",
      bio: "text om Omar",
    },
    {
      id: 3,
      name: "Aron Yohannes",
      role: "Supervisor",
      image: "/aron.jpeg",
      email: "",
      phone: "",
      bio: "text om Aron",
    },
    {
      id: 4,
      name: "Amjd (Amjad) Kryem",
      role: "Supervisor",
      image: "/amjd.jpeg",
      email: "",
      phone: "",
      bio: "tetx om Amjd.",
    },
    {
      id: 5,
      name: "Tamara Prokic",
      role: "Supervisor",
      image: "/tamara.jpeg",
      email: "",
      phone: "",
      bio: "text om Tamara",
    },
    {
      id: 6,
      name: "Max Lindberg",
      role: "Supervisor",
      image: "/placeholder.svg",
      email: "",
      phone: "",
      bio: "text om Max",
    },
    {
      id: 7,
      name: "Helene Sköld",
      role: "HR-chef",
      image: "/helene.jpeg",
      email: "",
      phone: "",
      bio: "Helene arbetar strategiskt med personalfrågor och ansvarar för rekrytering, utveckling och arbetsmiljö. Hon är även koordinator och koordinerar högt och lågt.",
    },
    {
      id: 8,
      name: "	Ida Jönsson",
      role: " HR-assistent",
      image: "/placeholder.svg",
      email: "",
      phone: "",
      bio: "text om Ida",
    },
    {
      id: 9,
      name: "Felicia Ekeljung",
      role: "HR-assistent",
      image: "/felicia.jpeg",
      email: "",
      phone: "",
      bio: "text om Felicia",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Vår <span className="text-yellow-400">ledningsgrupp</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
              Bakom varje välfungerande restaurang står ett starkt team
            </h2>
          </div>
        </div>
      </section>
      <OrganizationSection />

      <div className="container-custom">
        <div className="max-w-7xl mx-auto border-t border-black/10 mt-20"></div>

        {/* Team Section */}

        <section className="max-w-7xl mx-auto mt-50 ">
          <div className="text-center ">
            <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Ett starkt support-team
            </span>
          </div>
          <div className="container-custom mx-auto text-center mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-[#FBF7F7] shadow-lg rounded-2xl p-6 text-center"
                >
                  {
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-full"
                    />
                  }
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2 text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex justify-center space-x-4 text-gray-600">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 hover:text-[#F9D00F] transition-colors duration-200"
                    >
                      <Mail size={18} />
                      <span>{member.email}</span>
                    </a>
                  </div>
                  <div className="mt-2 flex justify-center space-x-4 text-gray-600">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center space-x-2 hover:text-[#F9D00F] transition-colors duration-200"
                    >
                      <Phone size={18} />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Team Philosophy Section */}
      <section className="mt-50">
        <section className=" container-custom py-16 md:py-24 bg-[#FBF7F7] ">
          <div className=" max-w-7xl mx-auto  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Vår filosofi
                </h2>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  På QSC tror vi på kraften i samarbete och innovation. Vår
                  ledningsgrupp består av experter inom sina respektive områden,
                  men vi arbetar alltid som ett team.
                </p>
                <p className="text-gray-700 text-base sm:text-lg mb-4">
                  Vi uppmuntrar kreativitet, idéer och personligt ansvar,
                  samtidigt som vi alltid håller fast vid våra kärnvärden
                  kvalitet, service och Renlighet. Tillsammans skapar vi
                  restaurangupplevelser som känns för gästen och medarbetaren.{" "}
                </p>
              </div>
              <div className="bg-[#F9D00F]/20 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F9D00F] rounded-full flex items-center justify-center">
                    <Users className="text-black w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Tillsammans gör vi skillnad
                  </h3>
                </div>
                <p className="text-gray-700 text-base sm:text-lg mb-6">
                  Vår styrka ligger i mångfalden av människor, perspektiv och
                  erfarenheter. Genom att kombinera expertis från olika delar av
                  restaurangvärlden skapar vi en unik helhet. Vi utvecklar vår
                  service och vår arbetsmiljö för att överträffa förväntningar.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default page;

import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';
import OrganizationSection from "../components/OrganizationSection ";


const page = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Claes Göran Jönsson',
      role: 'VD & Grundare',
      image: '/placeholder.svg',
      email: 'maria@osc.se',
      phone: '+46 70 123 45 67',
      bio: ' Grundade QSC med visionen att skapa en restaurang som kombinerar högkvalitativ mat med en varm och inkluderande atmosfär.'
    },
    {
      id: 2,
      name: 'Omar Dabous',
      role: 'Driftchef',
      image: '/omar.jpeg',
      email: 'erik@osc.se',
      phone: '+46 70 234 56 78',
      bio: 'Med över 15 års erfarenhet från några av Stockholms mest välrenommerade restauranger leder Erik vårt kök med passion och kreativitet.'
    },
    {
      id: 3,
      name: 'Aron Yohannes',
      role: 'Supervisor',
      image: '/aron.jpeg',
      email: 'anna@osc.se',
      phone: '+46 70 345 67 89',
      bio: 'Anna ser till att våra gäster får en oförglömlig upplevelse. Med hennes bakgrund inom service och ledarskap är hon navet i vår verksamhet.'
    },
    {
      id: 4,
      name: 'Amjd (Amjad) Kryem',
      role: 'Supervisor',
      image: '/amjd.jpeg',
      email: 'johan@osc.se',
      phone: '+46 70 456 78 90',
      bio: 'Med sin bakgrund inom ekonomi och restaurangbranschen ser Johan till att verksamheten drivs på ett hållbart och lönsamt sätt.'
    },
    {
      id: 5,
      name: 'Lisa',
      role: '',
      image: '',
      email: 'lisa@osc.se',
      phone: '+46 70 567 89 01',
      bio: 'Lisa ansvarar för vår marknadsföring och kommunikation. Med sin kreativa blick och strategiska tänkande ökar hon vår synlighet och stärker vårt varumärke.'
    },
    {
      id: 6,
      name: 'Karl Nilsson',
      role: 'HR-ansvarig',
      image: '/placeholder.svg',
      email: 'karl@osc.se',
      phone: '+46 70 678 90 12',
      bio: 'Karl arbetar strategiskt med personalfrågor och ansvarar för rekrytering, utveckling och arbetsmiljö. Han ser till att vi har branschens bästa medarbetare.'
    }
  ];

  return (
    <div >
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

      <div className='container-custom'>
      
      <OrganizationSection />
      <div className="max-w-7xl mx-auto border-t border-black/10 mt-20">
          
        </div>


      {/* Team Section */}
      
      <section className="max-w-7xl mx-auto mt-50 ">
      <div className='text-center '>
      <span className="bg-[#FFFDD0] text-black px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Ett Starkt Team</span></div>
        <div className="container-custom mx-auto text-center mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#FBF7F7] shadow-lg rounded-2xl p-6 text-center">
                <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto mb-4 rounded-full" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-700">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-4 text-gray-600">
                  <a href={`mailto:${member.email}`} className="flex items-center space-x-2 hover:text-[#F9D00F] transition-colors duration-200">
                    <Mail size={18} />
                    <span>{member.email}</span>
                  </a>
                </div>
                <div className="mt-2 flex justify-center space-x-4 text-gray-600">
                  <a href={`tel:${member.phone}`} className="flex items-center space-x-2 hover:text-[#F9D00F] transition-colors duration-200">
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
       <section className='mt-50'>
       <section className=" container-custom py-16 md:py-24 bg-[#FBF7F7] ">
        <div className=" max-w-7xl mx-auto  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Vår filosofi
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                På QSC tror vi på kraften i samarbete och innovation. Vår ledningsgrupp består av experter inom sina respektive områden, men vi arbetar alltid som ett team.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
Vi uppmuntrar kreativitet, idéer och personligt ansvar, samtidigt som vi alltid håller fast vid våra kärnvärden  kvalitet, service och Renlighet. Tillsammans skapar vi restaurangupplevelser som känns  för gästen och medarbetaren.              </p>
             
            </div>
            <div className="bg-[#F9D00F]/20 p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#F9D00F] rounded-full flex items-center justify-center">
                  <Users className="text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Tillsammans gör vi skillnad</h3>
              </div>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
Vår styrka ligger i mångfalden  av människor, perspektiv och erfarenheter. Genom att kombinera expertis från olika delar av restaurangvärlden skapar vi en unik helhet. Vi utvecklar vår service och vår arbetsmiljö för att överträffa förväntningar.              </p>
           
            </div>
          </div>
        </div>

      </section>
      </section>

      

    </div>
      
      


    
 
      
    
     

    
  );
};

export default page;
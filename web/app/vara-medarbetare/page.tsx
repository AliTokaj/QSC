import React from 'react'

import TeamGallery from '../components/TeamGallery'
import { form } from 'framer-motion/client'
import BurgerSection from '../components/BurgerSection'
import TeamBios from '../components/TeamBios'

const page = () => {
  return (
    <div>
         {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-[#FBF7F7]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-yellow-400">People</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700">
            Människorna är kärnan i allt vi gör. Det är vårt team som skapar magin och gör varje besök minnesvärt.
            </h2>
          </div>
        </div>
      </section>
      <TeamBios/>
      
     
     


      
      
    </div>
  )
}

export default page

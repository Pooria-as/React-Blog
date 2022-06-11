import React from 'react'
import AboutSection from '../components/AboutUs/AboutSection'
import FaqSection from '../components/FaQ/FaqSection'
import ServiceSection from '../components/Service/ServiceSection'
import { motion } from 'framer-motion'
import { PageAnimation } from '../components/Animate/Animation'
const AboutUs = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial='hidden'
      animate='show'
      end='end'
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs

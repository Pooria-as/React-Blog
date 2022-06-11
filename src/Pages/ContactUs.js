import React from 'react'
import { motion } from 'framer-motion'
import { PageAnimation } from '../components/Animate/Animation'

const ContactUs = () => {
  return (
    <motion.div
    variants={PageAnimation}
    initial='hidden'
    animate='show'
    end='end'
  >
      <h2>ContactUs</h2>
    </motion.div>
  )
}

export default ContactUs

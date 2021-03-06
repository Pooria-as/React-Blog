import React from 'react'
import WorkComponents from '../components/Work/WorkComponents'
import { motion } from 'framer-motion'
import { PageAnimation } from '../components/Animate/Animation'
const Work = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial='hidden'
      animate='show'
      end='end'
    >
      <WorkComponents />
    </motion.div>
  )
}

export default Work

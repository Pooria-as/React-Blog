import React from 'react'
import Single from '../components/Single/Single'
import { motion } from 'framer-motion'
import { PageAnimation } from '../components/Animate/Animation'
const SingleWork = () => {
  return (
    <motion.div
      variants={PageAnimation}
      initial='hidden'
      animate='show'
      end='end'
    >
      <Single />
    </motion.div>
  )
}

export default SingleWork

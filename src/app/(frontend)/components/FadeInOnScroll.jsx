'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const FadeInOnScroll = ({ children, className }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // ✅ run every time it's in view
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!inView) {
      controls.set('hidden') // 🧼 reset so it can animate again
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}

export default FadeInOnScroll

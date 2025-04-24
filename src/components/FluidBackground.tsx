'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface FluidBackgroundProps {
  color?: string
  opacity?: number
}

export default function FluidBackground({ 
  color = 'rgba(255, 255, 255, 0.1)',
  opacity = 0.5 
}: FluidBackgroundProps) {
  return (
    <div className="fluid-background" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0
    }}>
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          opacity
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 100, 0],
          y: [0, -100, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          opacity
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [180, 360, 540],
          x: [100, 0, -100],
          y: [-100, 0, 100]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  )
} 
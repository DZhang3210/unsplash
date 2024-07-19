import React from 'react'
import {motion} from 'framer-motion'
const variants = {
    initial:{
        opacity:0,
        scale:0
    },
    animate: {
        opacity:1,
        scale:1,
        transition:{
            duration:0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
        }
    },
    exit:{
        opacity:0,
        scale:0,
        transition:{
            duration:0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
        }
    }
}
const FadeIn = ({children}) => {
  return (
    <motion.div
        variants = {variants}
        initial = "initial"
        animate = "animate"
        exit = "exit"
        // positionTransition={{
        //     type: "spring",
        //     stiffness: 300,
        //     damping: 20,
        //   }}
        style={{ position: 'absolute', height: '100%', width: '100%', top:0, left:0, pointerEvents:'none'}}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn

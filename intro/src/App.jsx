/*
Video Links
React Hooks Course --> https://www.youtube.com/watch?v=LlvBzyy-558

Framer Motion Tutorial --> https://www.youtube.com/watch?v=GOuwOI-WSkE

Franer Motion Crash Course --> https://www.youtube.com/watch?v=znbCa4Rr054


*/



import { useState } from 'react'
import {motion, spring} from 'framer-motion'
import './App.css'

function App() {
  const [rotate, setRotate] = useState(false);
  const [move, setMove] = useState(false);

  return (
    <>
      <div className='h-screen bg-gradient-to-r from-[#00B4DB] to-[#0083B0] flex justify-center items-center'>
        <motion.div className='box border-white border-2 h-[10vw] w-[10vw] rounded-xl bg-white shadow-2xl'
        initial={{x : 0}}
        animate={{x:move ? -100 : 100 ,rotate : rotate ? 0 : 360}}
        // transition={{type:"spring"}}
        onClick={() => {setRotate(!rotate);setMove(!move)}}
        >
        </motion.div>


        {/* <motion.div className='box border-white border-2 h-[10vw] w-[10vw] rounded-xl bg-slate-300 shadow-2xl'
        initial={{x : 0}}
        animate={{x:[0,200,200,0]}}
        transition={{type:"spring", repeat:Infinity}}
        >
        </motion.div> */}

      </div>
    </>
  )
}

export default App

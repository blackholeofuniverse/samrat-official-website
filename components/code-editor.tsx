"use client"
import { Minus, X, Square } from 'lucide-react'
import { motion } from "framer-motion"

export default function CodeEditor() {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto hover:shadow-2xl duration-50 hover:shadow-primary/20 hover:scale-110"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="rounded-lg overflow-hidden border border-slate-800 bg-black">
        {/* Window Controls */}
        <div className="bg-[#0F0F10] px-4 py-2 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs">samrat_profile.js</div>
          <div className="flex space-x-2 items-center">
            <Minus className="w-4 h-4 text-gray-400" />
            <Square className="w-3 h-3 text-gray-400" />
            <X className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="space-y-2">
            <div>
              <span className="text-code_primary">const</span>
              <span className="text-white"> developer </span>
              <span className="text-[#ff7b72]">=</span>
              <span className="text-[#c9d1d9]"> {`{`}</span>
            </div>

            <div className="pl-6">
              <span className="text-white">name</span>
              <span className="text-code_primary">: </span>
              <span className="text-code_tertiary">{`'Samrat Bandre'`}</span>
              <span className="text-[#c9d1d9]">,</span>
            </div>

            <div className="pl-6">
              <span className="text-white">role</span>
              <span className="text-code_primary">: </span>
              <span className="text-code_tertiary">{`'MERN Stack Developer'`}</span>
              <span className="text-white">,</span>
            </div>

            <div className="pl-6">
              <span className="text-white">skills</span>
              <span className="text-white"> <span className='text-code_primary'>:</span> [</span>
              <span className="text-code_tertiary">{`'TypeScript'`}</span>
              <span className="text-[#c9d1d9]">, </span>
              <span className="text-code_tertiary">{`'React'`}</span>
              <span className="text-[#c9d1d9]">, </span>
              <span className="text-code_tertiary">{`'Next.js'`}</span>
              <span className="text-[#c9d1d9]">, </span>
              <span className="text-code_tertiary">{`'Node.js'`}</span>
              <span className="text-[#c9d1d9]">, </span>
              <span className="text-code_tertiary">{`'MongoDb'`}</span>
              <span className="text-[#c9d1d9]">],</span>
            </div>

            <div className="pl-6">
              <span className="text-white">experience</span>
              <span className="text-code_primary">: </span>
              <span className="text-[#79c0ff]">3.5</span>
              <span className="text-white">,</span>
            </div>

            <div className="pl-6">
              <span className="text-code_secondary">available</span>
              <span className="text-code_primary">: </span>
              <span className="text-code_primary">function</span>
              <span className="text-white">() {`{`}</span>
            </div>

            <div className="pl-12">
              <span className="text-code_primary">return</span>
              <span className="text-white"> (</span>
            </div>

            <div className="pl-16">
              <span className="text-code_primary">this</span>
              <span className="text-white">.experience </span>
              <span className="text-white">&gt;=</span>
              <span className="text-[#c9d1d9]"> </span>
              <span className="text-[#79c0ff]">3.5</span>
              <span className="text-[#c9d1d9]"> </span>
              <span className="text-code_primary">&&</span>
            </div>

            <div className="pl-16">
              <span className="text-code_primary">this</span>
              <span className="text-white">.skills.length </span>
              <span className="text-white">&gt;=</span>
              <span className="text-[#c9d1d9]"> </span>
              <span className="text-[#79c0ff]">4</span>
            </div>

            <div className="pl-12">
              <span className="text-white">);</span>
            </div>

            <div className="pl-6">
              <span className="text-white">{`}`}</span>
            </div>

            <div>
              <span className="text-white">{`}`}</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


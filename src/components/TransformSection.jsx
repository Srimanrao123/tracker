import React from 'react';
import { ShieldAlert, Compass, Target } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const TransformSection = () => {
  return (
    <section className="py-24 bg-[#1a1e27] relative border-t border-[#2a303c] overflow-hidden" id="transform">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif text-white font-bold mb-6 text-offset-shadow-light tracking-tight">
            Transfor
          </h2>
          <p className="text-sm text-gray-400 font-sans tracking-widest uppercase">
            Experience the Future of
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          
          {/* Card 1 */}
          <Motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#212631] p-8 rounded-3xl border border-[#2a303c] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-colors"></div>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-[#1a1e27] p-4 rounded-2xl shadow-inner border border-white/5">
                <ShieldAlert className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Security</h3>
            </div>
            
            {/* Mockup UI Element inside card */}
            <div className="bg-[#161a23] rounded-xl p-4 border border-white/5 shadow-inner mt-6 flex flex-col space-y-3">
               <div className="flex justify-between items-center">
                 <div className="w-2 h-2 bg-red-500 rounded-full blur-[1px]"></div>
                 <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
                 <div className="h-1 w-8 bg-gray-600 rounded-full"></div>
               </div>
               <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>
               <div className="flex justify-between items-center">
                 <div className="w-2 h-2 bg-yellow-500 rounded-full blur-[1px]"></div>
                 <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
               </div>
            </div>
          </Motion.div>

          {/* Card 2 */}
          <Motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#212631] p-8 rounded-3xl border border-[#2a303c] shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-orange-500/20 transition-colors"></div>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-[#1a1e27] p-4 rounded-2xl shadow-inner border border-white/5">
                <Compass className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Smart UI</h3>
            </div>
            
            <div className="bg-[#161a23] rounded-xl p-4 border border-white/5 shadow-inner mt-6 grid grid-cols-2 gap-3">
               <div className="flex flex-col space-y-2 pb-2 border-b border-gray-800">
                  <div className="h-1 w-10 bg-orange-400/50 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="h-1 w-16 bg-gray-700 rounded-full"></div>
                  </div>
               </div>
               <div className="flex flex-col space-y-2 pb-2 border-b border-gray-800">
                  <div className="h-1 w-8 bg-gray-600 rounded-full"></div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
                  </div>
               </div>
               
               <div className="col-span-2 pt-2 flex justify-between">
                 <div className="w-3 h-3 border border-orange-400 rounded-full flex justify-center items-center">
                   <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                 </div>
                 <div className="h-1 w-1/2 bg-gray-700 rounded-full mt-1"></div>
               </div>
            </div>
          </Motion.div>

          {/* Card 3 */}
          <Motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#212631] p-8 rounded-3xl border border-[#2a303c] shadow-2xl relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-blue-400/20 transition-colors"></div>
            
            <div className="flex flex-col items-center text-center space-y-4 mb-4">
              <div className="bg-[#1a1e27] p-4 rounded-2xl shadow-inner border border-white/5">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Stay Ahead</h3>
            </div>
            <p className="text-sm text-gray-400 font-sans leading-relaxed text-center mt-2">
              Transform your driving experience with our state-of-the-art vehicle security system.
            </p>
          </Motion.div>

        </div>

      </div>
    </section>
  );
};

export default TransformSection;

import React from 'react';
import { motion as Motion } from 'framer-motion';

const RedefineSection = () => {
  return (
    <section className="relative py-24 min-h-[80vh] flex items-center overflow-hidden bg-gray-100" id="redefine">
      
      {/* Light Map Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-multiply"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000&h=1200')",
          filter: 'grayscale(1) contrast(1.2)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-left"
          >
            <h2 className="text-5xl md:text-7xl font-sans font-black text-[#1a2b3c] leading-[1.1] tracking-tight">
              Redefine <br />
              Vehicle <br />
              Security with
            </h2>
            
            <p className="text-sm text-gray-600 max-w-md leading-relaxed mt-4 font-sans">
              Introducing our groundbreaking vehicle security platform. Featuring advanced GPS tracking, live map integration, and intuitive mobile controls. Our solutions keep your ride safe and connected like never before.
            </p>
            
            <div className="pt-4">
              <Motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white border text-[#1a2b3c] px-8 py-3 rounded-full font-bold text-sm shadow-md hover:bg-gray-50 transition-colors"
              >
                Explore Now
              </Motion.button>
            </div>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, y: 50, rotateZ: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] flex justify-center items-center"
          >
            {/* Phone Mockup with Map Pin overlapping */}
            <Motion.div 
               animate={{ y: [-5, 5, -5] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="relative w-full h-full flex justify-center items-center"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Mobile Dashboard App"
                className="w-3/4 md:w-2/3 object-cover rounded-[3rem] shadow-2xl ring-8 ring-white origin-bottom-right rotate-12"
              />
              
              {/* Decorative Map Pins */}
              <Motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
                 className="absolute bottom-1/3 left-0 w-12 h-12 bg-red-500 rounded-full rounded-br-none rotate-45 flex justify-center items-center shadow-lg border-2 border-white"
              >
                 <div className="w-4 h-4 bg-white rounded-full -rotate-45"></div>
              </Motion.div>
              
              <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-blue-500 rounded-full rounded-br-none rotate-45 flex justify-center items-center shadow-lg border-2 border-white">
                 <div className="w-2 h-2 bg-white rounded-full -rotate-45"></div>
              </div>
            </Motion.div>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};

export default RedefineSection;

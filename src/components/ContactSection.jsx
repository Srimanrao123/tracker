import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_QUERY,
  PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY,
  TEL_PRIMARY,
  TEL_SECONDARY,
  whatsappUrl,
} from '../config/company';
import { motion as Motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section className="relative py-32 sm:py-48 bg-white" id="contact">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/[0.05] to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="max-w-2xl">
            <Motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-[#991b1b]/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#991b1b]">
                Contact Infrastructure
              </span>
            </Motion.div>
            <Motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] selection:bg-[#991b1b] selection:text-white"
            >
              Let's secure <br />
              <span className="text-[#991b1b]/10 hover:text-[#991b1b]/20 transition-colors duration-1000">your future.</span>
            </Motion.h2>
          </div>
          <Motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-black/40 font-medium max-w-xs leading-relaxed"
          >
            Direct access to our hardware engineering team and asset security specialists.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Support Block */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col p-1px bg-gradient-to-br from-[#991b1b]/20 to-transparent rounded-[56px]"
          >
            <div className="h-full w-full bg-white rounded-[55px] p-12 flex flex-col sm:flex-row gap-16 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-black text-black mb-8 tracking-tighter">Direct Lines</h3>
                <div className="space-y-8">
                  {[
                    { label: "Engineering Lead", tel: TEL_PRIMARY, display: PHONE_DISPLAY_PRIMARY },
                    { label: "Fleet Operations", tel: TEL_SECONDARY, display: PHONE_DISPLAY_SECONDARY }
                  ].map((item, i) => (
                    <a key={i} href={`tel:${item.tel}`} className="flex items-center gap-6 group">
                      <div className="h-12 w-12 rounded-[20px] bg-black text-white flex items-center justify-center transition-all duration-500 group-hover:bg-[#991b1b] group-hover:rotate-12 group-hover:scale-110">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-black/20 uppercase tracking-[0.3em] mb-1">{item.label}</p>
                        <p className="text-xl font-black text-black transition-colors group-hover:text-[#991b1b]">{item.display}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-px h-32 bg-black/[0.05] hidden sm:block" />

              <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <p className="text-sm font-medium text-black/40 mb-10 leading-relaxed">
                  Fastest response times for <br />critical fleet emergencies.
                </p>
                <a
                  href={whatsappUrl('Hi, I would like to know more about GPS tracking.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-4 rounded-full border-2 border-black px-10 py-5 text-sm font-black text-black transition-all hover:bg-black hover:text-white group"
                >
                  <MessageCircle size={18} className="transition-transform group-hover:-rotate-12" />
                  <span className="uppercase tracking-widest text-xs">WhatsApp Sync</span>
                </a>
              </div>
            </div>
          </Motion.div>

          {/* Details Block */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-8">
            <Motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[48px] bg-[#f8f8f8] border border-black/[0.02] hover:border-[#991b1b]/10 transition-all duration-700 group flex flex-col justify-between"
            >
              <div>
                <MapPin size={24} className="text-[#991b1b] mb-6 group-hover:scale-125 transition-transform" />
                <h3 className="text-xl font-black text-black mb-3">Experience Lab</h3>
                <p className="text-sm text-black/40 font-medium leading-relaxed">
                  {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#991b1b] opacity-0 group-hover:opacity-100 transition-opacity">View Map</span>
                 <ExternalLink size={16} className="text-black/10 group-hover:text-[#991b1b] transition-colors" />
              </div>
            </Motion.a>

            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-[48px] border-2 border-dashed border-black/[0.05] hover:border-[#991b1b]/20 transition-all duration-700 group flex flex-col justify-center gap-6"
            >
               <div className="flex items-center gap-5">
                 <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#991b1b]">
                    <Clock size={16} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Operating Flow</p>
                    <p className="text-[9px] font-bold text-black/30 uppercase mt-1">Mon — Sun</p>
                 </div>
               </div>
               <p className="text-2xl font-black text-black tracking-tighter">06:00 AM — 11:00 PM</p>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

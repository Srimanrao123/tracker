import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_QUERY,
  PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY,
  SERVICE_HEADLINE,
  TAGLINE,
  TEL_PRIMARY,
  TEL_SECONDARY,
  whatsappUrl,
} from '../config/company';

const ContactSection = () => {
  return (
    <section className="relative border-t border-white/5 bg-[#0B0F19] py-24 text-gray-100" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-center font-serif text-4xl font-bold text-white text-offset-shadow-light md:text-5xl">
            Get in touch
          </h2>
          <p className="font-sans text-lg text-gray-400">{TAGLINE}</p>
          <p className="mt-2 text-sm uppercase tracking-wider text-[#8ce99a]/90">{SERVICE_HEADLINE}</p>
        </div>

        <div className="mb-16 flex flex-col justify-center space-y-4 px-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href={whatsappUrl('Hi, I would like to know more about GPS tracking.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center space-x-2 rounded bg-[#25D366] px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#1ebe57] sm:w-auto"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${TEL_PRIMARY}`}
            className="flex w-full items-center justify-center space-x-2 rounded bg-[#e43a3e] px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#d12f33] sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            <span>Call {PHONE_DISPLAY_PRIMARY}</span>
          </a>

          <a
            href={`tel:${TEL_SECONDARY}`}
            className="flex w-full items-center justify-center space-x-2 rounded border border-white/20 bg-white/5 px-8 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            <span>Call {PHONE_DISPLAY_SECONDARY}</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group rounded-xl border border-[#2a303c] bg-[#161a23] p-10 text-center shadow-lg transition-colors hover:border-[#3b82f6]/50">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6] transition-colors group-hover:bg-[#3b82f6]/20">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Phone</h3>
            <p className="mb-1 text-gray-400">
              <a href={`tel:${TEL_PRIMARY}`} className="hover:text-white">
                +91 {PHONE_DISPLAY_PRIMARY}
              </a>
            </p>
            <p className="mb-1 text-gray-400">
              <a href={`tel:${TEL_SECONDARY}`} className="hover:text-white">
                +91 {PHONE_DISPLAY_SECONDARY}
              </a>
            </p>
            <p className="text-sm text-gray-500">Cell — reach us anytime</p>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-[#2a303c] bg-[#161a23] p-10 text-center shadow-lg transition-colors hover:border-[#25D366]/50"
          >
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-colors group-hover:bg-[#25D366]/20">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Visit us</h3>
            <p className="mb-1 text-gray-400">{ADDRESS_LINE_1}</p>
            <p className="text-gray-500">{ADDRESS_LINE_2}</p>
            <p className="mt-3 text-sm text-[#25D366]">Open in Maps →</p>
          </a>

          <div className="group rounded-xl border border-[#2a303c] bg-[#161a23] p-10 text-center shadow-lg transition-colors hover:border-orange-500/50">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 transition-colors group-hover:bg-orange-500/20">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-white">Hours</h3>
            <p className="mb-1 text-gray-400">Mon–Sun: 6:00 AM – 11:00 PM</p>
            <p className="text-sm text-gray-500">Sales &amp; service support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

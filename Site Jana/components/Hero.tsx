'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF9F6]">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top opacity-10"
        >
          <source src="https://agenciasevenjp.my.canva.site/site-jana-teste/_assets/video/c781fe874182b3938375c2794efb8a93.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-left"
          >
            <span className="inline-block py-1 px-4 rounded-full border border-rose-200 text-rose-400 text-xs uppercase tracking-[0.2em] mb-8 bg-white/50 backdrop-blur-sm font-medium">
              Nail Design desde 2011
            </span>
            <h1 className="font-cinzel text-5xl md:text-7xl text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Redução de tempo <br />
              <span className="text-rose-400 italic font-light">com Molde F1</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed">
              O seu tempo define sua qualidade de vida! Domine a técnica que está revolucionando o mercado de alongamento de unhas com Janaína Melo.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.a
                href="https://pay.kiwify.com.br/OtN8bnc"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-rose-400 hover:bg-rose-500 text-white rounded-full font-medium text-lg transition-all shadow-lg shadow-rose-200 flex items-center gap-3"
              >
                Eu quero o curso!
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <button 
                onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white hover:bg-rose-50 text-rose-400 rounded-full font-medium text-lg transition-all border border-rose-100 flex items-center gap-3 shadow-sm"
              >
                <Play className="w-4 h-4 fill-current" />
                Ver Apresentação
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              {/* Soft decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose-100/50 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-50 rounded-full blur-3xl animate-pulse delay-1000" />
              
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl shadow-rose-100">
                <Image
                  src="https://agenciasevenjp.my.canva.site/site-jana-teste/_assets/media/e359b034271cab499160b675784afc51.jpg"
                  alt="Janaína Melo"
                  fill
                  className="object-cover object-top"
                  priority
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-rose-200"
      >
        <div className="w-px h-12 bg-gradient-to-b from-rose-200 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}

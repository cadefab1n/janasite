'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-[#FAF9F6]">
              <Image
                src="https://agenciasevenjp.my.canva.site/site-jana-teste/_assets/media/18745b07ad7b5c04369727b84fe50d28.jpg"
                alt="Janaína Melo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-rose-400 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Conheça sua mentora</span>
            <h2 className="font-cinzel text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
              Apresentação <br />
              <span className="text-rose-400 italic font-light">Janaína Melo</span>
            </h2>
            <div className="space-y-8 text-gray-500 text-lg font-light leading-relaxed">
              <p>
                Atuando no mercado de Nail Design desde 2011, desenvolvi uma metodologia focada em resultados reais e otimização de tempo, pensando em cada detalhe da rotina feminina.
              </p>
              <p>
                Minha missão é capacitar mulheres a entregarem um trabalho de excelência, com agilidade e alta durabilidade, permitindo que tenham mais qualidade de vida e a valorização que merecem.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-12 border-t border-rose-50">
                <div>
                  <p className="text-4xl font-cinzel text-rose-400 mb-2">13+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Anos de Experiência</p>
                </div>
                <div>
                  <p className="text-4xl font-cinzel text-rose-400 mb-2">1000+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Alunas Formadas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Zap, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Resultado Natural",
    description: "Alongamentos sofisticados que se fundem perfeitamente com a unha natural."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Agilidade",
    description: "Reduza drasticamente o tempo de mesa sem perder a qualidade."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Alta Durabilidade",
    description: "Técnica testada que garante unhas impecáveis por muito mais tempo."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Qualidade de Vida",
    description: "Atenda mais clientes em menos tempo e valorize seu serviço."
  }
];

const modules = [
  "Preparação correta da unha natural",
  "Escolha e adaptação do Molde F1",
  "Estrutura perfeita do alongamento",
  "Aplicação do gel passo a passo",
  "Acabamento impecável e duradouro"
];

export default function CourseInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-4xl md:text-5xl text-gray-900 mb-6"
          >
            O que é o <span className="text-rose-400 italic font-light">Molde F1?</span>
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Uma técnica moderna de alongamento de unhas que une sofisticação e rapidez, desenhada para mulheres que buscam excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FAF9F6] p-8 rounded-[2rem] border border-rose-50 hover:border-rose-100 transition-all group"
            >
              <div className="w-14 h-14 bg-white text-rose-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-cinzel text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div id="video-section" className="bg-[#FAF9F6] rounded-[3rem] p-8 md:p-16 border border-rose-100 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h3 className="font-cinzel text-3xl md:text-4xl text-gray-900 mb-8 leading-tight">
                O que você vai aprender <br />
                <span className="text-rose-400 italic font-light">no nosso curso</span>
              </h3>
              <ul className="space-y-6">
                {modules.map((module, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-5 text-gray-600"
                  >
                    <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-rose-400" />
                    </div>
                    <span className="font-light text-lg">{module}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-900 border-[12px] border-white">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="https://agenciasevenjp.my.canva.site/site-jana-teste/_assets/video/0205bfb4697c49c4ecdc3cd2a7cf5f3f.jpg"
                >
                  <source src="https://agenciasevenjp.my.canva.site/site-jana-teste/_assets/video/c781fe874182b3938375c2794efb8a93.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

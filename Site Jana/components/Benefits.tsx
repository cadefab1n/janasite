'use client';

import { motion } from 'motion/react';
import { Star, MessageCircle, Target, BookOpen, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Metodologia Prática",
    description: "Foco no que realmente importa para o seu dia a dia em mesa."
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Linguagem Simples",
    description: "Explicações didáticas e fáceis de entender, sem enrolação."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Técnica Testada",
    description: "Método validado em anos de atendimento real com clientes."
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Suporte e Orientação",
    description: "Acompanhamento para tirar suas dúvidas durante o aprendizado."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Foco em Lucro",
    description: "Aprenda a valorizar seu trabalho e cobrar o que você merece."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-rose-400 font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Diferenciais</span>
              <h2 className="font-cinzel text-4xl md:text-5xl text-gray-900 mb-8 leading-tight">
                Por que aprender com a <br />
                <span className="text-rose-400 italic font-light text-3xl md:text-4xl">Jana Esmalteria?</span>
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed mb-10">
                Escolher o mentor certo é o primeiro passo para o sucesso. Minha metodologia foi desenhada para transformar sua carreira de forma acolhedora e profissional.
              </p>
              <motion.a
                href="https://api.whatsapp.com/send/?phone=5583996452065"
                target="_blank"
                className="inline-flex items-center gap-4 text-rose-400 font-semibold hover:text-rose-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span>Tire suas dúvidas no WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-rose-50 bg-[#FAF9F6] hover:bg-white hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/20 transition-all group"
              >
                <div className="w-14 h-14 bg-white text-rose-400 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="font-cinzel text-xl text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

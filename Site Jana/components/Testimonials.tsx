'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amanda Silva",
    role: "Nail Designer",
    content: "O curso da Jana mudou minha vida! Antes eu levava 3 horas num alongamento, hoje faço em 1h30 com uma perfeição incrível."
  },
  {
    name: "Beatriz Costa",
    role: "Manicure",
    content: "A didática é maravilhosa. Eu tinha muito medo do Molde F1, mas com as aulas da Janaína tudo ficou muito claro e fácil."
  },
  {
    name: "Carla Oliveira",
    role: "Empreendedora",
    content: "Melhor investimento que fiz este ano. Minhas clientes estão amando a durabilidade e o acabamento natural."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FAF9F6] text-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-4xl md:text-5xl mb-6 text-gray-900"
          >
            Feedbacks de <span className="text-rose-400 italic">alunas</span>
          </motion.h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Veja o que as profissionais que já passaram pelo curso estão dizendo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-[2rem] border border-rose-100 relative shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-rose-200/30" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-rose-300 rounded-full" />
                ))}
              </div>
              <p className="text-gray-600 text-lg font-light italic mb-8 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-cinzel text-xl text-gray-900">{testimonial.name}</p>
                <p className="text-rose-400 text-sm font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'motion/react';
import { ArrowRight, Wallet } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#FAF9F6] p-12 md:p-20 rounded-[3rem] border border-rose-100 shadow-xl shadow-rose-100/20"
        >
          <h2 className="font-cinzel text-4xl md:text-6xl text-gray-900 mb-8 leading-tight">
            Invista no seu <br />
            <span className="text-rose-400 italic font-light">crescimento profissional!</span>
          </h2>
          <p className="text-gray-500 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Transforme sua carreira na área da beleza com uma técnica valorizada e lucrativa. Garanta sua vaga agora mesmo!
          </p>

          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="https://pay.kiwify.com.br/OtN8bnc"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-6 bg-rose-400 text-white rounded-full font-bold text-2xl transition-all shadow-xl shadow-rose-200 flex items-center gap-4"
            >
              Quero me inscrever agora!
              <ArrowRight className="w-7 h-7" />
            </motion.a>
            <div className="flex items-center gap-6 text-gray-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-rose-300" />
                <span>Pagamento seguro</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

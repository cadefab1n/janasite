import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Instagram, ArrowLeft, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackPixelEvent } from '../lib/pixel';
import { INSTAGRAM_LINK, WHATSAPP_NUMBER } from '../constants';

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    trackPixelEvent('Purchase', {
      currency: 'BRL',
      value: 0
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-nude flex items-center justify-center p-6 relative">
      <div className="fixed inset-0 noise-bg pointer-events-none z-50 opacity-20" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-rose/5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-2xl w-full text-center space-y-16 relative z-10"
      >
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-brand-rose/10 rounded-full flex items-center justify-center relative">
            <CheckCircle size={48} strokeWidth={1} className="text-brand-rose" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold rounded-full border-4 border-brand-nude"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-display text-brand-dark tracking-tighter leading-[0.9]">
            A JORNADA <br /> <span className="italic font-serif text-brand-gold">COMEÇA AGORA</span>.
          </h1>
          <p className="text-brand-dark/40 font-light text-xl italic font-serif leading-relaxed">
            Sua inscrição foi confirmada. Verifique seu e-mail para acessar <br className="hidden md:block" /> 
            seu portal de aluna e dar o próximo passo rumo à excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-lg mx-auto">
          <a 
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackPixelEvent('Contact', { content_name: 'Success Instagram' })}
            className="flex items-center justify-center gap-6 px-12 py-8 bg-brand-dark text-white font-bold text-[10px] uppercase tracking-[4px] hover:bg-brand-rose transition-all duration-1000 shadow-2xl"
          >
            <Instagram size={18} /> INSTAGRAM
          </a>
          <button 
            onClick={() => {
              trackPixelEvent('Contact', { content_name: 'Success Support' });
              window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá Janaína, acabei de comprar o curso e estou muito animada!`, '_blank');
            }}
            className="flex items-center justify-center gap-6 px-12 py-8 border border-brand-dark/10 text-brand-dark font-bold text-[10px] uppercase tracking-[4px] hover:bg-brand-dark hover:text-white transition-all duration-1000 shadow-sm"
          >
            <MessageCircle size={18} /> SUPORTE
          </button>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-6 text-brand-dark/30 font-bold text-[10px] uppercase tracking-[5px] hover:text-brand-gold transition-colors"
        >
          <ArrowLeft size={16} /> VOLTAR PARA O INÍCIO
        </button>
      </motion.div>
    </div>
  );
}

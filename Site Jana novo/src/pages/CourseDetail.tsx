import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  MessageCircle, 
  CheckCircle, 
  PlayCircle,
  ExternalLink,
  ChevronRight,
  Star,
  ArrowRight
} from 'lucide-react';
import { COURSES, WHATSAPP_NUMBER } from '../constants';

import { trackPixelEvent } from '../lib/pixel';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-nude">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display">Curso não encontrado</h1>
          <button onClick={() => navigate('/')} className="text-brand-gold font-medium uppercase tracking-[3px] text-xs">Voltar para o início</button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = (message?: string) => {
    trackPixelEvent('Contact');
    const text = message ? encodeURIComponent(message) : `Olá Janaína, gostaria de saber mais sobre o curso ${course.title}.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleCheckout = () => {
    try {
      // Rastreia o início do checkout
      trackPixelEvent('InitiateCheckout', {
        content_name: course.title,
        content_ids: [course.id],
        content_type: 'product',
        value: 0,
        currency: 'BRL'
      });

      // Rastreia a compra finalizada (conforme solicitado para este fluxo)
      trackPixelEvent('Purchase', {
        content_name: course.title,
        content_ids: [course.id],
        content_type: 'product',
        value: 0, 
        currency: 'BRL'
      });
    } catch (error) {
      console.error('Checkout Pixel Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-brand-nude relative">
      <div className="fixed inset-0 noise-bg pointer-events-none z-50 opacity-20" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-rose/5 pointer-events-none" />
      
      {/* --- HEADER --- */}
      <header className="absolute top-0 left-0 right-0 z-[100]">
        <div className="container mx-auto px-6 md:px-12 py-10 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-8 text-brand-dark/40 hover:text-brand-dark font-bold uppercase tracking-[6px] text-[10px] transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> VOLTAR
          </button>
          
          <button 
            onClick={() => {
              trackPixelEvent('Contact', { content_name: 'Suporte Header Detail' });
              handleWhatsApp();
            }}
            className="px-8 py-3 bg-brand-dark/5 text-[10px] font-bold uppercase tracking-[4px] text-brand-dark/40 hover:bg-brand-dark hover:text-white transition-all duration-700"
          >
            SUPORTE
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12 pt-56 pb-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-24 items-start">
          
          {/* --- CONTENT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 space-y-32"
          >
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <span className="text-brand-gold font-bold uppercase tracking-[6px] text-[9px] bg-brand-gold/5 px-4 py-1.5 rounded-full">Formação Exclusiva</span>
              </div>
              <h1 className="text-7xl md:text-[8vw] font-display text-brand-dark leading-[0.8] tracking-tighter">
                {course.title.toUpperCase()}
              </h1>
              <p className="text-3xl text-brand-dark/40 leading-tight font-serif italic max-w-2xl">
                {course.description}
              </p>
            </div>

            <div className="space-y-24">
              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-brand-dark uppercase tracking-[5px]">O Conteúdo do Curso</h3>
                  <div className="h-[1px] flex-grow ml-12 bg-brand-dark/5" />
                </div>
                <div className="grid sm:grid-cols-2 gap-y-12 gap-x-20">
                  {course.modules?.map((module, i) => (
                    <div key={i} className="flex gap-8 items-start group">
                      <div className="font-display text-4xl text-brand-gold/20 group-hover:text-brand-gold transition-colors duration-700">
                        0{i + 1}
                      </div>
                      <span className="text-brand-dark font-light text-xl leading-snug pt-2">{module}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-16 modern-border space-y-12 group hover:shadow-card transition-all duration-700">
                <div className="space-y-2">
                  <p className="text-[9px] font-bold text-brand-gold uppercase tracking-[5px]">Visão e Metodologia</p>
                  <div className="w-12 h-[1px] bg-brand-gold" />
                </div>
                <p className="text-brand-dark/60 leading-relaxed font-light text-2xl italic font-serif">
                   "{course.details || course.description}"
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- SIDEBAR --- */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-4 sticky top-48 space-y-16"
          >
            {course.videoUrl ? (
              <div className="relative group">
                <div className="relative aspect-video modern-border overflow-hidden bg-brand-dark">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src={course.videoUrl} 
                    title="Course Intro"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
            ) : (
              <div className="aspect-[3/4] modern-border overflow-hidden group">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-105"
                />
              </div>
            )}

            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <p className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[6px]">Investimento Único</p>
                </div>
                <p className="text-7xl font-display text-brand-dark tracking-tighter mix-blend-difference">{course.price}</p>
              </div>

              <div className="flex flex-col gap-8">
                {course.kiwifyUrl && (
                  <a 
                    href={course.kiwifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleCheckout}
                    className="group px-16 py-10 bg-brand-dark text-white font-bold text-[11px] uppercase tracking-[6px] shadow-2xl hover:bg-brand-rose transition-all duration-1000 text-center flex items-center justify-center gap-6"
                  >
                    GARANTIR ACESSO <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </a>
                )}
                <button 
                  onClick={() => {
                    trackPixelEvent('Contact', { content_name: 'Consultoria Detail' });
                    handleWhatsApp();
                  }}
                  className="px-12 py-10 border border-brand-dark/10 text-brand-dark/50 font-bold text-[11px] uppercase tracking-[6px] hover:bg-brand-dark hover:text-white transition-all duration-1000"
                >
                  DÚVIDAS FREQUENTES
                </button>
              </div>

              <div className="grid grid-cols-2 gap-12 border-t border-brand-dark/5 pt-12">
                <div className="space-y-4">
                  <Star size={20} className="text-brand-gold" strokeWidth={1.5} />
                  <p className="text-[9px] font-bold uppercase tracking-[4px] text-brand-dark/30">CERTIFICADO</p>
                </div>
                <div className="space-y-4">
                  <PlayCircle size={20} className="text-brand-gold" strokeWidth={1.5} />
                  <p className="text-[9px] font-bold uppercase tracking-[4px] text-brand-dark/30">ACESSO VITALÍCIO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-white pt-40 pb-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center space-y-12">
          <h3 className="text-4xl font-display italic text-brand-gold text-stroke">Janaína Melo</h3>
           <p className="text-[9px] uppercase tracking-[6px] text-white/10">© {new Date().getFullYear()} JANAÍNA MELO. BELEZA E SUCESSO.</p>
        </div>
      </footer>
    </div>
  );
}

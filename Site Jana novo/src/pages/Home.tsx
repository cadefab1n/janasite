import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  Star, 
  CheckCircle,
  ArrowRight,
  Plus
} from 'lucide-react';
import Quiz from '../components/Quiz';
import { CourseCard, BenefitIcon, FAQItem } from '../components/UI';
import { COURSES, FAQS, BENEFITS, WHATSAPP_NUMBER, INSTAGRAM_LINK, TESTIMONIALS } from '../constants';
import { useNavigate } from 'react-router-dom';

import { trackPixelEvent } from '../lib/pixel';

export default function Home() {
  const navigate = useNavigate();

  const handleWhatsApp = (message?: string) => {
    trackPixelEvent('Contact', { content_name: 'WhatsApp Contact' });
    const text = message ? encodeURIComponent(message) : 'Olá Janaína, vim pelo site e gostaria de saber mais sobre seus cursos.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleNavigateToCourse = (id: string, title: string) => {
    trackPixelEvent('ViewContent', {
      content_name: title,
      content_ids: [id],
      content_type: 'product'
    });
    navigate(`/curso/${id}`);
  };

  const handleConsultancyClick = () => {
    trackPixelEvent('Contact', { content_name: 'Consultoria' });
    handleWhatsApp('Olá Janaína, gostaria de saber mais sobre sua consultoria.');
  };

  return (
    <div className="min-h-screen selection:bg-brand-rose/30 selection:text-brand-dark bg-brand-nude relative">
      <div className="fixed inset-0 noise-bg pointer-events-none z-50 opacity-20" />
      
      {/* --- FLOATING WHATSAPP --- */}
      <motion.button
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          trackPixelEvent('Contact', { content_name: 'WhatsApp Floating' });
          handleWhatsApp();
        }}
        className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[60] bg-brand-dark text-white p-6 rounded-full shadow-gold-glow flex items-center justify-center hover:bg-brand-gold transition-all duration-700 group"
      >
        <MessageCircle size={26} className="group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[110vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 soft-glow opacity-50" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-rose/5 transform skew-x-[-12deg] translate-x-20 pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-12 space-y-12 text-center lg:text-left"
          >
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-6"
              >
                <div className="w-12 h-[1px] bg-brand-gold/30" />
                <span className="text-brand-gold font-bold uppercase tracking-[8px] text-[10px]">Elegância e Precisão</span>
              </motion.div>
              
              <h1 className="text-[12vw] lg:text-[10vw] font-display text-brand-dark leading-[0.8] tracking-[-0.04em]">
                REVOLUCIONE <br />
                <span className="italic font-serif text-brand-gold relative">
                  SUA CARREIRA
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute -bottom-4 left-0 h-[2px] bg-brand-rose" 
                  />
                </span>.
              </h1>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <p className="lg:col-span-5 text-xl text-brand-dark/40 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                Domine as técnicas de Molde F1 que estão transformando o faturamento de milhares de especialistas ao redor do mundo.
              </p>
              
              <div className="lg:col-span-7 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <button 
                  onClick={() => {
                    trackPixelEvent('Contact', { content_name: 'Hero Começar Agora' });
                    handleWhatsApp('Olá Janaína, quero elevar meu nível profissional e garantir minha vaga!');
                  }}
                  className="group px-16 py-8 bg-brand-dark text-white font-bold text-[10px] uppercase tracking-[5px] shadow-2xl hover:bg-brand-rose transition-all duration-1000 flex items-center justify-center gap-6"
                >
                  ACADEMIA ONLINE <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button 
                  onClick={() => handleConsultancyClick()}
                  className="px-16 py-8 border border-brand-dark/10 text-brand-dark font-bold text-[10px] uppercase tracking-[5px] hover:bg-brand-dark hover:text-white transition-all duration-1000"
                >
                  CONSULTORIA
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MARQUEE BENEFITS --- */}
      <div className="py-20 bg-white/50 backdrop-blur-md border-y border-brand-dark/5 overflow-hidden">
        <div className="flex whitespace-nowrap gap-24 animate-marquee">
          {[...BENEFITS, ...BENEFITS].map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-8 text-brand-dark/30 uppercase tracking-[8px] text-[11px] font-bold group hover:text-brand-gold transition-colors">
              <div className="w-2 h-2 rounded-full bg-brand-gold opacity-50" />
              {benefit.title}
            </div>
          ))}
        </div>
      </div>

      {/* --- QUIZ SECTION --- */}
      <section id="quiz" className="py-60 bg-brand-peach relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-brand-dark/5" />
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-10 h-[10px] rounded-full border border-brand-gold" />
              <span className="text-brand-gold font-bold uppercase tracking-[8px] text-[10px]">Consultoria</span>
            </div>
            <h2 className="text-7xl font-display text-brand-dark leading-[0.9] tracking-tighter">DESCOBRIR <br />O SEU <br /><span className="italic font-serif text-brand-gold">CAMINHO</span>.</h2>
            <p className="text-brand-dark/40 font-light text-xl italic font-serif leading-relaxed">
              "Permita-me guiar sua jornada. O primeiro passo para a excelência começa com a escolha certa do seu treinamento."
            </p>
          </div>
          <div className="lg:col-span-7 bg-white p-8 md:p-20 shadow-card modern-border rounded-[2px] relative">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-rose/20 rounded-full blur-3xl" />
            <Quiz />
          </div>
        </div>
      </section>

      {/* --- WHAT IS MOLDE F1 --- */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-16">
          <div className="space-y-6">
            <span className="text-brand-gold font-bold uppercase tracking-[5px] text-[9px]">A Técnica</span>
            <h2 className="text-5xl md:text-7xl font-display text-brand-dark tracking-tighter">O QUE É O <span className="italic font-serif serif text-brand-gold">MOLDE F1</span>?</h2>
            <p className="text-2xl text-brand-dark/50 font-serif italic leading-relaxed">
              "Uma técnica moderna de alongamento de unhas que une sofisticação e rapidez, desenhada para mulheres que buscam excelência."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-4 p-8 modern-border">
              <h3 className="text-sm font-bold uppercase tracking-[3px] text-brand-dark">Resultado Natural</h3>
              <p className="text-brand-dark/40 font-light">Alongamentos sofisticados que se fundem perfeitamente com a unha natural, sem parecer artificial.</p>
            </div>
            <div className="space-y-4 p-8 modern-border">
              <h3 className="text-sm font-bold uppercase tracking-[3px] text-brand-dark">Agilidade Incrível</h3>
              <p className="text-brand-dark/40 font-light">Reduza drasticamente o tempo que você gasta em cada cliente sem perder a qualidade final.</p>
            </div>
            <div className="space-y-4 p-8 modern-border">
              <h3 className="text-sm font-bold uppercase tracking-[3px] text-brand-dark">Alta Durabilidade</h3>
              <p className="text-brand-dark/40 font-light">Técnica testada que garante unhas impecáveis e resistentes por muito mais tempo.</p>
            </div>
            <div className="space-y-4 p-8 modern-border">
              <h3 className="text-sm font-bold uppercase tracking-[3px] text-brand-dark">Mais Dinheiro</h3>
              <p className="text-brand-dark/40 font-light">Atenda mais clientes em menos tempo e valorize seu serviço cobrando o preço justo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- COURSES --- */}
      <section id="cursos" className="py-40 bg-white">
        <div className="container mx-auto px-6 space-y-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-brand-dark/5 pb-20">
            <div className="space-y-6">
              <span className="text-brand-gold font-bold uppercase tracking-[5px] text-[9px]">Aprenda Agora</span>
              <h2 className="text-7xl font-display text-brand-dark tracking-tighter">LISTA DE <span className="italic font-serif serif text-brand-gold">CURSOS</span></h2>
            </div>
            <div className="flex gap-16">
               <div className="text-right">
                <p className="text-3xl font-display text-brand-dark italic">02</p>
                <p className="text-[9px] uppercase tracking-[4px] text-brand-dark/30 font-bold">Cursos</p>
               </div>
               <div className="text-right">
                <p className="text-3xl font-display text-brand-dark">100%</p>
                <p className="text-[9px] uppercase tracking-[4px] text-brand-dark/30 font-bold">Vitalício</p>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <CourseCard 
                  title={course.title}
                  description={course.description}
                  image={course.image}
                  onSelect={() => handleNavigateToCourse(course.id, course.title)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT MENTOR --- */}
      <section className="py-60 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="aspect-[4/5] overflow-hidden oval-mask">
              <img 
                src="https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80&w=1080" 
                alt="Manicure de Luxo" 
                className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 glass p-16 shadow-premium border border-white/40 whitespace-nowrap hidden lg:block">
               <p className="text-[10px] font-bold uppercase tracking-[6px] text-brand-dark/40 mb-3 italic">A Mentora</p>
               <p className="text-3xl font-display uppercase tracking-widest text-brand-dark">Janaína Melo</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-20">
            <div className="space-y-8">
              <span className="text-brand-gold font-bold uppercase tracking-[5px] text-[9px] bg-brand-gold/5 px-4 py-1.5 rounded-full">Experiência Real</span>
              <h2 className="text-7xl font-display text-brand-dark leading-[0.8] tracking-tighter">
                ENSINO COM <br />
                <span className="italic font-serif serif text-brand-rose">AMOR</span>
              </h2>
              <p className="text-xl text-brand-dark/50 font-light leading-relaxed font-serif italic">
                "Minha missão é ajudar você a crescer na profissão, ganhando mais dinheiro e tendo mais tempo livre com técnicas simples e eficientes."
              </p>
            </div>

            <div className="space-y-8 border-t border-brand-dark/5 pt-12">
              {[
                { title: 'RAPIDEZ EM MESA', desc: 'Sua mesa 2x mais rápida com o Molde F1 Expert.' },
                { title: 'ACABAMENTO FINO', desc: 'Acabamento de luxo nível europeu.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-8 group">
                  <span className="text-brand-gold font-display text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[4px] text-brand-dark mb-2">{item.title}</h4>
                    <p className="text-sm text-brand-dark/40 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-40 bg-brand-nude">
        <div className="container mx-auto px-6 space-y-32">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
             <span className="text-brand-gold font-bold uppercase tracking-[5px] text-[9px]">Vozes</span>
            <h2 className="text-7xl font-display text-brand-dark tracking-tighter">HISTÓRIAS DE <br /><span className="italic font-serif serif text-brand-rose">SUCESSO</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-white modern-border space-y-12 transition-all duration-700 hover:shadow-premium"
              >
                <div className="flex gap-1 text-brand-gold">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={12} fill="currentColor" />)}
                </div>
                <p className="text-brand-dark/60 italic font-serif text-2xl leading-tight">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-6 pt-6 border-t border-brand-dark/5">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-brand-dark flex items-center justify-center text-[10px] text-brand-gold font-bold border-2 border-white shadow-xl">
                    {testimonial.avatar ? <img src={testimonial.avatar} alt={testimonial.name} /> : testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[3px] text-brand-dark">{testimonial.name}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[4px] text-brand-rose">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-60 relative bg-brand-dark overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-rose/5 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white space-y-32 max-w-6xl">
          <div className="space-y-12">
            <h2 className="text-[12vw] md:text-[14vw] font-display leading-[0.75] text-white tracking-[-0.05em]">
              DOMINE <br /><span className="italic font-serif font-normal text-brand-gold text-stroke">A TÉCNICA.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
            <button 
              onClick={() => {
                trackPixelEvent('Contact', { content_name: 'Final CTA - Quero Minha Vaga' });
                handleWhatsApp('Quero elevar meu padrão profissional na técnica Molde F1 com Janaína Melo!');
              }}
              className="px-20 py-10 bg-brand-gold text-white font-bold text-[11px] uppercase tracking-[6px] shadow-gold-glow hover:bg-white hover:text-brand-dark transition-all duration-1000"
            >
              GARANTIR MINHA VAGA
            </button>
            <button 
              onClick={() => {
                trackPixelEvent('Contact', { content_name: 'Final CTA - Falar Jana' });
                handleWhatsApp();
              }}
              className="px-12 py-10 border-b border-white/20 text-white/50 font-bold text-[11px] uppercase tracking-[6px] hover:text-white transition-all duration-700 hover:border-white"
            >
              FALAR COM A MENTORA
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-brand-dark text-white pt-40 pb-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-12 gap-24 pb-32">
          <div className="md:col-span-6 space-y-12">
            <h3 className="text-5xl font-display italic text-brand-gold text-stroke">Janaína Melo</h3>
            <p className="text-white/40 max-w-md font-light leading-relaxed font-serif italic text-2xl">
              "Redefinindo a beleza através da precisão e experiência."
            </p>
            <div className="flex gap-10">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noreferrer" 
                onClick={() => trackPixelEvent('Contact', { content_name: 'Instagram Footer' })}
                className="text-white/20 hover:text-brand-gold transition-colors duration-500"
              >
                <Instagram size={24} />
              </a>
              <button 
                onClick={() => {
                  trackPixelEvent('Contact', { content_name: 'WhatsApp Footer' });
                  handleWhatsApp();
                }} 
                className="text-white/20 hover:text-brand-gold transition-colors duration-500 cursor-pointer"
              >
                <MessageCircle size={24} />
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[5px] text-brand-gold">Menu</h4>
            <ul className="space-y-6 text-white/30 text-[10px] font-bold tracking-[4px]">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">INÍCIO</button></li>
              <li><a href="#cursos" className="hover:text-white transition-colors">CURSOS</a></li>
              <li><a href="#quiz" className="hover:text-white transition-colors">TESTE</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[5px] text-brand-gold">Contato</h4>
            <ul className="space-y-10 text-white/30 text-[10px] font-bold tracking-[4px]">
              <li className="flex items-start gap-6">
                <MapPin size={18} className="text-brand-gold flex-shrink-0" />
                <span>JOÃO PESSOA - PB</span>
              </li>
              <li className="flex items-center gap-6">
                <MessageCircle size={18} className="text-brand-gold" />
                <span>+55 83 99645-2065</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[8px] uppercase tracking-[6px] text-white/10">© {new Date().getFullYear()} JANAÍNA MELO. BELEZA E SUCESSO.</p>
          <div className="flex gap-12 text-[8px] uppercase tracking-[66px] text-white/10">
            <button className="hover:text-white transition-colors uppercase tracking-[6px]">PRIVACIDADE</button>
            <button className="hover:text-white transition-colors uppercase tracking-[6px]">TERMOS</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

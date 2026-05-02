import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ArrowLeft, Send, ArrowRight } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { trackPixelEvent } from '../lib/pixel';

const STEPS = [
  {
    id: 'level',
    question: 'Qual seu nível hoje?',
    options: [
      { label: 'Iniciante', value: 'Iniciante' },
      { label: 'Já atuo na área', value: 'Atuante' },
      { label: 'Quero me aperfeiçoar', value: 'Aperfeiçoamento' },
    ],
  },
  {
    id: 'goal',
    question: 'Qual seu maior objetivo?',
    options: [
      { label: 'Fazer renda extra', value: 'Renda Extra' },
      { label: 'Trabalhar profissionalmente', value: 'Profissional' },
      { label: 'Abrir meu próprio espaço', value: 'Próprio Espaço' },
    ],
  },
  {
    id: 'interest',
    question: 'Qual curso mais te interessa?',
    options: [
      { label: 'Molde F1 Expert', value: 'Molde F1' },
      { label: 'Unhas Softgel', value: 'Softgel' },
    ],
  },
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [userData, setUserData] = useState({ name: '', phone: '' });

  const handleOptionSelect = (option: string) => {
    const stepId = STEPS[currentStep].id;
    setAnswers({ ...answers, [stepId]: option });
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowLeadForm(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      trackPixelEvent('Lead', {
        content_name: 'Quiz de Direcionamento',
        content_category: 'Nail Design',
        user_name: userData.name,
        interest: answers.interest || 'Não informado'
      });
    } catch (error) {
      console.error('Pixel Error:', error);
    }

    const message = `Olá Janaína, fiz o quiz no site e quero saber mais sobre o curso ideal para mim.\n\n` +
      `*Meus Dados:*\nNome: ${userData.name}\nWhatsApp: ${userData.phone}\n\n` +
      `*Minhas Respostas:*\n` +
      `Nível: ${answers.level || 'Não informado'}\n` +
      `Objetivo: ${answers.goal || 'Não informado'}\n` +
      `Interesse: ${answers.interest || 'Não informado'}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-1 relative overflow-hidden">
      {!showLeadForm ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {STEPS.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-[2px] w-8 transition-all duration-1000 ${i <= currentStep ? 'bg-brand-gold' : 'bg-brand-dark/10'}`} 
                  />
                ))}
              </div>
              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="text-brand-dark/40 hover:text-brand-dark transition-colors flex items-center gap-3 text-[10px] font-bold uppercase tracking-[4px]"
                >
                  <ArrowLeft size={14} /> VOLTAR
                </button>
              )}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-display text-brand-dark leading-tight tracking-tight">
              {STEPS[currentStep].question}
            </h3>

            <div className="grid gap-4">
              {STEPS[currentStep].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionSelect(option.value)}
                  className="group flex items-center justify-between p-8 rounded-[2px] border border-brand-dark/5 bg-white hover:border-brand-gold hover:shadow-card transition-all duration-700 text-left"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[4px] text-brand-dark/60 group-hover:text-brand-dark">{option.label}</span>
                  <ChevronRight size={18} className="text-brand-gold group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6 text-center">
            <div className="inline-flex p-6 rounded-full bg-brand-rose/10 text-brand-rose mb-6">
              <Send size={40} strokeWidth={1} />
            </div>
            <h3 className="text-4xl font-display text-brand-dark tracking-tight">Caminho Revelado!</h3>
            <p className="text-brand-dark/40 font-light text-lg">Preencha seus dados para conversarmos sobre o seu curso ideal e receber sua mentoria personalizada.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8 text-left max-w-md mx-auto">
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-[6px] text-brand-dark/30">Seu Nome Completo</label>
              <input
                required
                type="text"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                className="w-full py-6 bg-transparent border-b border-brand-dark/10 focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/10 text-xl font-serif italic"
                placeholder="Ex: Maria Janaina"
              />
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] uppercase font-bold tracking-[6px] text-brand-dark/30">WhatsApp para Contato</label>
              <input
                required
                type="tel"
                value={userData.phone}
                onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                className="w-full py-6 bg-transparent border-b border-brand-dark/10 focus:border-brand-gold focus:outline-none transition-all placeholder:text-brand-dark/10 text-xl font-serif italic"
                placeholder="Ex: (83) 99999-9999"
              />
            </div>
            <button
              type="submit"
              className="w-full py-8 mt-8 bg-brand-dark text-white font-bold text-[10px] uppercase tracking-[6px] shadow-2xl hover:bg-brand-rose transition-all duration-1000 flex items-center justify-center gap-6 group"
            >
              SOLICITAR CONSULTORIA <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}

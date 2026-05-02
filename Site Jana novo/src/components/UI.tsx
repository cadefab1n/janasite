import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  onSelect: () => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, onSelect }) => {
  return (
    <motion.div
      onClick={onSelect}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer relative bg-white overflow-hidden modern-border transition-all duration-1000 hover:shadow-card p-6 flex flex-col gap-8 rounded-[2px]"
    >
      <div className="aspect-[4/5] overflow-hidden relative">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>
      
      <div className="space-y-4 flex-grow">
        <h3 className="text-xs font-bold uppercase tracking-[5px] text-brand-dark group-hover:text-brand-gold transition-all duration-500">{title}</h3>
        <p className="text-brand-dark/50 text-[14px] font-light leading-relaxed italic font-serif">
          {description}
        </p>
      </div>
      
      <div className="pt-4 border-t border-brand-dark/[0.03]">
        <button
          className="text-[10px] font-bold text-brand-gold group-hover:text-brand-dark transition-all duration-500 inline-flex items-center gap-6 uppercase tracking-[4px]"
        >
          EXPLORAR <div className="w-12 h-[1px] bg-brand-gold group-hover:w-16 group-hover:bg-brand-dark transition-all duration-700" />
        </button>
      </div>
    </motion.div>
  );
};

export const BenefitIcon: React.FC<{ title: string; iconName: string }> = ({ title, iconName }) => {
  const Icon = (Icons as any)[iconName] as LucideIcon;
  
  return (
    <div className="flex items-center gap-4 bg-white modern-border px-6 py-4 transition-all hover:bg-brand-nude group">
      <div className="text-brand-gold group-hover:scale-110 transition-transform">
        {Icon && <Icon size={14} strokeWidth={2} />}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-[4px] text-brand-dark/60">{title}</span>
    </div>
  );
};

export const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-dark/5 group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-10 focus:outline-none cursor-pointer hover:translate-x-1 transition-all duration-500"
      >
        <h4 className="text-xl md:text-3xl font-display text-brand-dark font-light">{question}</h4>
        <div className={`transition-transform duration-700 ${isOpen ? 'rotate-45 text-brand-rose' : 'text-brand-gold'}`}>
          <Icons.Plus size={20} strokeWidth={1} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-12 text-brand-dark/50 leading-relaxed font-light text-xl italic font-serif">
               "{answer}"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

'use client';

import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] pt-24 pb-12 border-t border-rose-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-cinzel text-3xl text-gray-900 mb-6">Janaína Melo</h3>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mb-8">
              Especialista em Nail Design e instrutora da técnica Molde F1. Transformando manicures em especialistas de sucesso desde 2011.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/esmalteriadajana_jp/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border border-rose-50 flex items-center justify-center text-gray-400 hover:bg-rose-50 hover:text-rose-400 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white border border-rose-50 flex items-center justify-center text-gray-400 hover:bg-rose-50 hover:text-rose-400 transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5583996452065" target="_blank" className="w-12 h-12 rounded-full bg-white border border-rose-50 flex items-center justify-center text-gray-400 hover:bg-rose-50 hover:text-rose-400 transition-all shadow-sm">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-gray-900 mb-6 uppercase tracking-widest">Links Úteis</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li><a href="#sobre" className="hover:text-rose-400 transition-colors">Sobre a Jana</a></li>
              <li><a href="#video-section" className="hover:text-rose-400 transition-colors">O Curso</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Depoimentos</a></li>
              <li><a href="https://pay.kiwify.com.br/OtN8bnc" className="hover:text-rose-400 transition-colors">Inscrição</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel text-xl text-gray-900 mb-6 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-4 text-gray-500 font-light">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-rose-300 flex-shrink-0" />
                <span>(83) 99645-2065</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-300 flex-shrink-0" />
                <span>Jana Esmalteria, João Pessoa - PB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-rose-50 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm font-light">
          <p>© {currentYear} Janaína Melo – Todos os direitos reservados</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-rose-400 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-rose-400 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

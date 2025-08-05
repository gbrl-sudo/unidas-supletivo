'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/constants/content';
import { Users, Star, BookOpen } from 'lucide-react';

export function HeroSection() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const headerOffset = 96; // Corresponds to h-24 in TailwindCSS
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section id="inicio" className="relative min-h-screen">
      <Image
        src="/background.jpg"
        alt="Ambiente de estudos"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      <div className="grid lg:grid-cols-2 min-h-screen relative z-10">
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-8 sm:p-12 md:p-16">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-6">
            Termine seus estudos e{' '}
            <span className="text-primary">conquiste</span>{' '}
            seus{' '}
            <span className="relative inline-block pb-2">
              objetivos
              <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300/70" />
            </span>
          </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-10">
              Conclua o Ensino Fundamental e Médio com flexibilidade de horários e metodologia adaptada para jovens e adultos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-lg transform hover:scale-105 transition-transform duration-300 flex items-center gap-2"
              >
                <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="pointer-events-none" />
                Matricule-se pelo WhatsApp
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                                className="border-primary text-primary hover:bg-primary/10 transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleScrollToSection('escolha-como-quer-estudar')}
              >
                Conheça os Cursos
              </Button>

            </div>
        </div>
        
        <div className="relative hidden lg:block">
          <Image 
            src="/student.png"
            alt="Estudante sorrindo com uma mochila"
            fill
            className="object-contain object-bottom pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
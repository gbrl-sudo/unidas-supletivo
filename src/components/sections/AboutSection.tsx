'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Clock, Award, Heart } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

const aboutContent = {
  title: 'Quem somos',
  subtitle: 'Educação que transforma vidas',
  description: 'Há mais de 15 anos, ajudamos pessoas a retomar seus estudos e conquistar novas oportunidades. Nossa experiência nos ensinou que cada aluno tem seu próprio ritmo e suas próprias necessidades.',
  cta: 'Conheça nossos cursos',

  differentials: [
    {
      icon: Users,
      title: 'Professores dedicados',
      description: 'Equipe experiente em educação de jovens e adultos'
    },
    {
      icon: Clock,
      title: 'Horários flexíveis',
      description: 'Aulas que se adaptam à sua rotina de trabalho'
    },
    {
      icon: Award,
      title: 'Certificado reconhecido',
      description: 'Diploma válido em todo o Brasil'
    },
    {
      icon: Heart,
      title: 'Ambiente acolhedor',
      description: 'Espaço respeitoso para quem está retomando os estudos'
    }
  ]
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-semibold text-primary uppercase tracking-wider">{aboutContent.subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{aboutContent.title}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{aboutContent.description}</p>
            
            <div className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                {aboutContent.differentials.map((item, index) => (
                  <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-gray-600 pt-2">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>


          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Image
              src="/logo_unidas.svg"
              alt="Logo da Unidas"
              width={480}
              height={480}
              className="object-contain pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { FAQSection } from '@/components/sections/FAQSection';

import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { COURSES, CONTACT_INFO } from '@/constants/content';
import { 
  Clock, 
  BookOpen, 
  CheckCircle,
  FileText,
  Award,
  ArrowLeft,
  Info
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ElementType } from 'react';

export default function SupletivoPresencialPage() {
  const course = COURSES.presencial;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const accordionItems: {
    id: string;
    title: string;
    icon: ElementType;
    content: React.ReactNode;
  }[] = [
    {
      id: 'requisitos-duracao',
      title: 'Requisitos e Duração',
      icon: Clock,
      content: (
        <div className="space-y-4">
          <div className="rounded-lg p-4 bg-gray-50 border">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Idade Mínima</h4>
            <p className="text-lg text-gray-600">A EJA é destinada para maiores de 18 anos.</p>
          </div>
          <div className="rounded-lg p-4 bg-gray-50 border">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Duração do Curso</h4>
            <p className="text-lg text-gray-600">A duração do curso é de 4 a 6 meses.</p>
          </div>
          <div className="rounded-lg p-4 bg-gray-50 border">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Documentos Necessários</h4>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {['RG e CPF', 'Certidão de nascimento/casamento', 'Comprovante de residência', 'Histórico do fundamental'].map((doc, index) => (
                <li key={index} className="flex items-center text-lg text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'metodologia-avaliacao',
      title: 'Metodologia e Avaliação',
      icon: Info,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Como Funciona</h4>
            <p className="text-lg text-gray-600">
              O curso é 80% EAD e 20% presencial. Os 80% correspondem aos conteúdos na plataforma online, e os 20% a uma atividade avaliativa realizada no polo de apoio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Materiais de Aprendizagem</h4>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {['Trilha de Aprendizagem', 'E-books', 'Slides', 'Vídeos', 'Mapa Conceitual'].map((material, index) => (
                <li key={index} className="flex items-center text-lg text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {material}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Avaliação</h4>
            <p className="text-lg text-gray-600">
              A avaliação consiste em 1 atividade com 5 questões objetivas, valendo 2,0 pontos cada. O aluno precisa atingir a média 6,0 e tem até 3 tentativas para refazer a avaliação e alcançar a média.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'conteudo-curso',
      title: 'Conteúdo do Curso',
      icon: BookOpen,
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Módulo I - 240 HORAS</h4>
            <ul className="space-y-2">
              {['Introdução ao EAD', 'Comunicação Empresarial', 'Desinibição, Dicção e Oratória', 'Empreendedorismo e Gestão'].map((subject, index) => (
                <li key={index} className="flex items-center text-lg text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Módulo II - 960 HORAS</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {['Língua Portuguesa e Literatura', 'Língua Estrangeira', 'Educação Física', 'Artes', 'Matemática', 'Geografia', 'Química', 'Física', 'Biologia', 'Filosofia', 'Sociologia', 'História'].map((subject, index) => (
                <li key={index} className="flex items-center text-lg text-gray-600">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white">
        <div className="grid md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-md">
              <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao início
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {course.subtitle}
              </p>
              <p className="text-white/80 mb-8">
                {course.description}
              </p>
              <div className="flex">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  onClick={handleWhatsAppClick}
                >
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={20} height={20} className="mr-2 pointer-events-none" />
                  Matricule-se Agora
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 h-80 md:h-full">
            <div className="relative h-full w-full">
              <Image
                src={course.image}
                alt="Supletivo Presencial"
                fill
                className="object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Tudo sobre o curso</h2>
          <p className="text-xl text-center text-gray-600 mb-10">Tire suas dúvidas sobre nossa metodologia, duração, matérias e muito mais.</p>
          
          <Accordion type="single" collapsible className="w-full" defaultValue="como-funciona">
            {accordionItems.map(item => (
              <AccordionItem value={item.id} key={item.id} className="border-b">
                <AccordionTrigger className="text-xl font-semibold text-gray-800 hover:no-underline py-4">
                  <div className="flex items-center">
                    <item.icon className="w-6 h-6 mr-4 text-primary" />
                    {item.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6 px-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
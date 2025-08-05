'use client';

import { Button } from '@/components/ui/button';
import { COURSES } from '@/constants/content';
import { Users, Monitor, Calendar, Check } from 'lucide-react';
import Link from 'next/link';

export function CoursesSection() {
  return (
    <section id="escolha-como-quer-estudar" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha como quer estudar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos duas modalidades para você terminar seus estudos: presencial ou online. 
            Ambas com a mesma qualidade e certificado reconhecido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Curso Presencial */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col">
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {COURSES.presencial.title}
                </h3>
                <p className="text-primary font-medium">
                  {COURSES.presencial.subtitle}
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {COURSES.presencial.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span>Duração: {`${COURSES.presencial.duration.fundamental} (Fundamental) / ${COURSES.presencial.duration.medio} (Médio)`}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {COURSES.presencial.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-auto">
              <Button size="lg" className="w-full" asChild>
                <Link href="/supletivo-presencial">Fazer inscrição</Link>
              </Button>
            </div>
          </div>

          {/* Curso Online */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 flex flex-col">
            <div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {COURSES.ead.title}
                </h3>
                <p className="text-primary font-medium">
                  {COURSES.ead.subtitle}
                </p>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {COURSES.ead.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span>Duração: {COURSES.ead.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {COURSES.ead.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center mt-auto">
              <Button size="lg" className="w-full" asChild>
                <Link href="/supletivo-distancia">Fazer inscrição</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
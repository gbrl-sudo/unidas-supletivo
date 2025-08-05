'use client';

import { STATS } from '@/constants/content';
import CountUp from 'react-countup';

export function StatsSection() {
  const stats = [
    {
      value: '33706',
      label: 'Alunos Matriculados',
      description: 'Estudantes ativos em nossa plataforma',
      suffix: ''
    },
    {
      value: STATS.yearsExperience,
      label: 'Anos de Experiência',
      description: 'Tradição e qualidade no ensino',
      suffix: ''
    },
    {
      value: STATS.approvalRate,
      label: 'Taxa de Aprovação',
      description: 'Índice de sucesso dos estudantes',
      suffix: '%'
    },
    {
      value: STATS.satisfaction,
      label: 'Satisfação',
      description: 'Alunos satisfeitos com o método',
      suffix: '%'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Números que mostram nossa dedicação em ajudar você a conquistar seus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-yellow-300">
                    <CountUp
                      end={parseInt(stat.value.replace(/[^0-9]/g, ''))}
                      duration={2.75}
                      separator="."
                      suffix={stat.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievement */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Reconhecimento e Qualidade
            </h3>
            <p className="text-white/90 leading-relaxed">
              Nossa instituição é reconhecida pelo Ministério da Educação e 
              mantém parcerias com órgãos educacionais para garantir a melhor 
              qualidade de ensino. Todos os nossos certificados têm validade 
              nacional e são aceitos em universidades e concursos públicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
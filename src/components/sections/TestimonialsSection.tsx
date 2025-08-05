'use client';

import { TESTIMONIALS } from '@/constants/content';
import { Star, Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Histórias de quem{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">conseguiu</span>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-300 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossos alunos mudaram suas vidas terminando os estudos. 
            Você também pode conseguir!
          </p>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 5000 })]}
          className="max-w-5xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed text-lg">
                      {testimonial.text}
                    </blockquote>

                    <div className="border-t pt-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600">
                            {testimonial.age} anos • {testimonial.course}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>


      </div>
    </section>
  );
}
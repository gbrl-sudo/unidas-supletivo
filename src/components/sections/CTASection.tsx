'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_INFO } from '@/constants/content';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'O nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export function CTASection() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };



  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ocorreu um erro ao enviar a mensagem.');
      }

      setSubmitStatus({ success: true, message: 'Mensagem enviada com sucesso!' });
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        setSubmitStatus({ success: false, message: error.message });
      } else {
        setSubmitStatus({ success: false, message: 'Ocorreu um erro desconhecido.' });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Seu <span className="text-yellow-300">futuro</span> começa agora!
              </h2>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Tire suas dúvidas ou faça sua matrícula. Estamos aqui para te ajudar a dar o primeiro passo rumo ao seu futuro.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-left">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/90">Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-yellow-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/90">Email</FormLabel>
                    <FormControl>
                      <Input placeholder="seu.email@exemplo.com" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-yellow-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/90">Telefone</FormLabel>
                    <FormControl>
                      <Input placeholder="(XX) XXXXX-XXXX" {...field} className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-yellow-300" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white/90">Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite sua mensagem aqui..." className="resize-none bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:ring-yellow-300" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg" disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </Form>

          {submitStatus && (
            <div className={`mt-4 text-center p-3 rounded-md ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
              {submitStatus.message}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mt-10"
          >
            <div className="flex justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center">
                <Image src="/whatsapp.svg" alt="Ícone do WhatsApp" width={24} height={24} className="mr-2 pointer-events-none" />
                Fale no WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
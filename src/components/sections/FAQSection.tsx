import { FAQ_ITEMS } from '@/constants/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tire suas dúvidas
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Respondemos as perguntas mais comuns sobre nossos cursos. 
            Se tiver outras dúvidas, é só entrar em contato!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {FAQ_ITEMS.map(item => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors border border-gray-200 rounded-lg">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2">
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
'use client';

import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/content';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Supletivo Presencial', href: '/supletivo-presencial' },
  { name: 'Supletivo EAD', href: '/supletivo-distancia' },
  { name: 'Contato', href: '#contato' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
    onClose();
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onClose();
    const targetElement = document.getElementById(sectionId.substring(1));
    if (targetElement) {
      const headerHeight = 96; // 24 * 4 = 96px
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="md:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold text-primary">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            <X className="h-6 w-6 text-primary" />
          </Button>
        </div>
        <div className="p-4 flex flex-col h-full">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => {
                if (item.href.startsWith('#')) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  );
                } else if (item.href === '/') {
                  return (
                    <a
                      key={item.name}
                      href="#inicio"
                      onClick={(e) => handleScrollToSection(e, '#inicio')}
                      className="text-lg font-medium text-gray-700 hover:text-primary transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                );
              })}
          </nav>
          <div className="mt-auto space-y-4 pb-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              {CONTACT_INFO.phone}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full font-semibold border-primary text-primary hover:bg-primary/10"
            >
              <Link href="https://ejaead.sistemasiga.net/login" target="_blank" rel="noopener noreferrer">
                Portal do Aluno
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full font-semibold border-primary text-primary hover:bg-primary/10"
            >
              <a href="#contato" onClick={(e) => handleScrollToSection(e, '#contato')}>
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
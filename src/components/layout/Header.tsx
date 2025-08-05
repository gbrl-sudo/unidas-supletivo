'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Menu, User } from 'lucide-react';
import { CONTACT_INFO } from '@/constants/content';
import { MobileMenu } from './MobileMenu';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Supletivo Presencial', href: '/supletivo-presencial' },
  { name: 'Supletivo EAD', href: '/supletivo-distancia' },
  { name: 'Contato', href: '#contato' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
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

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm saturate-150 shadow-lg' : 'bg-transparent'}`}>
            <nav className="px-8 sm:px-12 md:px-16" aria-label="Top">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="#inicio" 
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              aria-label="Escola Unidas - Página inicial"
            >
              <Image src="/escola_unidas_logo.svg" alt="Escola Unidas Logo" width={300} height={75} className="pointer-events-none" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => {
              if (item.href.startsWith('#')) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className={`px-3 py-2 text-lg font-semibold transition-colors duration-200 relative group ${isScrolled ? 'text-primary hover:text-primary/80' : 'text-gray-800 hover:text-black'} cursor-pointer`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
                  </a>
                );
              } else if (item.href === '/') {
                return (
                  <a
                    key={item.name}
                    href="#inicio"
                    onClick={(e) => handleScrollToSection(e, '#inicio')}
                    className={`px-3 py-2 text-lg font-semibold transition-colors duration-200 relative group ${isScrolled ? 'text-primary hover:text-primary/80' : 'text-gray-800 hover:text-black'} cursor-pointer`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
                  </a>
                );
              }
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-lg font-semibold transition-colors duration-200 relative group ${isScrolled ? 'text-primary hover:text-primary/80' : 'text-gray-800 hover:text-black'}`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-primary' : 'bg-white'}`}></span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="https://ejaead.sistemasiga.net/login" target="_blank" rel="noopener noreferrer" aria-label="Portal do Aluno">
              <Button
                size="icon"
                                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <User className="h-6 w-6" />
              </Button>
            </Link>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300"
            >
              {CONTACT_INFO.phone}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMobileMenuToggle}
              aria-label="Abrir menu"
              className={`transition-colors duration-300 ${isScrolled ? 'text-primary hover:bg-primary/10' : 'text-gray-800 hover:text-black'}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={mobileMenuOpen} onClose={handleMobileMenuToggle} />
    </header>
  );
};
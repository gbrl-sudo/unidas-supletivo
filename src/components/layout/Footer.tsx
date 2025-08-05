'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '@/constants/content';

const footerNavigation = {
  courses: [
    { name: 'Supletivo a Distância', href: '/supletivo-distancia' },
    { name: 'Supletivo Presencial', href: '/supletivo-presencial' },
  ],
  company: [
    { name: 'Sobre Nós', href: '/#about' },
    { name: 'Depoimentos', href: '/#depoimentos' },
    { name: 'Contato', href: '/#contato' },
  ],

  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/escolaunidas',
      icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/escolaunidas/?hl=en',
      icon: Instagram,
    },
  ],
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    const id = sectionId.split('#')[1];
    if (!id) return;

    const targetElement = document.getElementById(id);
    if (targetElement) {
      e.preventDefault();
      const headerHeight = 96;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-white text-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/escola_unidas_logo.svg" alt="Escola Unidas Logo" width={240} height={65} className="pointer-events-none" />
              </div>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                {SITE_CONFIG.description}
              </p>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-primary hover:bg-gray-200 transition-all duration-200"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Cursos
              </h3>
              <ul className="space-y-4">
                {footerNavigation.courses.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Navegação
              </h3>
              <ul className="space-y-4">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleScrollToSection(e, item.href)}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-6">
                Contato
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <address className="text-gray-600 text-sm not-italic leading-relaxed">
                    {CONTACT_INFO.address}
                  </address>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm text-left"
                  >
                    {CONTACT_INFO.phone}
                  </button>
                </li>
                <li className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <div className="text-gray-600 text-sm">
                    {CONTACT_INFO.hours}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500">
              © {currentYear} Escola Unidas. Feito com carinho para você.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};
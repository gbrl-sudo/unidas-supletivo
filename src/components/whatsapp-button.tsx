'use client';

import Image from 'next/image';
import { CONTACT_INFO } from '@/constants/content';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(CONTACT_INFO.whatsappMessage);
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-4 rounded-full overflow-hidden shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image src="/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="pointer-events-none" />
    </button>
  );
};

export default WhatsAppButton;
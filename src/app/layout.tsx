import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from '@/components/whatsapp-button';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});



export const metadata: Metadata = {
  metadataBase: new URL('https://site-eja.vercel.app'), // Substitua pela URL de produção
  title: {
    default: 'EJA - Conclua seus Estudos | Escolas Unidas',
    template: '%s | Escolas Unidas',
  },
  description: 'Conclua o ensino fundamental e médio de forma rápida e segura com a Educação de Jovens e Adultos (EJA) das Escolas Unidas. Estude online ou presencialmente.',
  keywords: ['EJA', 'Educação de Jovens e Adultos', 'Supletivo', 'Ensino Médio', 'Ensino Fundamental', 'EJA a distância', 'EJA presencial'],
  authors: [{ name: 'Escolas Unidas' }],
  creator: 'Escolas Unidas',
  publisher: 'Escolas Unidas',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://site-eja.vercel.app', // Substitua pela URL de produção
  },
  openGraph: {
    title: 'EJA - Conclua seus Estudos | Escolas Unidas',
    description: 'Estude no seu ritmo e conquiste seu certificado de conclusão do ensino fundamental e médio com a EJA das Escolas Unidas.',
    url: 'https://site-eja.vercel.app', // Substitua pela URL de produção
    siteName: 'Escolas Unidas',
    images: [
      {
        url: '/og-image.jpg', // Crie e adicione uma imagem para Open Graph em /public
        width: 1200,
        height: 630,
        alt: 'Estudante sorrindo comemorando a conclusão dos estudos',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

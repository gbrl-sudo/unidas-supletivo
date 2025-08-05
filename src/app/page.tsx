import { Header } from '@/components/layout/Header';
import { Layout } from '@/components/layout/Layout';
import { AboutSection } from '@/components/sections/AboutSection';
import { CTASection } from '@/components/sections/CTASection';
import { CoursesSection } from '@/components/sections/CoursesSection';
import { BentoCardsSection } from '@/components/sections/BentoCardsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <AboutSection />
      <CoursesSection />
      <BentoCardsSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}

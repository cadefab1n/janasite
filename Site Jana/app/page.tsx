import Hero from '@/components/Hero';
import About from '@/components/About';
import CourseInfo from '@/components/CourseInfo';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <CourseInfo />
      <Benefits />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}

import ScrollFrameBackdrop from '@/components/background/scroll-frame-backdrop';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Highlights from '@/components/sections/highlights';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <main className='text-alabaster-grey relative min-h-screen bg-transparent'>
      <ScrollFrameBackdrop />

      <div className='site-content text-readable relative z-10'>
        <Hero />
        <About />
        <Highlights />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

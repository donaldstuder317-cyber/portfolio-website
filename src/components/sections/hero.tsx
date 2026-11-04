import Image from 'next/image';

import headshot from '@/assets/my-headshot.jpeg';
import { FlipText } from '@/components/ui/flip-text';
import { techIcons } from '@/data/tech-icons';

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='relative mx-auto -mt-8 max-w-6xl px-4 pb-16 md:px-8 xl:px-0'>
        <div className='grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='max-w-xl'>
            <FlipText className='text-pacific-cyan mb-5 text-xs font-semibold tracking-[0.22em] uppercase'>
              FULL STACK WEB DEVELOPER
            </FlipText>

            <FlipText className='text-4xl leading-tight font-black text-white sm:text-5xl xl:text-[4.2rem]'>
              Donald Studer
            </FlipText>

            <div className='border-alabaster-grey/25 bg-alabaster-grey/[0.12] mt-3 max-w-md rounded-xl border p-4 backdrop-blur-[2px]'>
              <p className='text-pale-slate text-base leading-7'>
                Open to full-stack opportunities, freelance web development, and
                team collaborations.
              </p>
            </div>

            <div className='mt-8 flex flex-wrap gap-4'>
              <a
                href='#contact'
                className='border-blue-slate bg-surface-raised hover:border-pacific-cyan hover:text-pacific-cyan rounded-lg border px-6 py-3 text-sm font-semibold text-white transition'
              >
                Get In Touch <span className='ml-2'>→</span>
              </a>
              <a
                href='/Donald-Studer-Resume.pdf'
                download='Donald-Studer-Resume.pdf'
                className='border-pacific-cyan/60 bg-surface-base text-alabaster-grey hover:bg-pacific-cyan rounded-lg border px-6 py-3 text-sm font-semibold transition hover:text-white'
              >
                Download Resume <span className='ml-2'>↓</span>
              </a>
            </div>

            <div className='mt-12'>
              <p className='text-alabaster-grey mb-4 text-[0.68rem] font-semibold tracking-[0.18em] uppercase'>
                Technologies | Mastered
              </p>
              <ul className='flex flex-wrap gap-3'>
                {techIcons.map((tech) => (
                  <li
                    key={tech.name}
                    className='border-blue-slate bg-surface-raised/85 flex h-11 w-11 items-center justify-center rounded-lg border shadow-none'
                    title={tech.name}
                  >
                    {tech.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='relative flex min-h-[520px] items-center justify-center'>
            <div className='portrait-glow pointer-events-none absolute' />
            <div className='relative z-[1] flex items-center justify-center'>
              <div className='portrait-frame bg-surface-base relative h-[280px] w-[280px] overflow-hidden rounded-full'>
                <Image
                  src={headshot}
                  alt='Donald Studer'
                  fill
                  priority
                  sizes='280px'
                  className='object-cover'
                  style={{ objectPosition: '50% 18%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

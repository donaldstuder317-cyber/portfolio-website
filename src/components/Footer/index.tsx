import Link from 'next/link';
import { DSIcon } from '@/assets/icons';

const Footer = () => {
  return (
    <footer className='border-t border-[#4c5c68]/70 bg-[#1b252b]/90 text-[#dcdcdd] backdrop-blur-sm'>
      <div className='mx-auto max-w-6xl px-4 py-12 md:px-8 xl:px-0'>
        <div className='grid gap-8 md:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <div className='flex items-center gap-3 text-xl font-bold text-white'>
              <span className='flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg bg-[#1b252b] text-sm'>
                <DSIcon aria-hidden='true' className='h-[120%] w-[120%]' />
              </span>
            </div>
            <p className='mt-5 max-w-md text-[#c5c3c6]'>
              I design and build thoughtful digital experiences that make brands
              and products feel memorable.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='mb-4 text-xs font-semibold tracking-[0.22em] text-[#c5c3c6] uppercase'>
                Follow Me
              </p>
              <div className='flex gap-3'>
                {['in', '◌', '◎'].map((item) => (
                  <span
                    key={item}
                    className='flex h-9 w-9 items-center justify-center rounded-full border border-[#4c5c68] bg-[#24343c]/85 text-sm text-white'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className='mb-4 text-xs font-semibold tracking-[0.22em] text-[#c5c3c6] uppercase'>
                Contact
              </p>
              <ul className='space-y-2 text-sm text-[#dcdcdd]'>
                <li>donald.studer317@gmail.com</li>
                <li>+1 (817) 771-5626</li>
                <li>Killeen, TX, 76549</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-white/10 pt-5 text-sm text-[#c5c3c6]'>
          © 2026 Donald Studer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

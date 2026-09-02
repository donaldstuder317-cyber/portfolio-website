import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='border-t border-white/[0.06] bg-white/[0.015] text-[#dcdcdd]'>
      <div className='mx-auto max-w-6xl px-4 py-12 md:px-8 xl:px-0'>
        <div className='grid gap-8 md:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <div className='flex items-center gap-3 text-xl font-bold text-white'>
              <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-sm'>
                {'</>'}
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
                    className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-sm text-white'
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

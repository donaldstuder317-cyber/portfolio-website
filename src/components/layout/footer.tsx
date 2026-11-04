import { DSIcon } from '@/components/icons/brand';
import {
  CredlyIcon,
  GithubIcon,
  LinkedinIcon,
} from '@/components/icons/social';

const Footer = () => {
  return (
    <footer
      id='contact'
      className='border-blue-slate/70 bg-surface-base/90 text-alabaster-grey scroll-mt-24 border-t backdrop-blur-sm'
    >
      <div className='mx-auto max-w-6xl px-4 py-12 md:px-8 xl:px-0'>
        <div className='grid gap-8 md:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <div className='flex items-center gap-3 text-xl font-bold text-white'>
              <span className='bg-surface-base flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg text-sm'>
                <DSIcon aria-hidden='true' className='h-[120%] w-[120%]' />
              </span>
            </div>
            <p className='text-pale-slate mt-5 max-w-md'>
              I design and build thoughtful digital experiences that make brands
              and products feel memorable.
            </p>
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <div>
              <p className='text-pale-slate mb-4 text-xs font-semibold tracking-[0.22em] uppercase'>
                Follow Me
              </p>
              <div className='flex gap-3'>
                <a
                  href='https://www.linkedin.com/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn'
                  className='border-blue-slate bg-surface-raised/85 hover:border-pacific-cyan hover:text-pacific-cyan flex h-9 w-9 items-center justify-center rounded-full border text-white transition'
                >
                  <LinkedinIcon className='h-4 w-4' aria-hidden='true' />
                </a>
                <a
                  href='https://github.com/donaldstuder317-cyber'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub'
                  className='border-blue-slate bg-surface-raised/85 hover:border-pacific-cyan hover:text-pacific-cyan flex h-9 w-9 items-center justify-center rounded-full border text-white transition'
                >
                  <GithubIcon className='h-4 w-4' aria-hidden='true' />
                </a>
                <a
                  href='https://www.credly.com/users/donald-studer.3541886c'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='Credly'
                  className='border-blue-slate bg-surface-raised/85 hover:border-pacific-cyan hover:text-pacific-cyan flex h-9 w-9 items-center justify-center rounded-full border text-white transition'
                >
                  <CredlyIcon className='h-4 w-4' aria-hidden='true' />
                </a>
              </div>
            </div>

            <div>
              <p className='text-pale-slate mb-4 text-xs font-semibold tracking-[0.22em] uppercase'>
                Contact
              </p>
              <ul className='text-alabaster-grey space-y-2 text-sm'>
                <li>donald.studer317@gmail.com</li>
                <li>+1 (817) 771-5626</li>
                <li>Killeen, TX, 76549</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='text-pale-slate mt-10 border-t border-white/10 pt-5 text-sm'>
          © 2026 Donald Studer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

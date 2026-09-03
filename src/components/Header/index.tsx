'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { DSIcon } from '@/assets/icons';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/#about' },
  { title: 'Skills', href: '/#skills' },
  { title: 'Projects', href: '/#projects' },
  { title: 'Contact', href: '/#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-[#4c5c68]/70 bg-[#1b252b]/90 shadow-none backdrop-blur-sm'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8 xl:px-0'>
        <Link
          href='/'
          className='flex items-center gap-3 text-lg font-bold text-white'
          aria-label='Home'
        >
          <span className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-md bg-[#1b252b] text-sm text-white'>
            <DSIcon aria-hidden='true' className='h-[120%] w-[120%]' />
          </span>
        </Link>

        <nav className='hidden items-center gap-8 md:flex'>
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href))
                  ? 'text-white'
                  : 'text-[#c5c3c6] hover:text-white'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className='hidden md:block'>
          <Link
            href='/#contact'
            className='rounded-lg bg-[#1985a1] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#147e93]'
          >
            Hire Me <span className='ml-1'>→</span>
          </Link>
        </div>

        <button
          className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden'
          onClick={() => setMenuOpen((current) => !current)}
          aria-label='Toggle menu'
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className='border-t border-[#4c5c68]/70 bg-[#1b252b]/95 md:hidden'>
          <nav className='mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4'>
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className='text-sm text-[#c5c3c6] hover:text-white'
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

'use client';
import React, { JSX, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavItem {
   label: string;
   href: string;
}
interface HeaderProps {
   navigationItems: NavItem[];
}

export const Header = ({ navigationItems }: HeaderProps): JSX.Element => {
   const pathname = usePathname();
   const isHomePage = pathname === '/';

   const [visible, setVisible] = useState(true);
   const [scrolled, setScrolled] = useState(false);
   const [mobileOpen, setMobileOpen] = useState(false);

   const lastY = useRef(0);

   useEffect(() => {
      const onScroll = () => {
         const y = window.scrollY;
         setScrolled(y > 10);
         if (y > lastY.current && y > 200) setVisible(false);
         else setVisible(true);
         lastY.current = y;
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
         if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
   }, []);

   return (
      <header
         className={clsx('fixed top-0 left-0 z-50 w-full h-20 transition-all duration-500 border-b', {
            '-translate-y-full': !visible,
            'bg-black/20 border-transparent': isHomePage && !scrolled,
            'bg-black/70 backdrop-blur-md border-black/40': !isHomePage || scrolled,
         })}
         role="banner"
      >
         <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex-shrink-0">
               <Link href="/" aria-label="Anasayfa">
                  <img className="h-[52px] w-auto md:h-[59px]" alt="Rapkology logo" src="https://c.animaapp.com/fWtWwMnc/img/group-1@2x.png" />
               </Link>
            </div>

            <nav className="hidden md:flex items-center gap-7" role="navigation" aria-label="Ana navigasyon">
               {navigationItems.map((item, i) => (
                  <Link
                     key={i}
                     href={item.href}
                     className={clsx('font-sans text-sm tracking-wide uppercase transition-colors', 'text-white/90 hover:text-yellow-300')}
                  >
                     {item.label}
                  </Link>
               ))}
            </nav>

            <div className="hidden md:flex items-center gap-6">
               <Image className="cursor-pointer" src="/menu/search.png" alt="Ara" width={23} height={22} style={{ filter: 'brightness(0) invert(1)' }} />
               <button
                  type="button"
                  aria-label="Giriş yap"
                  className="w-[120px] h-10 inline-flex items-center justify-center
                       bg-white text-black font-semibold tracking-wide
                       hover:bg-gray-200 transition-colors"
               >
                  GİRİŞ YAP
               </button>
            </div>

            <button
               type="button"
               aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
               aria-expanded={mobileOpen}
               aria-controls="mobile-menu"
               onClick={() => setMobileOpen((s) => !s)}
               className="md:hidden inline-flex items-center justify-center h-10 w-10 relative"
            >
               <span
                  className={clsx(
                     'absolute right-0 block h-[3px] bg-yellow-300 transition-all duration-300',
                     mobileOpen ? 'w-7 rotate-45' : 'w-5 -translate-y-1', // <-- mesafe kısaldı
                  )}
               />

               <span
                  className={clsx(
                     'absolute right-0 block h-[3px] bg-yellow-300 transition-all duration-300',
                     mobileOpen ? 'w-7 -rotate-45' : 'w-7 translate-y-1.5', // <-- mesafe kısaldı
                  )}
               />
            </button>
         </div>

         <div
            className={clsx(
               'md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity',
               mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
            )}
            onClick={() => setMobileOpen(false)}
         />
         <div
            id="mobile-menu"
            className={clsx(
               'md:hidden fixed top-0 right-0 z-50 h-screen w-[78%] max-w-xs',
               'bg-black/90 backdrop-blur-md border-l border-white/10',
               'transition-transform duration-300',
               mobileOpen ? 'translate-x-0' : 'translate-x-full',
            )}
            role="dialog"
            aria-modal="true"
         >
            <div className="h-20 px-6 flex items-center justify-between">
               <Link href="/" onClick={() => setMobileOpen(false)} aria-label="Anasayfa">
                  <img className="h-10 w-auto" alt="Rapkology logo" src="https://c.animaapp.com/fWtWwMnc/img/group-1@2x.png" />
               </Link>
               <button className="h-10 w-10 grid place-items-center" aria-label="Kapat" onClick={() => setMobileOpen(false)}>
                  <span className="sr-only">Kapat</span>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                     <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" className="text-yellow-300" />
                  </svg>
               </button>
            </div>

            <nav className="px-6 py-4 flex flex-col gap-4" aria-label="Mobil menü">
               {navigationItems.map((item, i) => (
                  <Link
                     key={i}
                     href={item.href}
                     onClick={() => setMobileOpen(false)}
                     className="py-2 text-base font-medium uppercase tracking-wide text-white hover:text-yellow-300 transition-colors"
                  >
                     {item.label}
                  </Link>
               ))}

               <div className="mt-6 flex items-center gap-4">
                  <Image src="/menu/search.png" alt="Ara" width={23} height={22} style={{ filter: 'brightness(0) invert(1)' }} />
                  <button
                     type="button"
                     className="flex-1 h-11 inline-flex items-center justify-center bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                  >
                     GİRİŞ YAP
                  </button>
               </div>
            </nav>
         </div>
      </header>
   );
};

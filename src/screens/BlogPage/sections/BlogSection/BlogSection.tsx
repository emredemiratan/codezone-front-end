'use client';
import React, { JSX, useState } from 'react';
import data from '../../../../data.json';

export const BlogSection = (): JSX.Element => {
   const [email, setEmail] = useState('');

   type DataJsonItem = {
      attributes?: {
         category?: string[];
         title?: string;
         desc?: string;
         authors?: string[];
      };
      createdAt?: string;
   };

   const items = Array.isArray(data) ? (data as DataJsonItem[]) : [];
   const categories = new Set<string>();
   for (const item of items) {
      const cats = item.attributes?.category ?? [];
      for (const c of cats) categories.add(c);
   }

   const hasMusic = categories.has('Müzik') || categories.has('Müzikler');
   const hasVideos = categories.has('Videolar');

   const navigationItems = [
      { label: 'HABERLER', href: '#news' },
      { label: 'ETKİNLİKLER', href: '#events' },
      ...(hasMusic ? [{ label: 'MÜZİKLER', href: '#music' }] : []),
      ...(hasVideos ? [{ label: 'VİDEOLAR', href: '#videos' }] : []),
      { label: 'İLETİŞİM', href: '#contact' },
   ];

   const latest = items.slice().sort((a, b) => new Date(b?.createdAt ?? 0).getTime() - new Date(a?.createdAt ?? 0).getTime())[0];
   const brandName = latest?.attributes?.authors?.[0] ?? 'Rapkology';
   const copyrightYear = new Date(latest?.createdAt ?? Date.now()).getFullYear();

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Email submitted:', email);
   };

   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
   };

   return (
      <footer className="relative w-full bg-blackblack" role="contentinfo">
         <div className="relative mx-auto max-w-[1522px] px-5 sm:px-8 lg:px-20 py-10">
            <div className="hidden lg:block">
               <img className="w-[249px] h-[63px]" alt="Rapkology Logo" src="https://c.animaapp.com/kkcWJj7D/img/group-1-1@2x.png" />
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
               <div>
                  <h2 className="max-w-[420px] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)]">
                     GELİŞMELERDEN İLK SEN HABERDAR OL!
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-6 w-full max-w-[416px]">
                     <label
                        htmlFor="email-input"
                        className="block mb-2 font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-blackwhite text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] whitespace-nowrap [font-style:var(--saira-14-bold-font-style)]"
                     >
                        EMAIL
                     </label>

                     <div className="relative">
                        <input
                           id="email-input"
                           type="email"
                           value={email}
                           onChange={handleEmailChange}
                           className="w-[300px] h-9 bg-transparent text-blackwhite font-saira-14-reg outline-none"
                           required
                           aria-label="Email address for newsletter subscription"
                        />
                        <div className="absolute top-[35px] left-0 w-full h-px bg-blackwhite opacity-30"></div>
                        <button type="submit" className="absolute right-0 top-0 w-[83px] h-3.5 group cursor-pointer" aria-label="Submit email for newsletter">
                           <span className="font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-yellow text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] whitespace-nowrap [font-style:var(--saira-14-bold-font-style)] group-hover:opacity-80 transition-opacity">
                              GÖNDER
                           </span>
                           <img
                              className="inline-block ml-2 w-3 h-3 align-[-2px] group-hover:opacity-80 transition-opacity"
                              alt=""
                              src="https://c.animaapp.com/kkcWJj7D/img/group-5768@2x.png"
                           />
                        </button>
                     </div>
                  </form>
               </div>

               <div>
                  <div className="">
                     <img className="w-[186px] h-[26px]" alt="Rapkology Brand" src="/discover/socialMedia.png" />
                  </div>

                  <nav className="mt-6" role="navigation" aria-label="Footer navigation">
                     <div className="flex flex-wrap gap-x-10 gap-y-4">
                        {navigationItems.map((item) => (
                           <a
                              key={item.label}
                              href={item.href}
                              className="font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackwhite text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] whitespace-nowrap [font-style:var(--saira-14-reg-font-style)] hover:text-yellow transition-colors"
                           >
                              {item.label}
                           </a>
                        ))}
                     </div>
                  </nav>

                  <p className="mt-6 max-w-[381px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackblack-500 text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] [font-style:var(--saira-14-reg-font-style)]">
                     © {brandName} All Rights Are Reserved {copyrightYear}.
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
};

import React, { JSX } from 'react';
import data from '../../../../data.json';

export const ExploreSection = (): JSX.Element => {
   type DataJsonItem = {
      attributes?: {
         title?: string;
         desc?: string;
         img?: string;
      };
      createdAt?: string;
   };

   const items = (Array.isArray(data) ? (data as DataJsonItem[]) : [])
      .slice()
      .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime());

   const featured = items[0];
   const featuredTitle = featured?.attributes?.title ?? 'LOREM FT - IPSUM';
   const featuredDesc =
      featured?.attributes?.desc ??
      'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES LOBORTIS. QUISQUE A NEQUE PRETI ...';

   const breadcrumbItems = [
      { text: 'ANA SAYFA', isActive: false },
      { text: 'BLOG', isActive: false },
      { text: featuredTitle, isActive: true },
   ];

   const blogPosts = items.slice(1, 5).map((item, idx) => ({
      id: idx + 1,
      image: item.attributes?.img ?? '/blog/blog.png',
      title: item.attributes?.title ?? 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...',
   }));

   const paginationDots = [{ isActive: false }, { isActive: false }, { isActive: false }, { isActive: true }, { isActive: false }];

   return (
      <section className="relative w-full bg-yellow overflow-hidden lg:h-[847px]" role="main" aria-label="Blog explore section">
         {/* Background texture */}
         <img
            className="pointer-events-none absolute inset-0 w-full h-full mix-blend-multiply object-cover"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/metal-texture-with-dust-scratches-cracks-textured-backgrounds--1.png"
            role="presentation"
         />
         {/* Decorative path - desktop only */}
         <img
            className="pointer-events-none hidden lg:block absolute w-[79.19%] h-[113.38%] top-0 left-[20.72%]"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/path-0.svg"
            role="presentation"
         />

         {/* Content container */}
         <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 py-8 sm:py-10 lg:px-0 lg:py-0 lg:max-w-none lg:mx-0 lg:static">
            <nav className="inline-flex items-center gap-[21px] lg:absolute lg:top-[74px] lg:left-[79px]" aria-label="Breadcrumb">
               <ol className="inline-flex items-center gap-[21px]">
                  {breadcrumbItems.map((item, index) => (
                     <li key={index} className="inline-flex items-center gap-[21px]">
                        <span className="relative w-fit mt-[-1.00px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackblack text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] whitespace-nowrap [font-style:var(--saira-14-reg-font-style)]">
                           {item.text}
                        </span>
                        {index < breadcrumbItems.length - 1 && (
                           <img
                              className="relative w-[4.84px] h-[8.68px]"
                              alt=""
                              src={`https://c.animaapp.com/kkcWJj7D/img/vector-${index + 1}.svg`}
                              role="presentation"
                           />
                        )}
                     </li>
                  ))}
               </ol>
            </nav>

            <h1 className="mt-4 lg:mt-0 lg:absolute lg:top-[123px] lg:left-[77px] font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackblack text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
               BLOG
            </h1>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[740px_1fr] gap-8">
               {/* Featured left column */}
               <main className="flex flex-col gap-[18px] lg:absolute lg:top-[201px] lg:left-20 lg:gap-[30px]">
                  <article className="relative w-full lg:w-[740.42px] lg:h-[430.94px]">
                     <div className="relative w-full overflow-hidden rounded-[2px]">
                        {/* 431/738 ≈ 58.4% to preserve aspect ratio without plugin */}
                        <div className="relative w-full pb-[58.4%] lg:pb-0 lg:h-[430.94px]">
                           <img
                              className="absolute inset-0 w-full h-full object-cover lg:top-0 lg:left-0 lg:w-[738px] lg:h-[431px]"
                              alt="Featured blog post image"
                              src={featured?.attributes?.img ?? '/blog/blog.png'}
                           />
                           <h2 className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-auto lg:top-[348px] lg:left-[49px] font-saira-cond-40-bold font-[number:var(--saira-cond-40-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-40-bold-font-size)] tracking-[var(--saira-cond-40-bold-letter-spacing)] leading-[var(--saira-cond-40-bold-line-height)] whitespace-nowrap [font-style:var(--saira-cond-40-bold-font-style)]">
                              {featuredTitle}
                           </h2>
                           <button
                              className="absolute right-4 bottom-3 md:right-6 md:bottom-5 w-[52px] h-[52px] md:w-[60px] md:h-[60px] lg:top-[337px] lg:left-[630px] lg:w-[65px] lg:h-[65px]"
                              aria-label="Play video"
                              type="button"
                           >
                              <img className="w-full h-full" alt="" src="https://c.animaapp.com/kkcWJj7D/img/frame-87.svg" role="presentation" />
                           </button>
                        </div>
                     </div>
                  </article>

                  <p className="w-full max-w-[640px] text-blackblack text-[length:var(--saira-cond-25-bold-font-size)] leading-[var(--saira-cond-25-bold-line-height)] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] tracking-[var(--saira-cond-25-bold-letter-spacing)] [font-style:var(--saira-cond-25-bold-font-style)] lg:absolute lg:top-[660px] lg:left-[126px] lg:w-[524px]">
                     {featuredDesc}
                  </p>

                  <nav
                     className="flex items-center gap-[8.33px] justify-center lg:justify-end lg:absolute lg:top-[665px] lg:left-[685px]"
                     aria-label="Pagination"
                  >
                     <ol className="inline-flex items-center gap-[8.33px]">
                        {paginationDots.map((dot, index) => (
                           <li key={index}>
                              <button
                                 className={`relative ${
                                    dot.isActive ? 'w-[15.15px] h-[15.15px] bg-blackblack rounded-full' : 'w-[10px] h-[10px] bg-[#676103] rounded-full'
                                 }`}
                                 aria-label={`Go to page ${index + 1}`}
                                 aria-current={dot.isActive ? 'page' : undefined}
                                 type="button"
                              />
                           </li>
                        ))}
                     </ol>
                  </nav>
               </main>

               {/* Aside list right column */}
               <aside
                  className="flex flex-col items-start gap-[30px] lg:inline-flex lg:flex-col lg:items-start lg:gap-[30px] lg:absolute lg:top-[201px] lg:left-[840px]"
                  aria-label="Related blog posts"
               >
                  {blogPosts.map((post) => (
                     <article key={post.id} className="flex items-start gap-5 w-full">
                        <div className="flex flex-col items-start gap-[30px] flex-[0_0_auto]">
                           <img className="w-[174.45px] h-[104.78px] object-cover" alt={`Blog post ${post.id} thumbnail`} src={post.image} />
                        </div>

                        <div className="flex flex-col items-start gap-[30px]">
                           <h3 className="w-full max-w-[420px] mt-[-1.00px] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackblack text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)]">
                              {post.title}
                           </h3>
                        </div>
                     </article>
                  ))}
               </aside>
            </div>
         </div>

         {/* bottom decorative shapes - desktop only */}
         <img
            className="pointer-events-none hidden lg:block absolute w-[60.18%] h-[18.61%] top-[85.51%] left-0"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/vector-3.svg"
            role="presentation"
         />

         <img
            className="pointer-events-none hidden lg:block absolute w-[53.91%] h-[18.60%] top-[85.81%] left-[46.09%]"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/vector-4.svg"
            role="presentation"
         />
      </section>
   );
};

import React, { JSX } from 'react';
import Link from 'next/link';
import data from '../../../../data.json';

export const ExploreSection = (): JSX.Element => {
   type DataJsonItem = {
      attributes?: {
         title?: string;
         desc?: string;
         img?: string;
         slug?: string;
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
   const featuredHref = featured?.attributes?.slug ? `/blog/${featured.attributes.slug}` : '/blog';
   const blogPosts = items.slice(1, 5).map((item, idx) => ({
      id: idx + 1,
      image: item.attributes?.img ?? '/blog/blog.png',
      title: item.attributes?.title ?? 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.  MAURIS NEC LEO NON LIBERO SODALES ...',
      slug: item.attributes?.slug ?? '',
   }));

   const paginationDots = [{ isActive: false }, { isActive: false }, { isActive: false }, { isActive: true }, { isActive: false }];

   return (
      <section className="relative w-full bg-yellow overflow-hidden lg:h-[847px]" role="main" aria-label="Blog explore section">
         <img
            className="pointer-events-none absolute inset-0 w-full h-full mix-blend-multiply object-cover"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/metal-texture-with-dust-scratches-cracks-textured-backgrounds--1.png"
            role="presentation"
         />
         <img
            className="pointer-events-none hidden lg:block absolute w-[79.19%] h-[113.38%] top-0 left-[20.72%]"
            alt=""
            src="https://c.animaapp.com/kkcWJj7D/img/path-0.svg"
            role="presentation"
         />

         <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 py-8 sm:py-10 lg:px-0 lg:py-0 lg:max-w-none lg:mx-0 lg:static">
            <h1 className="mt-16 lg:mt-0 lg:absolute lg:top-[123px] lg:left-[77px] font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackblack text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
               BLOG
            </h1>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-[740px_1fr] gap-8">
               <main className="flex flex-col gap-[18px] lg:absolute lg:top-[201px] lg:left-20 lg:gap-[30px]">
                  <article className="relative w-full lg:w-[740.42px] lg:h-[430.94px]">
                     <div className="relative w-full overflow-hidden rounded-[2px] group cursor-pointer">
                        <div className="relative w-full pb-[58.4%] lg:pb-0 lg:h-[430.94px]">
                           <img
                              className="absolute inset-0 w-full h-full object-cover lg:top-0 lg:left-0 lg:w-[738px] lg:h-[431px]"
                              alt={featuredTitle}
                              src={featured?.attributes?.img ?? '/blog/blog.png'}
                           />
                           <h2 className="absolute m-4 bottom-3 left-3 md:m-6 md:bottom-6 md:left-6 lg:bottom-6 lg:left-6 font-saira-cond-40-bold font-[number:var(--saira-cond-40-bold-font-weight)] text-blackwhite text-[22px] md:text-[length:var(--saira-cond-40-bold-font-size)] tracking-[var(--saira-cond-40-bold-letter-spacing)] leading-[1.15] md:leading-[var(--saira-cond-40-bold-line-height)] whitespace-normal break-words max-w-[80%] md:max-w-[70%] lg:max-w-[65%] pr-16 md:pr-0 [font-style:var(--saira-cond-40-bold-font-style)] transition-colors group-hover:text-yellow">
                              {featuredTitle}
                           </h2>
                           <img
                              className="absolute m-4 right-3 bottom-3 m-0 w-10 h-10 md:right-6 md:bottom-5 lg:right-6 lg:bottom-5 md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px]"
                              alt=""
                              src="https://c.animaapp.com/kkcWJj7D/img/frame-87.svg"
                              role="presentation"
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                           <Link
                              href={featuredHref}
                              aria-label={`${featuredTitle} yazısına git`}
                              className="absolute inset-0 z-10 block cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 focus:ring-offset-yellow/20"
                           />
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

               <aside
                  className="flex flex-col items-start gap-[30px] lg:inline-flex lg:flex-col lg:items-start lg:gap-[30px] lg:absolute lg:top-[201px] lg:left-[840px]"
                  aria-label="Related blog posts"
               >
                  {blogPosts.map((post) => (
                     <Link
                        key={post.id}
                        href={post.slug ? `/blog/${post.slug}` : '/blog'}
                        aria-label={`${post.title} yazısına git`}
                        className="group block w-full focus:outline-none focus:ring-2 "
                     >
                        <article className="flex items-start gap-5 w-full cursor-pointer">
                           <div className="flex flex-col items-start gap-[30px] flex-[0_0_auto]">
                              <img
                                 className="w-[174.45px] h-[104.78px] object-cover transition-transform group-hover:scale-[1.02]"
                                 alt={post.title}
                                 src={post.image}
                              />
                           </div>

                           <div className="flex flex-col items-start gap-[30px]">
                              <h3 className="w-full max-w-[420px] mt-[-1.00px] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackblack text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)] transition-colors group-hover:font-bold group-hover:scale-[1.02]">
                                 {post.title}
                              </h3>
                           </div>
                        </article>
                     </Link>
                  ))}
               </aside>
            </div>
         </div>

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

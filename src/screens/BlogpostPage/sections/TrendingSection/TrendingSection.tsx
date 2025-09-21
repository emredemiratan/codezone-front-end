'use client';
import React, { JSX } from 'react';

interface TrendingPost {
   id: string;
   number: string;
   author: {
      name: string;
      avatar: string;
   };
   title: string;
   readMoreText: string;
   dividerImage: string;
}

export const TrendingSection = (): JSX.Element => {
   const trendingPosts: TrendingPost[] = [
      {
         id: '01',
         number: '01',
         author: {
            name: 'Jonathan Stewart',
            avatar: 'https://c.animaapp.com/wnzjM5fQ/img/rectangle-9@2x.png',
         },
         title: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
         readMoreText: 'Daha Fazla Oku',
         dividerImage: 'https://c.animaapp.com/wnzjM5fQ/img/vector-10-1.svg',
      },
      {
         id: '02',
         number: '02',
         author: {
            name: 'Steve Rogerson',
            avatar: 'https://c.animaapp.com/wnzjM5fQ/img/rectangle-10-3@2x.png',
         },
         title: 'PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.',
         readMoreText: 'Daha Fazla Oku',
         dividerImage: 'https://c.animaapp.com/wnzjM5fQ/img/vector-10-2.svg',
      },
      {
         id: '03',
         number: '03',
         author: {
            name: 'Ismail Kor',
            avatar: 'https://c.animaapp.com/wnzjM5fQ/img/rectangle-9-1@2x.png',
         },
         title: 'ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...',
         readMoreText: 'Daha Fazla Oku',
         dividerImage: 'https://c.animaapp.com/wnzjM5fQ/img/vector-10-3.svg',
      },
      {
         id: '04',
         number: '04',
         author: {
            name: 'Jonathan Stewart',
            avatar: 'https://c.animaapp.com/wnzjM5fQ/img/rectangle-10-4@2x.png',
         },
         title: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
         readMoreText: 'Daha Fazla Oku',
         dividerImage: 'https://c.animaapp.com/wnzjM5fQ/img/vector-10-4.svg',
      },
   ];

   const renderTrendingPost = (post: TrendingPost, index: number) => {
      const isTopRow = index < 2;
      const leftPosition = isTopRow ? (index === 0 ? 'lg:left-0.5' : 'lg:left-[376px]') : '';
      const topPosition = isTopRow ? 'lg:top-[137px]' : '';

      return (
         <div key={post.id} className={`flex w-full max-w-[364px] items-start justify-between ${isTopRow ? `lg:absolute ${topPosition} ${leftPosition}` : ''}`}>
            <div
               className={`${
                  index === 0 ? 'w-[71.7px]' : index === 1 ? 'w-[74.81px]' : index === 2 ? 'w-[77.3px]' : 'w-[80.63px]'
               } relative mt-[-1.00px] font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackblack-900 text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] [font-style:var(--saira-cond-display-font-style)]`}
            >
               {post.number}
            </div>

            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
               <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                  <img className="relative w-[32.74px] h-[32.74px]" alt="Rectangle" src={post.author.avatar} />

                  <div className="relative w-fit font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-white text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
                     {post.author.name}
                  </div>
               </div>

               <p className="w-[253.91px] font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] relative text-blackwhite [font-style:var(--saira-cond-25-bold-font-style)] sm:w-[280px]">
                  {post.title}
               </p>

               <img className="relative w-[223.38px] h-px object-cover" alt="Vector" src={post.dividerImage} />

               <div className="relative w-[128.16px] h-[17px]">
                  <div className="absolute w-[92.85%] h-[111.76%] top-0 left-0 font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
                     {post.readMoreText}
                  </div>

                  <img
                     className={`absolute w-[10.36%] h-[78.09%] ${index < 2 ? 'top-[-14589.53%]' : 'top-[-16199.78%]'} ${
                        index === 0 || index === 2 ? 'left-[-6674.93%]' : 'left-[-6966.69%]'
                     }`}
                     alt="Group"
                     src="https://c.animaapp.com/wnzjM5fQ/img/group-27-3@2x.png"
                  />
               </div>
            </div>
         </div>
      );
   };

   return (
      <section className="mt-10 w-full lg:relative lg:top-0 lg:left-0 lg:w-[742px] lg:h-[735px]" role="region" aria-labelledby="trending-title">
         <h2
            id="trending-title"
            className="font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)] lg:absolute lg:top-1.5 lg:left-0"
         >
            TRENDLER
         </h2>

         <img className="mt-2 w-[66px] h-[66px] lg:absolute lg:top-0 lg:left-[242px] lg:ml-[120px]" alt="Trending up" src="trends/rise.png" />

         <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:block">
            {trendingPosts.slice(0, 2).map((post, index) => renderTrendingPost(post, index))}
         </div>

         <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:absolute lg:top-[411px] lg:left-0.5 lg:w-[738px] lg:h-[214px] lg:flex lg:flex-row lg:gap-2.5 lg:grid-cols-1 lg:mt-0">
            {trendingPosts.slice(2, 4).map((post, index) => (
               <div key={post.id} className="flex w-full max-w-[363.91px] lg:w-[363.91px] lg:h-[213.74px] relative items-start justify-between">
                  {renderTrendingPost(post, index + 2)}
               </div>
            ))}
         </div>

         <button className="mt-8 w-[188px] h-12 mx-auto lg:mt-0 lg:absolute lg:top-[687px] lg:left-[278px]" type="button" aria-label="View all trending posts">
            <img className="absolute top-0 left-0 w-[195px] h-[57px] " alt="" src="/trends/seeAll.png" />

            <span className="absolute top-3.5 left-11 font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackblack text-[length:var(--saira-16-bold-font-size)] text-center tracking-[var(--saira-16-bold-letter-spacing)] leading-[var(--saira-16-bold-line-height)] whitespace-nowrap [font-style:var(--saira-16-bold-font-style)]">
               Tümünü Gör
            </span>
         </button>
      </section>
   );
};

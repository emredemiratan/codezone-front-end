import React, { JSX } from 'react';
import { ContentWrapperSection } from './sections/ContentWrapperSection/ContentWrapperSection';
import { FooterSection } from './sections/FooterSection/FooterSection';
import { MainContentSection } from './sections/MainContentSection/MainContentSection';
import { TrendingSection } from './sections/TrendingSection/TrendingSection';

export const BlogpostPage = (): JSX.Element => {
   const breadcrumbItems = [
      { text: 'ANA SAYFA', isLast: false },
      { text: 'BLOG', isLast: false },
      { text: 'LOREM IPSUM DOLOR   ...   AMET', isLast: true },
   ];

   return (
      <div className="flex flex-col items-center relative" data-model-id="2:316">
         <main className="w-full bg-blackblack">
            <div className="mx-auto w-full max-w-[1440px] px-5 lg:px-[79px]">
               <nav className="flex items-center gap-[21px] mt-6 lg:mt-[95px]" aria-label="Breadcrumb">
                  {breadcrumbItems.map((item, index) => (
                     <React.Fragment key={index}>
                        <div className="relative w-fit mt-[-1.00px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackwhite text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] whitespace-nowrap [font-style:var(--saira-14-reg-font-style)]">
                           {item.text}
                        </div>
                        {!item.isLast && (
                           <img className="relative w-[4.84px] h-[8.68px]" alt="" src="https://c.animaapp.com/wnzjM5fQ/img/vector-1.svg" role="presentation" />
                        )}
                     </React.Fragment>
                  ))}
               </nav>

               <div className="mt-6 lg:mt-[35px] flex flex-col lg:flex-row lg:items-start lg:gap-[40px]">
                  <section className="flex-1 lg:max-w-[740px] mt-10">
                     <MainContentSection />

                     <h2 className="mt-14 font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
                        DAHA FAZLA İÇERİK
                     </h2>

                     <ContentWrapperSection />
                     <TrendingSection />
                  </section>

                  <aside className="mt-10 lg:mt-[135px] lg:w-[428px] lg:shrink-0">
                     <FooterSection />
                  </aside>
               </div>
            </div>
         </main>
      </div>
   );
};

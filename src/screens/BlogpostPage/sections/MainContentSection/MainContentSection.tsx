import React, { JSX } from 'react';
import data from '../../../../data.json';

export const MainContentSection = (): JSX.Element => {
   type DataJsonItem = {
      attributes?: {
         title?: string;
         desc?: string;
         img?: string;
         tags?: string[];
      };
      createdAt?: string;
   };

   const items = (Array.isArray(data) ? (data as DataJsonItem[]) : [])
      .slice()
      .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime());

   const post = items[0];
   const title = post?.attributes?.title ?? 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR EDIPICING SIR ELIT';
   const subtitle =
      post?.attributes?.desc ??
      'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI. ALIQUAM IN HENDRERIT URNA. PELLENTESQUE SIT AMET SAPIEN FRINGILLA, MATTIS LIGULA CONSECTETUR, ULTRICES MAURIS.';
   const heroImg = post?.attributes?.img ?? 'https://c.animaapp.com/wnzjM5fQ/img/group-5805.png';
   const tags = (post?.attributes?.tags ?? ['Rap', 'Lorem', 'Dictum et', 'Aenean']).map((t, i) => ({ id: i + 1, label: t }));

   return (
      <article className="relative flex w-full max-w-[740px] flex-col items-start gap-6 px-5 md:px-0 md:gap-[30px]">
         <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <img className="relative h-[14.9px] w-5 ml-[-1.00px] md:w-[19.73px]" alt="Views icon" src="https://c.animaapp.com/wnzjM5fQ/img/vector-3.svg" />

            <div className="relative w-fit mt-[-1.00px] font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
               12.094
            </div>
         </div>

         <h1 className="w-full font-saira-cond-display relative text-blackwhite font-[number:var(--saira-cond-display-font-weight)] [font-style:var(--saira-cond-display-font-style)] text-3xl leading-tight sm:text-4xl md:w-[727.77px] md:text-[length:var(--saira-cond-display-font-size)] md:tracking-[var(--saira-cond-display-letter-spacing)] md:leading-[var(--saira-cond-display-line-height)]">
            {title}
         </h1>

         <h2 className="w-full [font-family:'Saira_Condensed',Helvetica] font-bold text-xl leading-6 tracking-[0] relative text-blackwhite sm:text-2xl sm:leading-7 md:w-[727.77px] md:text-[25px] md:leading-[25.9px]">
            {subtitle}
         </h2>

         <p className="w-full md:w-[739.97px] font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] relative text-blackwhite [font-style:var(--saira-16-reg-font-style)]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
            ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
            interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis
            orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
            <br />
            Praesent lorem orci, mattis non efficitur id, ultricies vel nibh.
         </p>

         <img className="relative w-full max-w-[739.5px] h-auto md:h-[321.13px]" alt="Blog post featured image" src={heroImg} />

         <p className="relative w-full md:w-[739.62px] font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] [font-style:var(--saira-16-reg-font-style)]">
            Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,
            magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
            ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium,
            dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus tempor
            eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo
            iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa.
            <br />
            <br />
            Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. Fusce vel tempor elit. Proin tempus,
            magna id scelerisque vestibulum, nulla ex pharetra sapien, tempor posuere massa neque nec felis. Aliquam sem ipsum, vehicula ac tortor vel, egestas
            ullamcorper dui. Curabitur at risus sodales, tristique est id, euismod justo. Mauris nec leo non libero sodales lobortis. Quisque a neque pretium,
            dictum tellus vitae, euismod neque. Nulla facilisi. Phasellus ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus tempor
            eget augue. Aenean at ultricies lorem. Sed egestas ligula tortor, sit amet mattis ex feugiat non. Duis purus diam, dictum et ante at, commodo
            iaculis urna. Aenean lacinia, nisl id vehicula condimentum, enim massa.
         </p>

         <div className="flex w-full flex-col items-start gap-5">
            <div className="relative flex flex-wrap items-start gap-2.5" role="list" aria-label="Article tags">
               {tags.map((tag) => (
                  <div key={tag.id} className="inline-flex items-start gap-2.5 p-2.5 relative bg-blackblack-800 rounded" role="listitem">
                     <div className="relative w-fit mt-[-1.00px] font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
                        {tag.label}
                     </div>
                  </div>
               ))}
            </div>

            <div className="relative inline-flex flex-wrap items-center gap-4 md:gap-[30px]">
               <div className="inline-flex items-center gap-2.5 relative">
                  <img className="relative w-6 h-5 md:w-[26.36px] md:h-[22.55px]" alt="Like icon" src="https://c.animaapp.com/wnzjM5fQ/img/vector-4.svg" />

                  <p className="relative w-auto [font-family:'Saira',Helvetica] font-normal text-blackwhite text-base tracking-[0.24px] leading-4 whitespace-nowrap">
                     <span className="font-[number:var(--saira-16-bold-font-weight)] tracking-[var(--saira-16-bold-letter-spacing)] leading-[var(--saira-16-bold-line-height)] font-saira-16-bold [font-style:var(--saira-16-bold-font-style)] text-[length:var(--saira-16-bold-font-size)]">
                        14 Kişi
                     </span>

                     <span className="tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] font-saira-16-reg [font-style:var(--saira-16-reg-font-weight)] text-[length:var(--saira-16-reg-font-style)]">
                        {' '}
                        Beğendi
                     </span>
                  </p>
               </div>

               <div className="inline-flex items-center gap-2.5 relative">
                  <img className="relative w-6 h-5 md:w-[25.69px] md:h-[22.51px]" alt="Comment icon" src="https://c.animaapp.com/wnzjM5fQ/img/vector-5.svg" />

                  <div className="relative w-2.5 h-[17px] font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackwhite text-[length:var(--saira-16-bold-font-size)] tracking-[var(--saira-16-bold-letter-spacing)] leading-[var(--saira-16-bold-line-height)] whitespace-nowrap [font-style:var(--saira-16-bold-font-style)]">
                     3
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
};

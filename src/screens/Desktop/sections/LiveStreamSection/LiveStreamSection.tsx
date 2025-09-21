import React, { JSX } from 'react';

export const LiveStreamSection = (): JSX.Element => {
   const socialButtons = [
      {
         id: 1,
         text: 'Takip Et',
         icon: '/liveStream/heart.png',
         bgColor: '#864cf6',
         iconWidth: '0.9em',
         iconHeight: '0.9em',
         iconMargin: 'mt-0 mb-0 ml-0',
      },
      {
         id: 2,
         text: 'Abone Ol',
         icon: '/liveStream/star.png',
         bgColor: '#222123',
         iconWidth: '0.9em',
         iconHeight: '0.9em',
         iconMargin: 'mt-0 mb-0 ml-0',
         hasArrow: true,
         arrowIcon: '/liveStream/arrow.png',
      },
   ];

   return (
      <section
         className="md:h-[642px] h-auto overflow-hidden relative w-full bg-blackblack bg-live-stream-pattern bg-cover bg-center bg-no-repeat"
         role="banner"
         aria-label="Live Stream Section"
      >
         <div className="relative h-full w-full max-w-7xl mx-auto px-6">
            <img
               className="hidden lg:block absolute right-6 top-3 w-[340px] h-auto"
               alt="Social media platform icons"
               src="https://c.animaapp.com/fWtWwMnc/img/group-5790@2x.png"
            />

            {/* Küçük ekranda: 2 sütun. Metin üstte (col-span-2), altta Man & Girl yan yana */}
            <div className="grid h-full grid-cols-2 md:grid-cols-12 items-center gap-6 py-10">
               {/* ORTA METİN – ÜSTTE (küçük ekranda col-span-2) */}
               <div className="order-1 md:order-2 col-span-2 md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative flex flex-col items-center">
                     <div className="relative rotate-[-3.70deg] [font-family:'Saira_Condensed',Helvetica] font-light text-blackwhite text-[48px] md:text-[68.2px] tracking-[0] leading-[1] whitespace-nowrap">
                        HER HAFTA
                     </div>

                     <h1 className="relative mt-2 md:mt-3 rotate-[-3.70deg] [font-family:'Saira_Condensed',Helvetica] font-bold text-yellow text-[56px] md:text-[68.2px] tracking-[0] leading-[1] whitespace-nowrap">
                        CANLIDAYIZ!
                     </h1>

                     <img className="hidden md:block absolute -left-24 top-0 w-24 h-24" alt="Decorative arrow element" src="/liveStream/twitch.png" />
                     <img className="hidden md:block absolute -left-3.5 top-1 w-3 h-[145px]" alt="Decorative line element" src="/liveStream/slash.png" />

                     <div className="mt-4 rotate-[-3.70deg] font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackwhite text-[length:var(--saira-16-bold-font-size)] text-center tracking-[var(--saira-16-bold-letter-spacing)] leading-[var(--saira-16-bold-line-height)] whitespace-nowrap [font-style:var(--saira-16-bold-font-style)]">
                        Bizi Takip Edin!
                     </div>
                  </div>

                  <div className="mt-6 xl:mb-16 inline-flex items-start gap-[12.89px] p-[14.06px] bg-[#151515] rounded-[18.75px] border-[1.17px] border-solid border-[#2a2a2a] rotate-[-4.00deg] mx-auto">
                     {socialButtons.map((button) => (
                        <button
                           key={button.id}
                           className="inline-flex items-center justify-center gap-[8.2px] px-[14.06px] py-[10.55px] relative flex-[0_0_auto] rounded-[7.03px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                           style={{ backgroundColor: button.bgColor }}
                           aria-label={button.text}
                        >
                           <img
                              alt=""
                              src={button.icon}
                              className={`${button.iconMargin} inline-block align-middle rotate-[4.00deg] object-contain shrink-0`}
                              style={{ width: button.iconWidth, height: button.iconHeight }}
                           />
                           <span className="relative w-fit mt-[-1.17px] [font-family:'Helvetica-Bold',Helvetica] font-bold text-white text-[14.1px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                              {button.text}
                           </span>
                           {button.hasArrow && (
                              <img
                                 alt=""
                                 src={button.arrowIcon}
                                 className="ml-[6px] inline-block align-middle rotate-[4.00deg] object-contain shrink-0"
                                 style={{ width: button.iconWidth, height: button.iconHeight }}
                              />
                           )}
                        </button>
                     ))}
                  </div>
               </div>

               {/* MAN – küçük ekranda solda/altta; md ve üstü sol blok */}
               <div className="order-2 md:order-1 col-span-1 md:col-span-4 flex justify-end md:justify-start">
                  <img className="w-full max-w-[220px] md:max-w-[420px] h-auto object-contain" alt="Man" src="/liveStream/man.png" />
               </div>

               {/* GIRL – küçük ekranda sağda/altta; md ve üstü sağ blok (daha küçük) */}
               <div className="order-3 md:order-3 col-span-1 md:col-span-4 flex justify-start md:justify-end">
                  <img className="w-full max-w-[170px] sm:max-w-[175px] md:max-w-[340px] h-auto object-contain" alt="Girl" src="/liveStream/girl.png" />
               </div>
            </div>

            <div className="hidden md:block absolute bottom-3 right-6 w-[204px] [font-family:'Archivo_Expanded-Bold',Helvetica] font-bold text-blackblack text-xl tracking-[0] leading-[20.8px]">
               Platformlarda Bizi Takip Edin!
            </div>
         </div>

         <img className="absolute bottom-0 left-0 w-full h-auto" alt="Bottom decorative wave element" src="https://c.animaapp.com/fWtWwMnc/img/vector-7.svg" />
      </section>
   );
};

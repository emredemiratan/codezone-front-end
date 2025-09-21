'use client';
import React, { JSX, useRef, useState } from 'react';

export const FavoritesOfTheMonthSection = (): JSX.Element => {
   const scrollRef = useRef<HTMLDivElement>(null);
   const [scrollProgress, setScrollProgress] = useState(0);

   const handleScroll = () => {
      if (scrollRef.current) {
         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
         const totalScrollableWidth = scrollWidth - clientWidth;
         if (totalScrollableWidth > 0) {
            const currentProgress = (scrollLeft / totalScrollableWidth) * 100;
            setScrollProgress(currentProgress);
         }
      }
   };

   const trendingTracks = [
      {
         id: 1,
         artist: '50 CENT',
         title: 'CURTIS',
         rank: 2,
         coverImage: '/favoritesOfTheMonth/50Cent.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group@2x.png',
      },
      {
         id: 2,
         artist: 'SNOPP DOGG',
         title: 'ALGORITHM',
         rank: 3,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-1@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-1.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-2@2x.png',
      },
      {
         id: 3,
         artist: 'CEZA',
         title: 'RÜZGAR',
         rank: 1,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-2@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-2.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-3@2x.png',
      },
      {
         id: 4,
         artist: '50 CENT',
         title: 'CURTIS',
         rank: 2,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group@2x.png',
      },
      {
         id: 5,
         artist: 'SNOPP DOGG',
         title: 'ALGORITHM',
         rank: 3,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-1@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-1.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-2@2x.png',
      },
      {
         id: 6,
         artist: 'CEZA',
         title: 'RÜZGAR',
         rank: 1,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-2@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-2.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-3@2x.png',
      },
      {
         id: 7,
         artist: '50 CENT',
         title: 'CURTIS',
         rank: 2,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group@2x.png',
      },
      {
         id: 8,
         artist: 'SNOPP DOGG',
         title: 'ALGORITHM',
         rank: 3,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-1@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-1.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-2@2x.png',
      },
      {
         id: 9,
         artist: 'CEZA',
         title: 'RÜZGAR',
         rank: 1,
         coverImage: 'https://c.animaapp.com/fWtWwMnc/img/cover-picture-2@2x.png',
         playButton: 'https://c.animaapp.com/fWtWwMnc/img/play-button-2.svg',
         backgroundImage: 'https://c.animaapp.com/fWtWwMnc/img/group-3@2x.png',
      },
   ];

   return (
      <section className="relative w-full bg-blackblack overflow-hidden">
         <img
            className="hidden sm:block absolute top-0 left-0 w-[596px] max-w-[70%] h-auto pointer-events-none select-none z-0"
            alt="Vector"
            src="https://c.animaapp.com/fWtWwMnc/img/vector-7-1.svg"
         />

         <div className="hidden sm:block absolute top-[30px] left-[91px] z-10 pointer-events-none select-none">
            <img src="/favoritesOfTheMonth/youtube.png" alt="YouTube" className="w-40 h-12 object-contain" />
         </div>

         <div className="hidden sm:block absolute top-[30px] left-[290px] z-10 pointer-events-none select-none">
            <img src="/favoritesOfTheMonth/spotify.png" alt="Spotify" className="w-[163px] h-11 object-contain" />
         </div>

         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <div className="sm:hidden relative h-12 mb-4">
               <img
                  className="absolute inset-0 w-full h-full object-cover object-left"
                  alt="Platformlar beyaz şerit"
                  src="https://c.animaapp.com/fWtWwMnc/img/vector-7-1.svg"
               />
               <div className="relative z-10 flex items-center gap-4 h-full pl-4 pr-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                  <img className="h-9 w-auto flex-shrink-0 snap-start" alt="YouTube" src="favoritesOfTheMonth/youtube.png" />
                  <img className="h-10 w-auto flex-shrink-0 snap-start" alt="Spotify" src="favoritesOfTheMonth/spotify.png" />
               </div>
            </div>

            <div className="mt-2 sm:mt-10 flex flex-col md:flex-row md:items-start md:justify-between md:gap-10 lg:gap-16">
               <div className="md:w-[260px] md:flex-shrink-0">
                  <h2 className="pt-14 sm:pt-24 md:pt-12 text-center md:text-left font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[34px] sm:text-[48px] md:text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] [font-style:var(--saira-cond-display-font-style)]">
                     AYIN
                     <br />
                     FAVORİLERİ
                  </h2>
               </div>

               <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="mt-8 sm:mt-10 md:mt-12 md:w-[926px] md:ml-auto flex gap-6 sm:gap-[50px] overflow-x-auto no-scrollbar pb-2 sm:pb-4 px-1 pl-4 md:pl-0 pr-4 md:pr-0 scroll-smooth snap-x snap-mandatory"
               >
                  {trendingTracks.map((track, index) => (
                     <article
                        key={track.id}
                        className={`relative flex-shrink-0 w-[240px] h-[230px] sm:w-[274px] sm:h-[264px] overflow-hidden bg-no-repeat bg-cover snap-center ${
                           index === 0 ? 'ml-6 sm:ml-0' : ''
                        } ${index === trendingTracks.length - 1 ? 'mr-6 sm:mr-0' : ''}`}
                        style={{ backgroundImage: `url(${track.backgroundImage})` }}
                     >
                        <p className="absolute top-[45%] left-24 sm:left-28 right-3 text-blackwhite text-sm sm:text-xl text-center tracking-[0] leading-[18px] sm:leading-[20.8px] [font-family:'Saira',Helvetica] font-normal">
                           <span className="[font-family:'Saira',Helvetica] font-normal text-white text-sm sm:text-xl tracking-[0] leading-[18px] sm:leading-[20.8px]">
                              {track.artist}
                              <br />
                           </span>
                           <span className="font-bold">{track.title}</span>
                        </p>

                        <div className="inline-flex items-start gap-2.5 px-2.5 py-[5px] absolute top-[60px] sm:top-[71px] left-24 sm:left-28 bg-blackblack-800 rounded-[65px]">
                           <p className="relative w-fit mt-[-1.00px] [font-family:'Saira',Helvetica] font-normal text-blackwhite text-xs sm:text-base text-center tracking-[0.24px] leading-[14px] sm:leading-[16.6px] whitespace-nowrap">
                              <span className="tracking-[0.04px]">Top 10 </span>
                              <span className="font-bold tracking-[0.04px]">({track.rank}. Sıra)</span>
                           </p>
                        </div>

                        <img
                           className="absolute top-[14px] left-[-100px] sm:left-[-124px] w-[185px] h-[185px] sm:w-[213px] sm:h-[213px] object-cover"
                           alt={`${track.artist} - ${track.title} cover`}
                           src={track.coverImage}
                        />

                        <button
                           className="absolute top-[78px] left-[-44px] sm:top-[90px] sm:left-[-51px] w-[58px] h-[58px] sm:w-[65px] sm:h-[65px]"
                           aria-label={`Play ${track.artist} - ${track.title}`}
                        >
                           <img className="w-full h-full" alt="Play button" src={track.playButton} />
                        </button>
                     </article>
                  ))}
               </div>
            </div>

            <div className="mt-8 sm:mt-10 w-[80%] sm:w-[60%] max-w-[640px] mx-auto h-[5px] bg-blackblack-900 rounded-[60px]">
               <div className="h-[5px] bg-yellow rounded-[60px]" style={{ width: `${scrollProgress}%` }} />
            </div>
         </div>
      </section>
   );
};

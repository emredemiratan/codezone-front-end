import React, { JSX } from 'react';
const featuredArtists = [
   {
      id: '01',
      name: 'Jonathan Stewart',
      description: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
      avatar: '/trends/jonathanStewart.png',
   },
   {
      id: '02',
      name: 'Steve Rogerson',
      description: 'PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.',
      avatar: '/trends/steveRogerson.png',
   },
   {
      id: '03',
      name: 'Ismail Kor',
      description: 'ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...',
      avatar: '/trends/ismailKor.png',
   },
   {
      id: '04',
      name: 'Jonathan Stewart',
      description: 'LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT UT ET MASSA MI.',
      avatar: '/trends/jonathanStewart.png',
   },
   {
      id: '05',
      name: 'Steve Rogerson',
      description: 'PRAESENT LOREM ORCI, MATTIS NON EFFICITUR ID CURABITUR AT RISUS SODALES AENEAN AT.',
      avatar: '/trends/steveRogerson.png',
   },
   {
      id: '06',
      name: 'Ismail Kor',
      description: 'ULTRICIES DIGNISSIM NIBH UT CURSUS. NAM ET QUAM SIT AMET TURPIS FINIBUS MAXIMUS ...',
      avatar: '/trends/ismailKor.png',
   },
];

const ArtistCard = ({ artist }: { artist: (typeof featuredArtists)[0] }) => {
   return (
      <article className="w-full">
         <div className="flex items-center gap-3">
            <div className="font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackblack-900 text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
               {artist.id}
            </div>

            <img className="w-[33px] h-[33px]" alt={`${artist.name} avatar`} src={artist.avatar} />

            <div className="font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-white text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
               {artist.name}
            </div>
         </div>

         <p className="mt-4 font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)]">
            {artist.description}
         </p>

         <img className="mt-4 w-full h-px object-cover" alt="Divider line" src="https://c.animaapp.com/fWtWwMnc/img/vector-10-5.svg" />

         <button className="mt-4 inline-flex items-center gap-2 font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] [font-style:var(--saira-16-reg-font-style)]">
            Daha Fazla Oku
            <img className="w-[13px] h-[13px]" alt="Read more arrow" src="https://c.animaapp.com/fWtWwMnc/img/group-27-11@2x.png" />
         </button>
      </article>
   );
};

export const FeaturedArtistsSection = (): JSX.Element => {
   return (
      <section className="relative w-full bg-blackblack">
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <header className="flex items-center gap-3 sm:gap-4 justify-center md:justify-start">
               <h1 className="font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[34px] sm:text-[48px] md:text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
                  TRENDLER
               </h1>

               <img className="w-10 h-10 sm:w-12 sm:h-12 md:w-[66px] md:h-[66px] ml-0 md:ml-[20px]" alt="Trending up icon" src="/trends/rise.png" />
            </header>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
               {featuredArtists.map((artist) => (
                  <ArtistCard key={artist.id} artist={artist} />
               ))}
            </div>

            <div className="mt-12 flex justify-center">
               <button
                  className="relative w-[180px] h-11 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                  type="button"
                  aria-label="Tümünü Gör"
               >
                  <img className="absolute inset-0 w-full h-full mb-" alt="" src="/trends/seeAll.png" aria-hidden="true" />
                  <span className="absolute inset-0 flex items-center justify-center font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackblack">
                     Tümünü Gör
                  </span>
               </button>
            </div>
         </div>
      </section>
   );
};

'use client';
import React, { JSX, useState } from 'react';
import data from '../../../../data.json';
type DataJsonItem = {
   _id?: string;
   attributes?: {
      title?: string;
      img?: string;
      authors?: string[];
   };
   createdAt?: string;
};

const blogPosts = (Array.isArray(data) ? (data as DataJsonItem[]) : []).map((item, index) => {
   const createdAt = item.createdAt ? new Date(item.createdAt) : null;
   const formattedDate = createdAt ? createdAt.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }) : '';

   return {
      id: index + 1,
      image: item.attributes?.img ?? '/discover/discoverOne.png',
      date: formattedDate,
      authorImage: '/trends/jonathanStewart.png',
      authorName: item.attributes?.authors?.[0] ?? 'Rapkology',
      title: item.attributes?.title ?? '',
      dividerImage: '/discover/vector.png',
   };
});

const categoryTags = [
   { id: 1, name: 'Türk Rap' },
   { id: 2, name: 'Yabancı Rap' },
   { id: 3, name: 'Rap Haberleri' },
   { id: 4, name: 'Haftanın Klipleri' },
   { id: 5, name: 'Ayın Klipleri' },
   { id: 6, name: 'Rap Sohbetleri' },
   { id: 7, name: 'Rap Müsabakaları' },
];

const footerLinks = [
   { id: 1, name: 'HABERLER', column: 1 },
   { id: 2, name: 'ETKİNLİKLER', column: 2 },
   { id: 3, name: 'MÜZİKLER', column: 1 },
   { id: 4, name: 'VİDEOLAR', column: 2 },
   { id: 5, name: 'İLETİŞİM', column: 3 },
];

export const DiscoverSection = (): JSX.Element => {
   const [email, setEmail] = useState('');
   const [activeCategory, setActiveCategory] = useState<number | null>(2);
   const [viewMode, setViewMode] = useState('list');

   const handleEmailSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Email submitted:', email);
   };

   const handleCategoryClick = (categoryId: number) => {
      setActiveCategory(categoryId);
   };

   return (
      <section className="relative w-full bg-blackblack" role="main" aria-label="Keşfet Bölümü">
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-4">
                  <h1 className="font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
                     KEŞFET
                  </h1>
                  <img className="hidden sm:block w-[54px] h-[54px]" alt="Compass" src="/discover/compass.png" />
               </div>
               <div className="hidden sm:flex items-center gap-4">
                  <button
                     aria-label="Search"
                     className="group cursor-pointer p-2 rounded transition-colors hover:bg-blackwhite/10 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                  >
                     <img className="w-6 h-[19px] transition-transform duration-200 group-hover:scale-110" alt="Search" src="/discover/search.png" />
                  </button>
                  <button
                     aria-label="Grid View"
                     onClick={() => setViewMode('list')}
                     className="group cursor-pointer p-2 rounded transition-colors hover:bg-blackwhite/10 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                  >
                     <img className="w-6 h-[19px] transition-transform duration-200 group-hover:scale-110" alt="Grid View Icon" src="/discover/grid.png" />
                  </button>
                  <button
                     aria-label="List View"
                     onClick={() => setViewMode('grid')}
                     className="group cursor-pointer p-2 rounded transition-colors hover:bg-blackwhite/10 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                  >
                     <img className="w-[23px] h-[19px] transition-transform duration-200 group-hover:scale-110" alt="List View Icon" src="/discover/list.png" />
                  </button>
               </div>
            </div>

            <h2 className="mt-6 font-saira-cond-40-bold font-[number:var(--saira-cond-40-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-40-bold-font-size)] tracking-[var(--saira-cond-40-bold-letter-spacing)] leading-[var(--saira-cond-40-bold-line-height)] [font-style:var(--saira-cond-40-bold-font-style)]">
               NE GÖRMEK İSTERSİN?
            </h2>

            <nav className="mt-6 overflow-x-auto no-scrollbar" aria-label="Category filters">
               <div className="flex flex-nowrap gap-3 min-w-max">
                  {categoryTags.map((tag) => (
                     <button
                        key={tag.id}
                        onClick={() => handleCategoryClick(tag.id)}
                        className={`inline-flex items-center gap-2.5 px-5 py-2.5 border border-solid transition-colors ${
                           activeCategory === tag.id
                              ? 'bg-yellow border-blackblack text-blackblack font-saira-16-bold'
                              : 'border-blackwhite text-blackwhite font-saira-16-reg hover:bg-blackwhite hover:text-blackblack'
                        }`}
                     >
                        <span
                           className={`relative w-fit mt-[-1.00px] text-[length:var(--saira-16-reg-font-size)] text-center tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)] font-[number:var(${
                              activeCategory === tag.id ? '--saira-16-bold-font-weight' : '--saira-16-reg-font-weight'
                           })]`}
                        >
                           {tag.name}
                        </span>
                     </button>
                  ))}
               </div>
            </nav>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] gap-10">
               <div>
                  <div className={viewMode === 'list' ? 'flex flex-col gap-10' : 'grid grid-cols-2 gap-6'}>
                     {blogPosts.map((post) => (
                        <article
                           key={post.id}
                           className="flex flex-col items-start gap-4 group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
                        >
                           <img
                              className={
                                 (viewMode === 'list' ? 'w-full h-auto object-cover' : 'w-full h-48 object-cover') +
                                 ' transition-transform duration-300 group-hover:scale-[1.02]'
                              }
                              alt={`Blog post ${post.id} featured image`}
                              src={post.image}
                           />
                           <time className="text-blackblack-700 text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] [font-style:var(--saira-16-reg-font-style)]">
                              {post.date}
                           </time>
                           <div className="inline-flex items-center gap-4">
                              <img className="w-8 h-8" alt={`${post.authorName} profile picture`} src={post.authorImage} />
                              <div className="font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-white text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
                                 {post.authorName}
                              </div>
                           </div>
                           <p className="font-saira-cond-25-bold font-[number:var(--saira-cond-25-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-25-bold-font-size)] tracking-[var(--saira-cond-25-bold-letter-spacing)] leading-[var(--saira-cond-25-bold-line-height)] [font-style:var(--saira-cond-25-bold-font-style)] transition-colors group-hover:text-yellow">
                              {post.title}
                           </p>
                           <img className="w-full h-px object-cover" alt="Divider" src={post.dividerImage} />
                           <div className="inline-flex items-center gap-2">
                              <button
                                 className="inline-flex items-center font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] [font-style:var(--saira-16-reg-font-style)] hover:opacity-90 transition-all underline-offset-4 hover:underline"
                                 aria-label={`Read more about ${post.title}`}
                              >
                                 Daha Fazla Oku
                              </button>
                              <img
                                 className="w-[13px] h-[13px] opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                                 alt=""
                                 src="/discover/arrow.png"
                              />
                           </div>
                        </article>
                     ))}
                  </div>
                  <div className="pt-8 flex justify-center">
                     <button
                        className="relative w-[180px] h-11 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                        type="button"
                        aria-label="Daha Fazla Gör"
                     >
                        <img className="absolute inset-0 w-full h-full" alt="" src="/discover/seeMore.png" aria-hidden="true" />
                        <span className="absolute inset-0 flex items-center justify-center font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackblack">
                           Daha Fazla Gör
                        </span>
                     </button>
                  </div>
               </div>
               <aside className="lg:pl-6">
                  <p className="font-saira-cond-40-bold font-[number:var(--saira-cond-40-bold-font-weight)] text-blackwhite text-[length:var(--saira-cond-40-bold-font-size)] tracking-[var(--saira-cond-40-bold-letter-spacing)] leading-[var(--saira-cond-40-bold-line-height)] [font-style:var(--saira-cond-40-bold-font-style)]">
                     GELİŞMELERDEN İLK SEN HABERDAR OL!
                  </p>

                  <form onSubmit={handleEmailSubmit} className="mt-6 w-full max-w-[416px]">
                     <label
                        htmlFor="email-input"
                        className="block mb-2 font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-blackwhite text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] [font-style:var(--saira-14-bold-font-style)]"
                     >
                        EMAIL
                     </label>
                     <div className="relative">
                        <input
                           id="email-input"
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           className="w-[300px] h-9 bg-transparent text-blackwhite font-saira-14-reg outline-none"
                           required
                        />
                        <img
                           className="absolute left-0 top-[35px] w-full h-px object-cover pointer-events-none"
                           alt=""
                           src="https://c.animaapp.com/fWtWwMnc/img/vector-7-2.svg"
                        />
                        <button
                           type="submit"
                           className="absolute right-0 top-0 w-[83px] h-3.5 cursor-pointer hover:opacity-80 transition-opacity"
                           aria-label="Submit email"
                        >
                           <span className="font-saira-14-bold font-[number:var(--saira-14-bold-font-weight)] text-yellow text-[length:var(--saira-14-bold-font-size)] tracking-[var(--saira-14-bold-letter-spacing)] leading-[var(--saira-14-bold-line-height)] [font-style:var(--saira-14-bold-font-style)]">
                              GÖNDER
                           </span>
                           <img className="inline-block ml-2 w-3 h-3 align-[-2px]" alt="" src="/discover/arrow.png" />
                        </button>
                     </div>
                  </form>

                  <div className="mt-8">
                     <img className="w-56 h-[35px]" alt="Social media links" src="/discover/socialMedia.png" />
                  </div>

                  <footer className="mt-10">
                     <nav aria-label="Footer navigation">
                        <div className="grid grid-cols-3 gap-x-10 gap-y-4">
                           {footerLinks.map((link) => (
                              <a
                                 key={link.id}
                                 href="#"
                                 className="font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackwhite text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] [font-style:var(--saira-14-reg-font-style)] hover:text-yellow transition-colors"
                                 style={{ gridColumn: link.column }}
                              >
                                 {link.name}
                              </a>
                           ))}
                        </div>
                     </nav>

                     <p className="mt-6 w-[381px] font-saira-14-reg font-[number:var(--saira-14-reg-font-weight)] text-blackblack-500 text-[length:var(--saira-14-reg-font-size)] tracking-[var(--saira-14-reg-letter-spacing)] leading-[var(--saira-14-reg-line-height)] [font-style:var(--saira-14-reg-font-style)]">
                        © RAPKOLOGY All Rights Are Reserved 2022.
                     </p>
                  </footer>
               </aside>
            </div>
         </div>
      </section>
   );
};

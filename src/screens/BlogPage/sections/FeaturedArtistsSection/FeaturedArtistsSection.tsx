'use client';
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import data from '../../../../data.json';

type DataJsonItem = {
   attributes?: {
      title?: string;
      img?: string;
      authors?: string[];
      slug?: string;
   };
   createdAt?: string;
};

const avatarPool = ['/trends/jonathanStewart.png', '/trends/steveRogerson.png', '/trends/ismailKor.png'];

const items = (Array.isArray(data) ? (data as DataJsonItem[]) : [])
   .slice()
   .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
   .slice(0, 8);

const blogPosts = items.map((item, index) => {
   const createdAt = item.createdAt ? new Date(item.createdAt) : null;
   const formattedDate = createdAt ? createdAt.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' }) : '';
   return {
      id: index + 1,
      author: item.attributes?.authors?.[0] ?? 'Rapkology',
      authorImage: avatarPool[index % avatarPool.length],
      image: item.attributes?.img ?? '/blog/blog.png',
      date: formattedDate,
      title: item.attributes?.title ?? '',
      divider: '/discover/vector.png',
      readMoreIcon: '/discover/arrow.png',
      slug: item.attributes?.slug ?? '',
   };
});

const categories = [
   { id: 1, name: 'Yabancı Rap', active: true },
   { id: 2, name: 'Türk Rap', active: false },
   { id: 3, name: 'Rap Haberleri', active: false },
   { id: 4, name: 'Haftanın Klipleri', active: false },
   { id: 5, name: 'Ayın Klipleri', active: false },
   { id: 6, name: 'Rap Sohbetleri', active: false },
   { id: 7, name: 'Rap Müsabakaları', active: false },
];

export const FeaturedArtistsSection = (): JSX.Element => {
   const [activeCategory, setActiveCategory] = useState(1);

   const handleCategoryClick = (categoryId: number) => {
      setActiveCategory(categoryId);
   };

   const handleReadMore = (postId: number) => {
      console.log(`Read more clicked for post ${postId}`);
   };

   const handleLoadMore = () => {
      console.log('Load more posts');
   };

   const BlogPostCard = ({ post }: { post: (typeof blogPosts)[0] }) => (
      <article className="flex flex-col items-start gap-5 group cursor-pointer transition-transform duration-200 hover:-translate-y-1">
         <div className="flex flex-col items-start gap-[18px] w-full">
            <header className="flex items-center gap-4">
               <img className="w-[32.74px] h-[32.74px]" alt={`${post.author} profile`} src={post.authorImage} />
               <h3 className="font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-white text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
                  {post.author}
               </h3>
            </header>

            <div className="relative w-full pb-[64.5%] overflow-hidden">
               <Link href={`/blog/${post.slug}`} aria-label={`Go to ${post.title}`} className="block">
                  <img
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                     alt="Blog post featured image"
                     src={post.image}
                  />
               </Link>
            </div>

            <time className="font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackblack-600 text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)]">
               {post.date}
            </time>
         </div>

         <div className="flex flex-col items-start gap-[18px] w-full">
            <Link href={`/blog/${post.slug}`} className="w-full mt-[-1.00px]">
               <p className="text-blackwhite text-[length:var(--saira-con-20-bold-font-size)] leading-[var(--saira-con-20-bold-line-height)] font-saira-con-20-bold font-[number:var(--saira-con-20-bold-font-weight)] tracking-[var(--saira-con-20-bold-letter-spacing)] [font-style:var(--saira-con-20-bold-font-style)] transition-colors group-hover:text-yellow">
                  {post.title}
               </p>
            </Link>

            <img className="w-full h-px object-cover" alt="Divider" src={post.divider} />

            <Link
               href={`/blog/${post.slug}`}
               className="relative w-fit h-[17px] cursor-pointer inline-flex items-center gap-2"
               aria-label={`Read more about ${post.title}`}
            >
               <span className="font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite text-[length:var(--saira-16-reg-font-size)] tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)] underline-offset-4 group-hover:underline transition-all">
                  Daha Fazla Oku
               </span>
               <img
                  className="w-[13px] h-[13px] opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  alt=""
                  src={post.readMoreIcon}
               />
            </Link>
         </div>
      </article>
   );

   return (
      <section className="relative w-full bg-blackblack overflow-hidden">
         {/* Decorative background only on desktop */}
         <img
            className="pointer-events-none hidden lg:block absolute w-[43.45%] h-[43.77%] top-0 left-0"
            alt="Background decoration"
            src="https://c.animaapp.com/kkcWJj7D/img/path-0-1.svg"
         />

         {/* Content container */}
         <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-20 py-10">
            {/* Header row */}
            <div className="flex items-center justify-between gap-6">
               <h1 className="font-saira-cond-display font-[number:var(--saira-cond-display-font-weight)] text-blackwhite text-[length:var(--saira-cond-display-font-size)] tracking-[var(--saira-cond-display-letter-spacing)] leading-[var(--saira-cond-display-line-height)] whitespace-nowrap [font-style:var(--saira-cond-display-font-style)]">
                  KEŞFET
               </h1>
               <div className="hidden md:flex items-center gap-7">
                  <img className="w-6 h-6" alt="Search icon" src="https://c.animaapp.com/kkcWJj7D/img/group-30@2x.png" />
                  <div className="flex items-center gap-[27px] min-w-[74px]">
                     <button aria-label="Grid view">
                        <img className="w-6 h-[19px]" alt="Grid view" src="https://c.animaapp.com/kkcWJj7D/img/group-5782@2x.png" />
                     </button>
                     <button aria-label="List view">
                        <img className="w-[23px] h-[19px]" alt="List view" src="https://c.animaapp.com/kkcWJj7D/img/group-5783@2x.png" />
                     </button>
                  </div>
               </div>
            </div>

            {/* Categories chips */}
            <nav className="mt-6 overflow-x-auto no-scrollbar">
               <div className="flex items-start gap-5 min-w-max">
                  {categories.map((category) => (
                     <button
                        key={category.id}
                        className={`inline-flex items-start gap-2.5 px-5 py-2.5 border border-solid ${
                           activeCategory === category.id ? 'bg-yellow border-blackblack' : 'border-blackwhite'
                        }`}
                        onClick={() => handleCategoryClick(category.id)}
                        aria-pressed={activeCategory === category.id}
                     >
                        <span
                           className={`text-[length:var(--saira-16-reg-font-size)] text-center tracking-[var(--saira-16-reg-letter-spacing)] leading-[var(--saira-16-reg-line-height)] whitespace-nowrap [font-style:var(--saira-16-reg-font-style)] ${
                              activeCategory === category.id
                                 ? 'font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackblack'
                                 : 'font-saira-16-reg font-[number:var(--saira-16-reg-font-weight)] text-blackwhite'
                           }`}
                        >
                           {category.name}
                        </span>
                     </button>
                  ))}
               </div>
            </nav>

            {/* Posts grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
               {blogPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
               ))}
            </div>

            {/* Load more */}
            <div className="mt-10 flex justify-center">
               <button className="relative w-[197px] h-12 cursor-pointer" onClick={handleLoadMore} aria-label="Load more blog posts">
                  <img
                     className="absolute top-0 left-0 w-[204px] h-[57px]"
                     alt="Load more button background"
                     src="https://c.animaapp.com/kkcWJj7D/img/vector-4-1.svg"
                  />
                  <span className="absolute top-4 left-[39px] font-saira-16-bold font-[number:var(--saira-16-bold-font-weight)] text-blackblack text-[length:var(--saira-16-bold-font-size)] text-center tracking-[var(--saira-16-bold-letter-spacing)] leading-[var(--saira-16-bold-line-height)] whitespace-nowrap [font-style:var(--saira-16-bold-font-style)]">
                     Daha Fazla Gör
                  </span>
               </button>
            </div>
         </div>
      </section>
   );
};

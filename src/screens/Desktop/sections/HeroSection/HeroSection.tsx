'use client';
import React, { JSX, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import data from '../../../../data.json';

export const HeroSection = (): JSX.Element => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const swiperRef = useRef<SwiperType | null>(null);

   type DataJsonItem = {
      _id?: string;
      attributes?: {
         title?: string;
         desc?: string;
         img?: string;
      };
      createdAt?: string;
   };

   const baseSlides = [
      {
         id: 'hero-1',
         image: '/hero/hero1.png',
         title: (
            <span className="text-white md:text-black">
               DÜNYA RAP
               <br />
               TRENDLERİNİ
               <br />
               KONUŞUYORUZ.
            </span>
         ),
         description: (
            <span className="text-white md:text-black">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis nostrud exercitation ullamco laboris nisi
            </span>
         ),
      },
      {
         id: 'hero-2',
         image: '/hero/hero2.png',
         title: (
            <span>
               TÜRKÇE RAP VE
               <br />
               DÜNYA MÜZİK
               <br />
               HABERLERİNİ TAKİP ET
            </span>
         ),
         description: (
            <span>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis nostrud exercitation ullamco laboris nisi
            </span>
         ),
      },
   ];

   const jsonSlides = (Array.isArray(data) ? (data as DataJsonItem[]) : [])
      .slice()
      .sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime())
      .slice(0, 4)
      .map((item, idx) => ({
         id: `json-${idx}`,
         image: item.attributes?.img ?? '/hero/hero1.png',
         title: item.attributes?.title ?? '',
         description: item.attributes?.desc ?? '',
      }));

   const slides = [...baseSlides, ...jsonSlides];

   const handleSlideChange = (swiper: SwiperType) => {
      setCurrentSlide(swiper.realIndex);
   };

   const handleDotClick = (index: number) => {
      if (swiperRef.current) {
         swiperRef.current.slideToLoop(index);
      }
   };

   return (
      <section className="relative w-full md:h-[703px] bg-black" role="banner">
         <Swiper
            modules={[Navigation, Pagination]}
            loop
            onSwiper={(swiper) => {
               swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            className="w-full md:h-full"
            navigation={{
               prevEl: '.prev-slide-button',
               nextEl: '.next-slide-button',
            }}
         >
            {slides.map((slide) => (
               <SwiperSlide key={slide.id} className="relative">
                  <img className="absolute inset-0 w-full h-full object-cover hidden md:block" alt="Slider background" src={slide.image} />
                  <div className="absolute inset-0 bg-black/20 hidden md:block" />
                  <div className="relative z-10 w-full md:h-full sm:flex sm:items-center sm:justify-end pt-24 pb-12 md:pt-0 md:pb-0">
                     <div className="w-full px-8">
                        <div className="mx-auto sm:mx-0 sm:ml-auto  md:max-w-[360px]  xl:max-w-[760px] 2xl:max-w-[760px] max-w-xl text-white text-center sm:text-left grid place-items-center sm:place-items-start justify-items-center sm:justify-items-start gap-6 md:pr-8 lg:pr-16">
                           <h1 className="font-saira-condensed font-bold text-3xl text-center md:text-left md:text-[40px] md:leading-[110%] md:tracking-[-0.02em] xl:text-[60.1px] xl:leading-[110%] xl:tracking-[-0.02em]">
                              {slide.title}
                           </h1>

                           <p className="-mt-2 md:mt-8 max-w-md font-saira font-normal text-[16px] leading-[120%] tracking-[0.015em] text-center sm:text-left">
                              {slide.description}
                           </p>

                           <div className=" flex justify-center sm:justify-start">
                              <button
                                 className="relative w-[142px] h-11 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2"
                                 type="button"
                                 aria-label="Devamını oku"
                              >
                                 <img className="absolute inset-0 w-full h-full" alt="" src="/hero/continue.png" aria-hidden="true" />
                                 <span className="absolute inset-0 flex items-center justify-center font-saira-14-bold font-bold text-blackblack">
                                    Devamını Oku
                                 </span>
                              </button>
                           </div>

                           <div className="mt-0 md:hidden -mx-8">
                              <Image className="w-full h-auto" src={slide.image} alt="Slide image" width={800} height={450} />
                           </div>

                           <div className="mt-6 md:hidden">
                              <div className="inline-flex items-center justify-start gap-2" role="group" aria-label="Slayt göstergesi">
                                 {slides.map((s, index) => (
                                    <button
                                       key={s.id}
                                       onClick={() => handleDotClick(index)}
                                       className={`relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 ${
                                          currentSlide === index ? 'w-3 h-3 bg-yellow rounded' : 'w-2.5 h-2.5 bg-blackblack-950 rounded hover:bg-blackblack-700'
                                       }`}
                                       aria-label={`Slayt ${index + 1}${currentSlide === index ? ' (aktif)' : ''}`}
                                       aria-current={currentSlide === index ? 'true' : 'false'}
                                    />
                                 ))}
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>

         <Image className="absolute bottom-0 left-0 w-full z-[5] hidden md:block" src="/hero/wave.svg" alt="Wavy separator" width={1440} height={186} />

         <div className="absolute bottom-[115px] z-20 w-full hidden md:block">
            <div className="container mx-auto px-8">
               <div className="ml-auto max-w-xl">
                  <div className="inline-flex items-center justify-center gap-[9.61px]" role="group" aria-label="Slayt göstergesi">
                     {slides.map((slide, index) => (
                        <button
                           key={slide.id}
                           onClick={() => handleDotClick(index)}
                           className={`relative transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow focus:ring-offset-2 ${
                              currentSlide === index
                                 ? 'w-[11.82px] h-[11.82px] bg-yellow rounded-[5.91px]'
                                 : 'w-[6.63px] h-[6.63px] bg-blackblack-950 rounded-[3.32px] hover:bg-blackblack-700'
                           }`}
                           aria-label={`Slayt ${index + 1}${currentSlide === index ? ' (aktif)' : ''}`}
                           aria-current={currentSlide === index ? 'true' : 'false'}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <button
            className="next-slide-button absolute top-1/2 -translate-y-1/2 right-[70px] z-20 h-6 w-6 cursor-pointer transition-opacity hover:opacity-80 hidden md:block"
            type="button"
            aria-label="Sonraki slayt"
         >
            <Image src="/slider/right.png" alt="Next Slide" width={24} height={24} />
         </button>

         <button
            className="prev-slide-button absolute top-1/2 -translate-y-1/2 left-[70px] z-20 h-6 w-6 cursor-pointer transition-opacity hover:opacity-80 hidden md:block"
            type="button"
            aria-label="Önceki slayt"
         >
            <Image src="/slider/left.png" alt="Previous Slide" width={24} height={24} />
         </button>
      </section>
   );
};

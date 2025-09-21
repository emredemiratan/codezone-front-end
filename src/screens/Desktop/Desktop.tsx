import React, { JSX } from 'react';
import { DiscoverSection } from './sections/DiscoverSection/DiscoverSection';
import { FeaturedArtistsSection } from './sections/FeaturedArtistsSection/FeaturedArtistsSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { LiveStreamSection } from './sections/LiveStreamSection/LiveStreamSection';
import { FavoritesOfTheMonthSection } from './sections/FavoritesOfTheMonthSection/FavoritesOfTheMonthSection';

export const Desktop = (): JSX.Element => {
   return (
      <div className="flex flex-col items-start " data-model-id="1:380">
         <HeroSection />
         <LiveStreamSection />
         <FeaturedArtistsSection />
         <FavoritesOfTheMonthSection />
         <DiscoverSection />
      </div>
   );
};

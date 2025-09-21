import React from 'react';
import { BlogSection } from './sections/BlogSection/BlogSection';
import { ExploreSection } from './sections/ExploreSection/ExploreSection';
import { FeaturedArtistsSection } from './sections/FeaturedArtistsSection/FeaturedArtistsSection';

export const BlogPage = () => {
   return (
      <div className="flex w-full flex-col items-start relative" data-model-id="1:545">
         <ExploreSection />
         <FeaturedArtistsSection />
         <BlogSection />
      </div>
   );
};

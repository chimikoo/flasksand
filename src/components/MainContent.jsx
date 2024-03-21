import React from 'react';

import Introduction from './Introduction';
import Gallery from './Gallery';
import ContentSection from './ContentSection';
import Testimonials from './Testimonial'
import Clients from './Sponsors'
import Pricing from './Pricing';

const MainContent = () => {
  return (
    <main id="content">
      {/* Introduction */}
        <Introduction />
      {/* End of Introduction */}

      {/* Gallery */}
        <Gallery />
      {/* End of Gallery */}

      {/* Content Section */}
      <ContentSection />
      {/* End of Content Section */}

      {/* Testimonials */}
      <Testimonials />
      {/* End of Testimonials */}
      
      <Pricing />

      {/* Clients */}
      <Clients />
      {/* End of Clients */}
    </main>
  );
};

export default MainContent;
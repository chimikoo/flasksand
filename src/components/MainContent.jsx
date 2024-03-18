import React from 'react';

const MainContent = () => {
  return (
    <main id="content">
      {/* Introduction */}
      <section id="about" className="introduction scrollto">
        <div className="row clearfix">
          <div className="col-3">
            <div className="section-heading">
              <h3>SUCCESS</h3>
              <h2 className="section-title">How We Help You To Sell Your Product</h2>
              <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
            </div>
          </div>
          <div className="col-2-3">
            {/* Icon Blocks */}
            {/* Include your Icon Blocks component here */}
          </div>
        </div>
      </section>
      {/* End of Introduction */}

      {/* Gallery */}
      <aside id="gallery" className="row text-center scrollto clearfix" data-featherlight-gallery data-featherlight-filter="a">
        {/* Include your Gallery component here */}
      </aside>
      {/* End of Gallery */}

      {/* Content Section */}
      <div id="services" className="scrollto clearfix">
        <div className="row no-padding-bottom clearfix">
          {/* Content Left Side */}
          <div className="col-3">
            {/* User Testimonial */}
            {/* Include your User Testimonial component here */}
          </div>
          {/* End of Content Left Side */}
          
          {/* Content Right Side */}
          <div className="col-3">
            {/* Include your Content Right Side component here */}
          </div>
          {/* End of Content Right Side */}

          {/* Another Section or Component */}
          <div className="col-3">
            {/* Include another section or component here */}
          </div>
        </div>
      </div>
      {/* End of Content Section */}

      {/* Testimonials */}
      <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
        {/* Include your Testimonials component here */}
      </aside>
      {/* End of Testimonials */}

      {/* Clients */}
      <section id="clients" className="scrollto clearfix">
        {/* Include your Clients component here */}
      </section>
      {/* End of Clients */}

      {/* Pricing Tables */}
      <section id="pricing" className="secondary-color text-center scrollto clearfix ">
        {/* Include your Pricing Tables component here */}
      </section>
      {/* End of Pricing Tables */}
    </main>
  );
};

export default MainContent;

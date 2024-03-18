import React from 'react';

const Header = () => {
  return (
    <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">
      <div id="header" className="nav-collapse">
        <div className="row clearfix">
          <div className="col-1">

            {/* Logo */}
            <div id="logo">
              <img src="/src/images/logo.png" id="banner-logo" alt="Landing Page"/>
              <img src="/src/images/logo-2.png" id="navigation-logo" alt="Landing Page"/>
            </div>
            {/* End of Logo */}

            <aside>
              {/* Social Icons in Header */}
              <ul className="social-icons">
                <li>
                  <a target="_blank" title="Facebook" href="https://www.facebook.com/username">
                    <i className="fa fa-facebook fa-1x"></i><span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="Twitter" href="http://www.twitter.com/username">
                    <i className="fa fa-twitter fa-1x"></i><span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" title="Instagram" href="http://www.instagram.com/username">
                    <i className="fa fa-instagram fa-1x"></i><span>Instagram</span>
                  </a>
                </li>
              </ul>
              {/* End of Social Icons in Header */}
            </aside>

            {/* Main Navigation */}
            <nav id="nav-main">
              <ul>
                <li><a href="#banner">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </nav>
            {/* End of Main Navigation */}

            <div id="nav-trigger"><span></span></div>
            <nav id="nav-mobile"></nav>
          </div>
        </div>
      </div>
      
      {/* Banner Content */}
      <div id="banner-content" className="row clearfix">
        <div className="col-38">
          <div className="section-heading">
            <h1>Flasksand</h1>
            <h2>
              Namari is a free landing page template you can use for your
              projects. It is free to use for your personal and commercial
              projects, enjoy!
            </h2>
          </div>

          {/* Call to Action */}
          <a href="#" className="button">START CREATING TODAY</a>
          {/* End Call to Action */}
        </div>
      </div>
      {/* End of Row */}
    </header>
  );
};

export default Header;

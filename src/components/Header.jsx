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
                  <a target="_blank" title="Facebook" href="https://www.facebook.com/pages/Flakasand">
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
                <li><a href="#banner">Hem</a></li>
                <li><a href="#about">Om Oss</a></li>
                <li><a href="#gallery">Galleria</a></li>
                <li><a href="#services">Nyheter</a></li>
                <li><a href="#testimonials">Title</a></li>
                <li><a href="#sponsorer">Sponsorer</a></li>
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
            <h1>Flakasand</h1>
            <h2>
              Rock & Blues Festival
            </h2>
          </div>
        </div>
      </div>
      {/* End of Row */}
    </header>
  );
};

export default Header;

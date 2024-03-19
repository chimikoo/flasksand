import React from "react";

const Footer = () => {
  return (
    <footer id="landing-footer" className="clearfix">
      <div className="row clearfix">
        <p id="copyright" className="col-2">
          Made with love by{" "}
          <a href="https://github.com/chimikoo">Per-Emil Johansson</a>
        </p>
        <ul className="col-2 social-icons">
          <li>
            <a
              target="_blank"
              title="Facebook"
              href="https://www.facebook.com/username"
            >
              <i className="fa fa-facebook fa-1x"></i>
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              title="Twitter"
              href="http://www.twitter.com/username"
            >
              <i className="fa fa-twitter fa-1x"></i>
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              title="Instagram"
              href="http://www.instagram.com/username"
            >
              <i className="fa fa-instagram fa-1x"></i>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

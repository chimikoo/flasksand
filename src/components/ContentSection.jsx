import React from "react";

const ContentSection = () => {
  return (
    <div id="services" className="scrollto clearfix">
      <div className="row no-padding-bottom clearfix">
        {/* Fill in your content here */}
        {/* <!--Content Left Side--> */}
        <div class="col-3">
        </div>
        {/* <!--End Content Left Side--> */}

        {/* <!--Content of the Right Side--> */}
        <div class="col-3">
          <div class="section-heading">
            <h3>Vet inte vad vi ska ha här</h3>
            <h2 class="section-title">2023 Flakasand!</h2>
            <p class="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam!
            </p>
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet!
          </p>
          {/* <!-- Just replace the Video ID "UYJ5IjBRlW8" with the ID of your video on YouTube (Found within the URL) --> */}
          <a
            href="#"
            data-videoid="UYJ5IjBRlW8"
            data-videosite="youtube"
            class="button video link-lightbox"
          >
            KOLLA HÄR <i class="fa fa-play" aria-hidden="true"></i>
          </a>
        </div>
        {/* <!--End Content Right Side--> */}

        <div class="col-3">
          <img src="/images/dancer.jpg" alt="Dancer" />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;

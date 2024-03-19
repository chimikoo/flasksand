import React from "react";

const Testimonials = () => {
  return (
    <aside
      id="testimonials"
      className="scrollto text-center"
      data-enllax-ratio=".2"
    >
      <div className="row clearfix">
        {/* Fill in your testimonials here */}
        <div class="section-heading">
          <h3>Vet inte vad jag ska ha här</h3>
          <h2 class="section-title">Title</h2>
        </div>

        {/* <!--User Testimonial--> */}
        <blockquote class="col-3 testimonial classic">
          <img src="/src/images/user-images/user-1.jpg" alt="User" />
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </q>
          <footer>????</footer>
        </blockquote>
        {/* <!-- End of Testimonial--> */}

        {/* <!--User Testimonial--> */}
        <blockquote class="col-3 testimonial classic">
          <img src="/src/images/user-images/user-2.jpg" alt="User" />
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </q>
          <footer>Hmmmm??</footer>
        </blockquote>
        {/* <!-- End of Testimonial--> */}

        {/* <!--User Testimonial--> */}
        <blockquote class="col-3 testimonial classic">
          <img src="/src/images/user-images/user-3.jpg" alt="User" />
          <q>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </q>
          <footer>But why?!</footer>
        </blockquote>
        {/* <!-- End of Testimonial--> */}
      </div>
    </aside>
  );
};

export default Testimonials;

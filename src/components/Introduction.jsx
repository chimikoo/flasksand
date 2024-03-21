import React from "react";

const Introduction = () => {
  return (
    <section id="about" className="introduction scrollto">
      <div className="row clearfix">
        <div className="col-3">
          <div className="section-heading">
            <h3>Festival!</h3>
            <h2 className="section-title">Villka är vi?</h2>
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam!
            </p>
          </div>
        </div>

        <div className="col-2-3">
          {/* <!--Icon Block--> */}
          <div
            class="col-2 icon-block icon-top wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {/* <!--Icon--> */}
            <div class="icon">
              <i class="fa fa-html5 fa-2x"></i>
            </div>
            {/* <!--Icon Block Description--> */}
            <div class="icon-block-description">
              <h4>Mat &amp; Dryck </h4>
              <p>
                Setra Bar & Bistro på festivalens område. Du kan betala med
                kontanter. Du kan även betala med Swish i Setra Bar & Bistro.
              </p>
            </div>
          </div>
          {/* <!--End of Icon Block--> */}

          {/* <!--Icon Block--> */}
          <div
            class="col-2 icon-block icon-top wow fadeInUp"
            data-wow-delay="0.3s"
          >
            {/* <!--Icon--> */}
            <div class="icon">
              <i class="fa fa-bolt fa-2x"></i>
            </div>
            {/* <!--Icon Block Description--> */}
            <div class="icon-block-description">
              <h4>Musik</h4>
              <p>
                Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli
                honestatis repudiandae, sit detracto mediocrem disputationi
              </p>
            </div>
          </div>
          {/* <!--End of Icon Block--> */}

          {/* <!--Icon Block--> */}
          <div
            class="col-2 icon-block icon-top wow fadeInUp"
            data-wow-delay="0.5s"
          >
            {/* <!--Icon--> */}
            <div class="icon">
              <i class="fa fa-tablet fa-2x"></i>
            </div>
            {/* <!--Icon Block Description--> */}
            <div class="icon-block-description">
              <h4>On-Stage</h4>
              <p>
                Just nu så kommer väldigt tuffa blue's artister till vårat lilla
                angagemang.
              </p>
            </div>
          </div>
          {/* <!--End of Icon Block--> */}

          {/* <!--Icon Block--> */}
          <div
            class="col-2 icon-block icon-top wow fadeInUp"
            data-wow-delay="0.5s"
          >
            {/* <!--Icon--> */}
            <div class="icon">
              <i class="fa fa-rocket fa-2x"></i>
            </div>
            {/* <!--Icon Block Description--> */}
            <div class="icon-block-description">
              <h4>Grill!</h4>
              <p>
                Id porro tritani recusabo usu, eum intellegam consequuntur et.
                Fugit debet ea sit, an pro nemore vivendum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;

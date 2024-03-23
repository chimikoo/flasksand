import React from "react";

const Clients = () => {
  return (
    <section id="clients" className="scrollto clearfix">
      <div className="row clearfix">
        {/* Fill in your clients here */}
        <div class="col-3">
          <div class="section-heading">
            <h3>Samarbeten</h3>
            <h2 class="section-title">Sponsorer</h2>
            <p class="section-subtitle">
              Här är hjältar som hjälper till att göra det vi gör till värklighet!
            </p>
          </div>
        </div>

        <div class="col-2-3">
          <a href="#" class="col-3">
            <img
            src="/images/company-images/company-logo1.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Tree</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo2.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Fingerprint</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo3.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>The Man</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo4.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Mustache</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo5.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Goat</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo6.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Justice</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo7.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Ball</span>
            </div>
          </a>
          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo8.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Cold</span>
            </div>
          </a>

          <a href="#" class="col-3">
            <img
              src="/images/company-images/company-logo9.png"
              alt="Company"
            />
            <div class="client-overlay">
              <span>Cold</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;

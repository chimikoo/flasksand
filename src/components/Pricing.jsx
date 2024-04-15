// PricingTables Component
import React from "react";

const PricingTables = () => {
  return (
    <section
      id="pricing"
      className="secondary-color text-center scrollto clearfix"
    >
      <div className="row clearfix">
        <div className="section-heading">
          <h3>Ditt val!</h3>
          <h2 className="section-title">BILJETTER!</h2>
        </div>

        {/* Pricing Block 1 */}
        <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="pricing-block-content">
            <h3>Förköp</h3>
            <p className="pricing-sub">Visa kvitto på plats!</p>
            <div className="pricing">
              <div className="price">
                200<span>kr</span>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <ul>
              <li>Info #1</li>
              <li>Info #2</li>
              <li>Info #3</li>
              <li>Info #4</li>
              <li>Info #5</li>
            </ul>
            <a href="#" className="button">
              KÖP NU
            </a>
          </div>
        </div>
        {/* End of Pricing Block 1 */}

        {/* Pricing Block 2 */}
        <div
          className="pricing-block featured col-3 wow fadeInUp"
          data-wow-delay="0.6s"
        >
          <div className="pricing-block-content">
            <h3>Förköp med buss</h3>
            <p className="pricing-sub">Bus från din stad!</p>
            <div className="pricing">
              <div className="price">
                <span>kr</span>500
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <ul>
              <li>Info #1</li>
              <li>Info #2</li>
              <li>Info #3</li>
              <li>Info #4</li>
              <li>Info #5</li>
            </ul>
            <a href="#" className="button">
              KÖP NU
            </a>
          </div>
        </div>
        {/* End of Pricing Block 2 */}

        {/* Pricing Block 3 */}
        <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
          <div className="pricing-block-content">
            <h3>Betala på Plats</h3>
            <p className="pricing-sub">Cash only!</p>
            <div className="pricing">
              <div className="price">
                <span>kr</span>300
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <ul>
              <li>Info #1</li>
              <li>Info #2</li>
              <li>Info #3</li>
              <li>Info #4</li>
              <li>Info #5</li>
            </ul>
{/* {            <a href="#" className="button" disabled={true}>
              KÖP NU
            </a>} */}
          </div>
        </div>
        {/* End of Pricing Block 3 */}
      </div>
    </section>
  );
};

export default PricingTables;

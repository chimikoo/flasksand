// PricingTables Component
import React from 'react';

const PricingTables = () => {
    return (
        <section id="pricing" className="secondary-color text-center scrollto clearfix">
            <div className="row clearfix">
                <div className="section-heading">
                    <h3>Ditt val!</h3>
                    <h2 className="section-title">BILJETTER!</h2>
                </div>

                {/* Pricing Block 1 */}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pricing-block-content">
                        <h3>Förköp</h3>
                        <p className="pricing-sub">The standard version</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>19</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>5 Downloads</li>
                            <li>2 Extensions</li>
                            <li>Tutorials</li>
                            <li>Forum Support</li>
                            <li>1 year free updates</li>
                        </ul>
                        <a href="#" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/* End of Pricing Block 1 */}

                {/* Pricing Block 2 */}
                <div className="pricing-block featured col-3 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="pricing-block-content">
                        <h3>Förköp med buss</h3>
                        <p className="pricing-sub">Most popular choice</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>29</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>15 Downloads</li>
                            <li>5 Extensions</li>
                            <li>Tutorials with Files</li>
                            <li>Forum Support</li>
                            <li>2 years free updates</li>
                        </ul>
                        <a href="#" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/* End of Pricing Block 2 */}

                {/* Pricing Block 3 */}
                <div className="pricing-block col-3 wow fadeInUp" data-wow-delay="0.8s">
                    <div className="pricing-block-content">
                        <h3>Business</h3>
                        <p className="pricing-sub">For the whole team</p>
                        <div className="pricing">
                            <div className="price"><span>$</span>49</div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                        <ul>
                            <li>Unlimited Downloads</li>
                            <li>Unlimited Extensions</li>
                            <li>HD Video Tutorials</li>
                            <li>Chat Support</li>
                            <li>Lifetime free updates</li>
                        </ul>
                        <a href="#" className="button">BUY TODAY</a>
                    </div>
                </div>
                {/* End of Pricing Block 3 */}
            </div>
        </section>
    );
};

export default PricingTables;

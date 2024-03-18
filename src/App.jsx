import React from "react";
import Clients from "./components/Clients.jsx";
import ContentSection from "./components/ContentSection.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Header from "./components/Header.jsx";
import Introduction from "./components/Introduction.jsx";
import MainContent from "./components/MainContent.jsx";
import PageBorder from "./components/PageBorder.jsx";
import Preloader from "./components/Preloader.jsx";
import PricingTables from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonial.jsx";

import './css/animate.css';
import './css/flasksand-color.css';
import './css/font-awesome.css';

const App = () => {
  return (
    <div>
      <Preloader />
      <PageBorder />
      <Header />
      <MainContent>
        <Introduction />
        <Gallery />
        <ContentSection />
        <Testimonials />
        <Clients />
        <PricingTables />
      </MainContent>
      <Footer />
    </div>
  );
};

export default App;

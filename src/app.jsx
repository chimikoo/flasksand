import React from "react";

import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import PageBorder from "./components/PageBorder.jsx";
import Preloader from "./components/Preloader.jsx";
import "./js/site.js"

import "./css/animate.css";
import "./css/flasksand-color.css";
import "./css/font-awesome.css";

const App = () => {
  return (
    <>
      <Preloader />
      <PageBorder />
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;

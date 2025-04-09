import React from "react";
import About from "./About";
import Skills from "./Skills";
import Works from "./Works";
import "../css/PortfolioContainer.css";

const PortfolioContainer: React.FC = () => {
  return (
    <div className="portfolio-container">
      <main>
        <About />
        <Skills />
        <Works />
      </main>
    </div>
  );
};

export default PortfolioContainer;
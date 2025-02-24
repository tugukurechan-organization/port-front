// Home.tsx
import React from "react";
import Header from "./Header"; // Header コンポーネントをインポート
import Footer from "./Footer";
import PortfolioContainer from "./PortfolioContainer";

interface HomeProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setCurrentSection }) => {
  return (
    <section id="home">
      <Header setCurrentSection={setCurrentSection} /> {/* setCurrentSection を渡す */}
      <PortfolioContainer />
      <Footer />
    </section>
  );
};

export default Home;

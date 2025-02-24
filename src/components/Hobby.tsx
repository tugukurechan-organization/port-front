// Hobby.tsx
import React from "react";
import Header from "./Header"; // Header コンポーネントをインポート
import Footer from "./Footer";

interface HobbyProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Hobby: React.FC<HobbyProps> = ({ setCurrentSection }) => {
  return (
    <section id="hobby">
      <Header setCurrentSection={setCurrentSection} /> {/* setCurrentSection を渡す */}
      {/* ここに趣味に関する内容を追加 */}
      <Footer />
    </section>
  );
};

export default Hobby;

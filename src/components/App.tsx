import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../css/App.css"; // アニメーション用のCSS
import Header from "./Header";
import Home from "./Home";
import Hobby from "./Hobby";
import ModelViewer from "./ModelViewer";
import Contact from "./Contact";

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState("home");

  return (
    <div className="app-container">
      {/* HeaderとModelViewerは固定 */}
      <Header setCurrentSection={setCurrentSection} />
      <ModelViewer />

      <main className="content-container">
        {/* セクションの内容だけが切り替わる */}
        <TransitionGroup component={null}>
          <CSSTransition key={currentSection} timeout={500} classNames="fade">
            <div className="section">
              {currentSection === "home" && <Home setCurrentSection={setCurrentSection} />}
              {currentSection === "hobby" && <Hobby setCurrentSection={setCurrentSection} />}
              {currentSection === "contact" && <Contact setCurrentSection={setCurrentSection} />}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

export default App;

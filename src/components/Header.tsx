import React, { useState, useEffect } from "react";
import "../css/Header.css";

interface HeaderProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 初期化時に現在のテーマを反映
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const handleMenuClick = (section: string, event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentSection(section);
    setIsOpen(false);
  };

  return (
    <header className="header">
      {/* テーマ切り替えボタン */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDarkMode ? "🌙" : "☀️"}
      </button>

      {/* ハンバーガーメニュー */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </button>

      {/* ドロップダウンメニュー */}
      <nav className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <ul>
          <li><a href="#home" onClick={(e) => handleMenuClick("home", e)}>Home</a></li>
          <li><a href="#hobby" onClick={(e) => handleMenuClick("hobby", e)}>Hobby</a></li>
          <li><a href="#contact" onClick={(e) => handleMenuClick("contact", e)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

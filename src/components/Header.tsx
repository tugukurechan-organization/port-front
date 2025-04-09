import React, { useState } from "react";
import "../css/Header.css";

interface HeaderProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (section: string, event: React.MouseEvent) => {
    event.preventDefault(); // デフォルトのリンク動作（ページスクロール）を無効にする
    setCurrentSection(section);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <header className="header">
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

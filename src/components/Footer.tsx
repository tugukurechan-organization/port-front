import React from "react";

const Footer: React.FC = () => {
  return (
      <div>
        <a href="https://x.com/tsuguexe" target="_blank" rel="noopener noreferrer">
          <img src="./assets/x.jpg" alt="Twitter" width="32" height="32" />
        </a>
        <a href="https://github.com/tugukurechan" target="_blank" rel="noopener noreferrer">
          <img src="./assets/github.png" alt="GitHub" width="32" height="32"/>
        </a>
        <p>&copy; 2025 chutake.inc</p>
      </div>
  );
};

export default Footer;
import React, { useEffect, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
  icon: string;
}

let idCounter = 0;

const MouseTrail: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail: Trail = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        icon: isDarkMode ? "★" : "🐾",
      };

      setTrails((prev) => [...prev, newTrail]);

      // 1秒後に削除
      setTimeout(() => {
        setTrails((prev) => prev.filter((trail) => trail.id !== newTrail.id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDarkMode]);

  return (
    <div className="mouse-trail-container">
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="trail-icon"
          style={{
            left: trail.x,
            top: trail.y,
          }}
        >
          {trail.icon}
        </span>
      ))}
    </div>
  );
};

export default MouseTrail;

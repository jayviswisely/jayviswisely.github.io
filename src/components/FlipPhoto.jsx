import { useState, useEffect } from "react";
import { WORK_PHOTO_URL, PERSONAL_PHOTO_URL } from "../data/content";

export default function FlipPhoto({ isPersonal, onFlip }) {
  const [flipping, setFlipping] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);

  useEffect(() => {
    if (isPersonal === showPersonal) return;
    setFlipping(true);
    const t = setTimeout(() => {
      setShowPersonal(isPersonal);
      setFlipping(false);
    }, 220);
    return () => clearTimeout(t);
  }, [isPersonal]);

  return (
    <div
      onClick={onFlip}
      title={isPersonal ? "Back to work mode" : "Click to see the other me ✨"}
      style={{
        position: "relative",
        width: 120,
        height: 120,
        borderRadius: "50%",
        cursor: "pointer",
        flexShrink: 0,
        transform: flipping ? "scale(0.88) rotateY(90deg)" : "scale(1) rotateY(0deg)",
        transition: "transform 0.22s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s",
        boxShadow: isPersonal
          ? "0 0 0 3px #dbeafe, 0 0 0 5px #60a5fa"
          : "0 0 0 3px #e8e6e1",
      }}
    >
      <img
        src={showPersonal ? PERSONAL_PHOTO_URL : WORK_PHOTO_URL}
        alt={showPersonal ? "Personal photo" : "Work photo"}
        style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
      />

      {/* Mode badge */}
      <div
        style={{
          position: "absolute",
          bottom: 2,
          right: 2,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: isPersonal ? "#1d4ed8" : "#1a1a18",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          border: "2px solid #fafaf8",
          transition: "background 0.3s",
          userSelect: "none",
        }}
      >
        {isPersonal ? "💼" : "✨"}
      </div>
    </div>
  );
}

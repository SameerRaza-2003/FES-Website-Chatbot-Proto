import React, { useState, useEffect } from "react";
import "../assets/animated-logo.css";
import diamond1 from "../assets/logo/Fes Logo for Animation RGB 01.png";
import diamond2 from "../assets/logo/Fes Logo for Animation RGB 02.png";
import diamond3 from "../assets/logo/Fes Logo for Animation RGB 03.png";
import diamond4 from "../assets/logo/Fes Logo for Animation RGB 04.png";
import fesLogo from "../assets/logo/FES.png";

export default function AnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [fesLogoAnimating, setFesLogoAnimating] = useState(false);

  useEffect(() => {
    // Trigger diamond animations on component mount
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 100);

    // Trigger FES logo animation after diamonds complete
    const fesTimer = setTimeout(() => {
      setFesLogoAnimating(true);
    }, 1600);

    return () => {
      clearTimeout(timer);
      clearTimeout(fesTimer);
    };
  }, []);

  return (
    <div className="logo-container w-50">
      {/* Diamond 1 - Top Left */}
      <div className={`diamond diamond-1 ${isAnimating ? "animate" : ""}`}>
        <img src={diamond1} alt="Diamond 1" />
      </div>

      {/* Diamond 2 - Top Right */}
      <div className={`diamond diamond-2 ${isAnimating ? "animate" : ""}`}>
        <img src={diamond2} alt="Diamond 2" />
      </div>

      {/* Diamond 3 - Bottom Left */}
      <div className={`diamond diamond-3 ${isAnimating ? "animate" : ""}`}>
        <img src={diamond3} alt="Diamond 3" />
      </div>

      {/* Diamond 4 - Bottom Right */}
      <div className={`diamond diamond-4 ${isAnimating ? "animate" : ""}`}>
        <img src={diamond4} alt="Diamond 4" />
      </div>
      <img
        src={fesLogo}
        alt="FES"
        className={`fes-logo fes-logo-absolute ${
          fesLogoAnimating ? "animate" : ""
        }`}
      />
    </div>
  );
}

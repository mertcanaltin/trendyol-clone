import { useState } from "react";

import "./style.scss";

const ScrollToTop = () => {
  const [isVisible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 750 ? true : false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  document.addEventListener("scroll", toggleVisible);

  return (
    <div
      className="scroll-to-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <i className="icon-scroll-to-up"></i>
      <span>Yukarı Çık</span>
    </div>
  );
};

export default ScrollToTop;

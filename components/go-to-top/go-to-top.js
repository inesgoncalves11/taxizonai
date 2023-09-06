import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

import styles from "./go-to-top.module.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.top__btm}>
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className={`${styles.icon__position} ${styles.icon__style}`}
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;

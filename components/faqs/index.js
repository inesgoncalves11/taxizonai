import React, { useState, useEffect, useRef } from "react";
import Cross from "./cross.svg";
import Image from "next/image";
const Faq = (props) => {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    console.log(contentRef.current);
    contentRef.current.style.maxHeight = show
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [show, contentRef]);

  const toggleAccordion = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="faq-skills">
        <button
          className={"question-section " + show}
          onClick={toggleAccordion}
        >
          <div className="question-align">
            <h4>{props.data.question}</h4>
            <div>
              <Image
                src={Cross}
                alt="cross icon"
                width="22px"
                height="21px"
                className={show ? `question-icon` : `question-icon rotate`}
              />
            </div>
          </div>
          <div ref={contentRef} className="answer">
            <p>{props.data.answer}</p>
          </div>
        </button>
      </div>
    </>
  );
};

export default Faq;

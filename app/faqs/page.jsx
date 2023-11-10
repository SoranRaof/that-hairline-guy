"use client";
import FaqAccordion from "../Components/FaqAccordion";
import faqsArr from "@/utils/FaqsArr";
import { useRef, useState } from "react";

const page = () => {
  const [activeFaq, setActiveFaq] = useState("0");
  const handleSelectFaqs = (faq) => {
    if (activeFaq !== faq) {
      setActiveFaq(faq);
    } else {
      setActiveFaq("0");
    }
  };
  // const sliderRef = useRef(null);

  // const settings = {
  //   className: "center",
  //   centerMode: false,
  //   infinite: false,
  //   centerPadding: "0px",
  //   slidesToShow: 1,
  //   speed: 500,
  //   rows: 1,
  //   slidesPerRow: 4,
  // };

  // const handlePrevClick = () => {
  //   sliderRef.current.slickPrev();
  // };

  // const handleNextClick = () => {
  //   sliderRef.current.slickNext();
  // };

  return (
    <div className="w-full my-10 lg:px-32">
      <h1 className="text-5xl underline p-4 text-sage">FAQs</h1>
      <div className="grid grid-cols-3 items-center justify-center">
        <div className="col-span-2 flex items-center justify-center"></div>
        <div className="col-span-1 max-h-[500px] w-full overflow-auto">
          {faqsArr.map((faq, index) => (
            <div onClick={() => handleSelectFaqs(index)}>
              <FaqAccordion
                key={`faq${index}`}
                active={activeFaq}
                index={index}
                question={faq.question}
                answer={faq.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

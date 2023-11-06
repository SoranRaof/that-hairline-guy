"use client";
import FaqAccordion from "../Components/FaqAccordion";
import faqsArr from "@/utils/FaqsArr";
import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  const [activeFaq, setActiveFaq] = useState("0");
  const handleSelectFaqs = (faq) => {
    if (activeFaq !== faq) {
      setActiveFaq(faq);
    } else {
      setActiveFaq("0");
    }
  };
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 4,
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="my-20 md:mx-10 lg:mx-32 w-screen">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl underline p-4 text-sage">FAQs</h1>
      </div>
      <div className="">
        <Slider {...settings} ref={sliderRef}>
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
        </Slider>
        <div className="flex justify-center mt-2">
          <button
            className="bg-sage hover:bg-[#515853c8] text-white font-bold py-2 px-4 rounded-l-lg"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="bg-sage hover:bg-[#515853c8] text-white font-bold py-2 px-4 rounded-r-lg"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

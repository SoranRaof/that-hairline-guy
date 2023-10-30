"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = ({ question, answer, index }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const handleClick = (index) => {
    if (activeQuestion === index) {
      // If the clicked accordion is already open, close it
      setActiveQuestion(null);
    } else {
      // If a different accordion is clicked, open it and close the previously open one
      setActiveQuestion(index);
    }
  };

  return (
    <div className="w-screen flex justify-center items-center mb-4">
      <div className="w-1/2 max-w-xl shadow-md rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">{question}</h2>
          <button
            className="focus:outline-none"
            onClick={() => handleClick(index)}
          >
            {activeQuestion === index ? (
              <BsChevronUp className="text-3xl" />
            ) : (
              <BsChevronDown className="text-3xl" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {activeQuestion === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-lg">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;

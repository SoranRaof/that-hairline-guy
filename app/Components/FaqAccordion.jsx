"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FaqAccordion = ({ question, answer, active, index }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  useEffect(() => {
    console.log("useeffect");
    if (active === index) {
      setActiveQuestion(question);
    } else {
      setActiveQuestion(null);
    }
  }, [active]);

  return (
    <div className="w-full flex items-center justify-center mb-4">
      <div className="w-full max-w-xl shadow-md rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">{question}</h2>
          <button className="focus:outline-none">
            {activeQuestion === question ? (
              <BsChevronUp className="text-3xl" />
            ) : (
              <BsChevronDown className="text-3xl" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {activeQuestion === question && (
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

export default FaqAccordion;

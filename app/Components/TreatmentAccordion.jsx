"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const TreatmentAccordion = ({ description, process, prices, index }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (description, process, prices) => {
    if (activeAccordion === description || process || prices) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(description || process || prices);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mb-4">
      <div className="w-1/2 max-w-xl shadow-md rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">Description</h2>
          <button
            className="focus:outline-none"
            onClick={() => handleClick(description)}
          >
            {activeAccordion === description ? (
              <BsChevronUp className="text-3xl" />
            ) : (
              <BsChevronDown className="text-3xl" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {activeAccordion === description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-lg">{description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-1/2 max-w-xl shadow-md rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">Process</h2>
          <button
            className="focus:outline-none"
            onClick={() => handleClick(process)}
          >
            {activeAccordion === process ? (
              <BsChevronUp className="text-3xl" />
            ) : (
              <BsChevronDown className="text-3xl" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {activeAccordion === process && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-lg">{process}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="w-1/2 max-w-xl shadow-md rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">Prices</h2>
          <button
            className="focus:outline-none"
            onClick={() => handleClick(prices)}
          >
            {activeAccordion === prices ? (
              <BsChevronUp className="text-3xl" />
            ) : (
              <BsChevronDown className="text-3xl" />
            )}
          </button>
        </div>
        <AnimatePresence>
          {activeAccordion === prices && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-lg">{prices}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TreatmentAccordion;

"use client";
import { useState } from "react";
import TreatmentAccordion from "../Components/TreatmentAccordion";
import treatmentArr from "@/utils/TreatmentArr";

const TreatmentNav = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(treatmentArr[0]);

  const handleClick = (treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div className="">
      <div className="h-auto w-full flex items-center justify-center outline px-10">
        {treatmentArr.map((treatment, index) => (
          <button key={index} onClick={() => handleClick(treatment)}>
            <p className="font-bold">{treatment.treatment}</p>
          </button>
        ))}
      </div>
      <div>
        {selectedTreatment && (
          <TreatmentAccordion
            description={selectedTreatment.description}
            process={selectedTreatment.process}
            prices={selectedTreatment.prices}
          />
        )}
      </div>
    </div>
  );
};

export default TreatmentNav;

import FaqAccordion from "../Components/FaqAccordion";
import faqsArr from "@/utils/FaqsArr";

const page = () => {
  return (
    <div>
      {faqsArr.map((faq, index) => (
        <FaqAccordion
          key={`faq${index}`}
          question={faq.question}
          answer={faq.answer}
          index={index}
        />
      ))}
    </div>
  );
};

export default page;

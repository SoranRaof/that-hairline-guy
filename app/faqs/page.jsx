import Accordion from "../Components/Accordion";
import faqsArr from "@/utils/FaqsArr";

const page = () => {
  return (
    <div>
      {faqsArr.map((faq, index) => (
        <Accordion
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

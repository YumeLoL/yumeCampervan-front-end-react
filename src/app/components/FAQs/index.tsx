import React, { useState } from "react";
import Title from "../../ui/atoms/Title";
import ResponsiveContainer from "../../ui/organisms/ResponsiveContainer";

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    { question: "Question 1", answer: "Answer 1", isOpen: true },
    { question: "Question 2", answer: "Answer 2", isOpen: false },
    { question: "Question 3", answer: "Answer 3", isOpen: false },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) => {
      const updatedFaqs = prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      });
      return updatedFaqs;
    });
  };

  return (
    <ResponsiveContainer>
      <div className="w-full flex justify-evenly">
        <Title title={"FAQs"} size={"large"} />
        <div className="w-[960px]">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-md mb-4">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    faq.isOpen ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {faq.isOpen && (
                <div className="p-4 bg-gray-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default FAQs;

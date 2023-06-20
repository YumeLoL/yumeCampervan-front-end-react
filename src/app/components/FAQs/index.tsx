import React, { useEffect, useState } from "react";

import { sanityClient } from "../../..";
import Title from "../../ui/atoms/Title";
import ResponsiveContainer from "../../ui/organisms/ResponsiveContainer";

interface IFaq {
  [x: string]: any;
  question: string;
  answer: any[] | any;
}

const FAQs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [faqs, setFaqs] = useState<IFaq[]>();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "faqs"]`)
      .then((data) => {
        if (data) setFaqs(data);
      })
      .catch(console.error);
  }, []);

  if (!faqs) return <div>Loading...</div>;

  // const faqA = faqs.map(answers => {
  //     console.log(answers)
  // })

  const test = faqs.map((answers) =>
    console.log(answers.answer.map((ans: any) => console.log(ans)))
  );
  console.log("faqs:", faqs);

  return (
    <ResponsiveContainer>
      <div className="w-full flex justify-evenly">
        <Title title={"FAQs"} size={"large"} />
        <div className="w-[960px]">
          {faqs.map((faq, _id) => (
            <div key={_id} className="border border-gray-300 rounded-md mb-4">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggle()}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
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
              {isOpen && (
                <div className="p-4 bg-gray-100">
                  <p>
                    {faq.answer.map((answer: any, index: any) => {
                      // return <p key={index}>{answer}</p>
                    })}
                  </p>
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

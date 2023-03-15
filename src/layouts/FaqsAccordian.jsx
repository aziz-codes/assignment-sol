import * as React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import help from "../assets/help.png";
const FaqsAccordian = () => {
  const { useState } = React;
  const [faqs, setFaqs] = useState([
    {
      question: "How to generate my assignment?",
      title: "You can  generate your assignment by : ",
      answer: [
        "Select your desired course",
        "Selecting your required template",
        "Entering your required query",
        "Clicking on generate assignment to generate assignment",
      ],
      expended: false,
    },
    {
      question: "What should be the structure of my query?",
      title: "Structure of my Query",
      answer: [
        "Your query should contains only charecters",
        "Crystal clear sentence",
      ],
      expended: false,
    },
    {
      question: "Can we select multiple templates at one time?",
      title: "Selecting Multiple templates ",
      answer: ["No, You cannot select multiple temlates at one time"],
      expended: false,
    },
  ]);

  const handleExpend = (index) => {
    const newData = [...faqs];
    let isExpended = newData[index].expended;
    newData[index].expended = !isExpended;
    setFaqs(newData);
  };
  return (
    <section className="flex flex-col justify-center items-center my-6">
      <img src={help} alt="faqs" className="h-24 w-24 object-cover" />
      <h3 className="font-[600] text-2xl">Frequently Asked Questions</h3>
      <label className="text-gray-400">
        Our frequently asked questions here
      </label>
      <div className="flex flex-col gap-4 my-6 shadow-md border p-6 w-[800px] max-w-4xl">
        {faqs.map((item, i) => (
          <div className="flex flex-col px-2 w-full" key={i}>
            <div
              className={`flex gap-1 items-center border rounded-3xl ${
                item.expended ? "bg-[#0b8d9f]" : "bg-white"
              }`}
            >
              {item.expended ? (
                <div
                  className={`relative h-9 w-9 -left-1 border shadow-xl text-white rounded-full bg-[#0b8d9f] flex justify-center items-center`}
                >
                  <ChevronRightIcon
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => {
                      handleExpend(i);
                    }}
                  />
                </div>
              ) : (
                <div className="relative -left-1 border shadow-md text-black h-9 w-9 rounded-full bg-white flex justify-center items-center">
                  <ChevronDownIcon
                    className="h-5 w-5 cursor-pointer"
                    onClick={() => {
                      handleExpend(i);
                    }}
                  />
                </div>
              )}
              <div className="font-bold tracking-wider">{item.question}</div>
            </div>
            {item.expended && (
              <div className="relative left-8 my-2 flex flex-col gap-6 mt-8">
                <div className="border-l border-dotted border-l-gray-500 px-2 text-gray-400 my-1">
                  {item.title}
                </div>
                <div className="flex flex-col gap-1 text-gray-400">
                  {item.answer.map((ans, index) => (
                    <label key={index} className="text-sm">
                      {ans}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsAccordian;

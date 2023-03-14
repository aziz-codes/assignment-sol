import * as React from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
const FaqsAccordian = () => {
  const { useState } = React;
  const [faqs, setFaqs] = useState([
    {
      question: "How can I Share this Post",
      answer: "You need to enable js mode for this",
      expended: false,
    },
    {
      question: "What are the new updates",
      answer: "We will launch new upadtes on 12 of Oct",
      expended: false,
    },
  ]);

  const handleExpend = (index) => {
    const newData = [...faqs];
    let check = newData[index].expended;
    newData[index].expended = !check;
    setFaqs(newData);
  };
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((item, i) => (
        <div className="flex flex-col w-full px-2" key={i}>
          <div className="flex gap-1 items-center">
            {item.expended ? (
              <ChevronRightIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => {
                  handleExpend(i);
                }}
              />
            ) : (
              <ChevronDownIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => {
                  handleExpend(i);
                }}
              />
            )}
            <div>{item.question}</div>
          </div>
          {item.expended && <div>{item.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqsAccordian;

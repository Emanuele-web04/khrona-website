"use client";

import { faqs } from "@/lib/faq";
import { useState } from "react";
import { CiCircleChevRight, CiCircleChevDown } from "react-icons/ci";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 bg-neutral-100 ring-1 ring-neutral-200 shadow mb-2 rounded-xl">
      <button
        type="button"
        className="flex w-full justify-between items-center transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <h3 className="font-semibold text-left text-lg">{question}</h3>
        {open ? <CiCircleChevDown className="w-4 h-4" /> : <CiCircleChevRight className="w-4 h-4" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 font-geist tracking-tight text-left text-sm sm:text-base">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQList() {
  return (
    <div className="flex flex-col">
        <h1 className="text-4xl uppercase md:text-5xl lg:text-6xl text-center text-gradient w-full m-auto font-black mb-3 tracking-tight">
          faq
        </h1>
        <p className="md:text-base lg:text-lg text-center font-geist tracking-tight m-auto max-w-xl mb-8  text-gray-600 leading-relaxed">
          Frequently asked questions
        </p>
      {faqs.map((faq, i) => (
        <FAQItem key={i} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

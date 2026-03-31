import React, { useState } from 'react';
import { Plus, Minus } from "@phosphor-icons/react";

const FAQData = [
  {
    id: 1,
    question: "1. What does Johat Enterprises LLC do?",
    answer: "We connect property investors with trusted private money lenders. Our services include consultation, paperwork assistance, and lender matching to help investors secure funding for property purchases, renovations, and flips."
  },
  {
    id: 2,
    question: "2. Who can apply for funding through Johat Enterprises LLC?",
    answer: "Any property investor, from beginners to seasoned professionals, looking for private capital for real estate projects can apply."
  },
  {
    id: 3,
    question: "3. What are private money lenders?",
    answer: "Private money lenders are non-institutional individuals or companies that provide short-term loans secured by real estate."
  },
  {
    id: 4,
    question: "4. How long does it take to get funding?",
    answer: "The timeline varies depending on the project, but many of our clients secure funding much faster than traditional bank loans, often within 7-14 days."
  }
];

const FAQSection = () => {
  const [openId, setOpenId] = useState(1); // Setting 1 as default open like in your image

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white py-10 md:py-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-xl tracking-widest sm:text-[30px] lg:text-[45px] font-black tracking-tighter text-gray-900 uppercase italic mb-4 font-designer">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Here's a professional FAQ section tailored for Johat Enterprises LLC — focused on your 
            property investor and private lending matching services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQData.map((item) => (
            <div 
              key={item.id}
              className={`border border-gray-300 rounded-xl overflow-hidden transition-all duration-300 bg-white ${
                openId === item.id ? 'shadow-lg border-transparent' : 'hover:border-gray-400'
              }`}
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className="font-bold text-gray-800 text-lg">
                  {item.question}
                </span>
                <div className={`p-1 rounded-full transition-colors duration-300 cursor-pointer ${
                  openId === item.id ? 'bg-[#FFD700]' : 'bg-[#FFFBEB]'
                }`}>
                  {openId === item.id ? (
                    <Minus size={24} weight="bold" className="text-white" />
                  ) : (
                    <Plus size={24} weight="bold" className="text-[#FFD700]" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
"use client";
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4 w-full">
    <button
      className="flex justify-between items-center w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-200 rounded-lg"
      onClick={onClick}
    >
      <span className="text-sm sm:text-base font-medium">{question}</span>
      {isOpen ? (
        <ChevronUpIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
      ) : (
        <ChevronDownIcon className="h-5 w-5 text-blue-500 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="mt-2 p-4 bg-white rounded-lg">
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqItems = [
    {
      question: "How can a virtual office benefit my business in India?",
      answer: "A virtual office in India can provide a professional business address, mail handling services, and access to meeting rooms without the cost of a physical office. This can help establish credibility, especially for startups or foreign businesses entering the Indian market."
    },
    {
      question: "How can I cancel my virtual office service if needed?",
      answer: "Cancellation policies vary by provider. Typically, you'll need to give notice as specified in your contract. Contact your virtual office provider directly to understand their specific cancellation process and any potential fees."
    },
    {
      question: "Can I legally register my business using a virtual office address in India?",
      answer: "Yes, in most cases you can legally register your business using a virtual office address in India. However, specific requirements may vary depending on the type of business entity and local regulations. It's advisable to consult with a legal professional to ensure compliance."
    },
    {
      question: "Is it possible to upgrade or downgrade my virtual office plan as my business needs change?",
      answer: "Most virtual office providers offer flexible plans that can be adjusted as your business needs evolve. Contact your provider to discuss options for upgrading or downgrading your plan."
    },
    {
      question: "How will I receive my business mail and packages with a virtual office?",
      answer: "Virtual office providers typically offer mail handling services. They receive your mail and packages, then either forward them to your preferred address, hold them for pickup, or scan and email important documents to you. The specific process can be customized based on your needs."
    },
    {
      question: "Can I access meeting rooms and conference facilities with a virtual office plan?",
      answer: "Many virtual office plans include access to meeting rooms and conference facilities, often at discounted rates. Check with your provider for details on availability and booking procedures."
    },
    {
      question: "Can I use a virtual office address for official correspondence and marketing materials?",
      answer: "Yes, you can use your virtual office address for official correspondence and marketing materials. This provides a professional image for your business without the need for a physical office space."
    },
    {
      question: "Are there any additional fees or hidden costs associated with virtual office services in India?",
      answer: "While reputable providers are transparent about costs, it's important to review your contract carefully. Some services like mail forwarding, extended use of meeting rooms, or call answering might incur additional fees. Always clarify all potential costs upfront."
    },
    {
      question: "Do virtual office services in India include call answering and forwarding?",
      answer: "Many virtual office providers in India offer call answering and forwarding services as part of their packages or as an add-on. This typically includes a dedicated local phone number and professional receptionists who can answer calls in your company's name."
    },
    {
      question: "What kind of documentation do I need to provide to set up a virtual office in India?",
      answer: "Required documentation may include proof of identity, proof of address, business registration documents, and potentially a rental agreement. Specific requirements can vary by provider and location, so check with your chosen virtual office service for their exact requirements."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className='bg-white'>
      <div className="container mx-auto p-4 sm:p-6 text-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-2">Questions in mind?</h2>
        <p className="text-center text-gray-600 mb-8">Read our FAQ</p>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2">
            {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index]}
                onClick={() => toggleItem(index)}
              />
            ))}
          </div>
          <div className="w-full md:w-1/2 px-2">
            {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
              <FAQItem
                key={index + Math.ceil(faqItems.length / 2)}
                question={item.question}
                answer={item.answer}
                isOpen={openItems[index + Math.ceil(faqItems.length / 2)]}
                onClick={() => toggleItem(index + Math.ceil(faqItems.length / 2))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
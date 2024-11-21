import React, { useState } from "react";

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why is [companyName] pausing its operations?",
      answer: "In compliance with applicable commercial gaming regulations, [companyName] will temporarily pause operations from January 1st, 2024. The pause is a result of an industry-wide mandate consistent with the Regulators’ new role to create a well-regulated gaming environment in the United Arab Emirates."
    },
    {
      question: "When will the last [companyName] weekly draws take place prior to the temporary pause?",
      answer: "The last [companyName] weekly draw will be held on December 30th, 2023."
    },
    {
      question: "Can I purchase tickets for draws scheduled after December 30, 2023?",
      answer: "No, [companyName] will be pausing the sale of tickets, and no draws will be held after December 30, 2023 until further notice from the Regulators."
    },
    {
      question: "How will this decision impact existing [companyName] customers?",
      answer: "Whilst pause is in place customers will not be able to purchase tickets however their accounts will remain active allowing for withdrawals as per the usual procedure."
    },
    {
      question: "Can customers claim winnings after the pause date?",
      answer: "Yes, customers may request withdrawal of any outstanding balance in their [companyName] account even after the temporary pause starting December 31st, 2023."
    },
    {
      question: "Will Ewings be introducing alternative services or products after the [companyName] operations are temporarily paused?",
      answer: "Ewings is exploring various options for future endeavours. Updates on any new initiatives will be communicated through our normal channels."
    },
    {
      question: "How can participants contact Ewings for further information or assistance?",
      answer: "Customers can contact our customer support team through the official Ewings website or customer service hotline for any inquiries or assistance related to the pause of [companyName]’s operations."
    },
    {
      question: "Will there be any refunds of the credit balance in the wallet that remain unused after the pause date?",
      answer: "Customers may request withdrawal of any outstanding account (no minimum amount applies) balance even after the pause date of December 31st, 2023."
    },
    {
      question: "Can we expect [companyName] to resume?",
      answer: "We consider this pause as an opportunity to implement further enhancements to our platform, and we look forward to resuming our mission of changing people’s lives in the first quarter of 2024 once successful in our bid."
    },
    {
      question: "Will there be any change in [companyName] online platforms accessibility during the pause period?",
      answer: "Yes. Some of the current features such as CREATE ACCOUNT, MY CART, BUY NOW, ADD CREDIT and PLAY will be temporarily disabled. However, the existing customers will be able to view the stories and past draws and receive updates."
    },
    {
      question: "Can the [companyName] account still be accessed through the kiosks during the pause period?",
      answer: "No, the kiosks will be temporarily disabled during the pause period."
    },
    {
      question: "Where can customers find official updates and announcements regarding the pause of [companyName] operations?",
      answer: "Official updates and announcements will be published on the [companyName] official website and communicated through other [companyName] official channels. Customers are advised to stay informed through these sources for the latest information."
    },
    {
      question: "Will my account remain active after the pause?",
      answer: "Your customer account will remain active, even though we have paused our draw operations. Your balance, if any, will remain secure until we resume operations, or until withdrawn."
    },
    {
      question: "How has [companyName] positively impacted the community during its operation?",
      answer: "[companyName], launched in 2020, has become a beacon of hope, changing people's lives for the better. It has crowned 64 millionaires, given away more than AED 500,000,000 to over 1.8 million winners, and actively conducted a community outreach programme focusing on education, healthcare, and the environment that has benefited 10,000 individuals."
    },
    {
      question: "What is the focus of [companyName]'s community outreach program?",
      answer: "[companyName]'s community outreach program focuses on education, healthcare, and the environment. Over the past three years, it has distributed over 26 million water bottles to over 40 shared accommodations and not-for-profit institutions and NGOs, impacting over 10,000 beneficiaries."
    },
    {
      question: "Will Ewings' Corporate Social Responsibility (CSR) activities be paused?",
      answer: "Ewings is committed to upholding the highest standards of corporate governance and compliance with regulatory directives. In response to specific guidance from the Regulator, we have temporarily paused our Corporate Social Responsibility (CSR) activities, however Ewings will use the pause period to work on exciting future CSR initiatives."
    },
    {
      question: "How can I erase my data from Ewings' records?",
      answer: "At Ewings, we take data privacy seriously and we are committed to ensuring compliance with applicable data protection laws. If you wish to request the erasure of your data, please follow the steps outlined below:\n\nSubmit a Written Request: Please submit a written request for data erasure, including your full name, contact information, and any specific details regarding the data you would like to be erased.\n\nVerification of Identity: To protect your privacy and ensure the security of your data, we may request additional information to verify your identity before proceeding with the erasure request.\n\nReview of Request: Once we receive your request and verify your identity, we will review the details to determine the scope and feasibility of the data erasure.\n\nConfirmation of Erasure: Upon completion of the erasure process, we will confirm in writing that your data has been successfully erased from our records.\n\nPlease note that certain legal obligations may require us to retain certain information for a specific period. We will inform you if any such obligations apply to your request. For any further assistance or clarification, please contact our Data Protection Officer at dpo@ewings.ae or customer.support@[companyName].ae."
    },
    {
      question: "Will new registration still be available?",
      answer: "Ewings will temporarily suspend new [companyName] registrations."
    },
    {
      question: "Will the pause in new registrations by Ewings affect players from outside the United Arab Emirates?",
      answer: "Yes, the temporary pause in new registrations applies to players both within and outside the UAE. This decision is made in accordance with regulatory directives that impact our ability to accept new registrations from all locations."
    },
    {
      question: "Note: For customers seeking clarification on [companyName] credit withdrawal procedures or any other queries related to this development, please call our winners’ engagement team at 8005825 (Toll-free within the UAE) or +971 4 588 0100 (International Calls).",
      answer: ""
    }
  ];

  return (
    <section className="py-12 bg-gray-50 mt-[90px]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-6">
              <div
                className="flex items-center justify-between bg-white p-5 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-xl font-semibold text-gray-700">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.292 7.292a1 1 0 011.416 0L10 10.584l3.292-3.292a1 1 0 111.416 1.416l-4 4a1 1 0 01-1.416 0l-4-4a1 1 0 010-1.416z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              {activeIndex === index && (
                <div className="mt-4 px-5 py-3 bg-gray-100 rounded-lg text-gray-700 shadow-md">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
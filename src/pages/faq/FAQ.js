import React, { useState } from 'react';

const FAQ = () => {
    const faqItems = [
        { question: 'What is EverMore?', answer: 'EverMore is an AI marketplace that provides access to a wide range of pre-trained models for various purposes. It allows users to upload data, obtain predictions, and gain valuable insights without requiring AI expertise.' },
        { question: 'How do I sign up?', answer: 'To sign up for EverMore, simply click on the "Sign Up" button and follow the registration process. You will need to provide some basic information and create an account.' },
        { question: 'Can I use EverMore for free?', answer: 'EverMore offers both free and paid plans. The free plan allows limited access to certain features, while the paid plans offer more advanced functionality and capabilities. You can upgrade your plan at any time.' },
        { question: 'How do I contact support?', answer: 'If you have any questions or need assistance, you can contact our support team by clicking on the "Contact Us" button or sending an email to support@evermore.com. We\'re here to help!' },
        { question: 'Is my data secure on EverMore?', answer: 'Yes, EverMore takes data security very seriously. We use industry-standard encryption and security measures to ensure that your data is protected and handled with the utmost care.' },
        { question: 'How often are new models added to the marketplace?', answer: 'New models are regularly added to the EverMore marketplace. Stay updated by subscribing to our newsletter or checking the New Releases section on our website.' },
    ];

    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    return (
        <div>
                    <div className="bg-blue-950 rounded-3xl p-6 w-9/12 ml-dashboard-table mt-32">
          <div>
          <div className="container mx-auto py-10">
            <div className="grid grid-cols-1 gap-8">
                {faqItems.map((item, index) => (
                    <div key={index} className="col-span-1">
                        <div className="bg-gray-100 p-4 rounded-md cursor-pointer" onClick={() => handleQuestionClick(index)}>
                            <h2 className="text-lg font-semibold mb-2">{item.question}</h2>
                            {expandedQuestion === index && <p className="text-gray-700">{item.answer}</p>}
                        </div>
                    </div>
                ))}
            </div>
     
            </div>
          </div>
        </div>

        </div>

    );
};

export default FAQ;

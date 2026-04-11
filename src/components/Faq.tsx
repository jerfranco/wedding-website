import { useState } from "react";
import image from '/faq_image.webp';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What's the wedding dress code?",
      answer: "Sunday best!",
    },
    {
      question: "Is there parking available?",
      answer: "There will be parking at the Chapel!",
    },
    {
      question: "What time does the reception start?",
      answer: "The reception starts at 4:30pm and ends at 7pm",
    },
    {
      question: "Are plus-ones allowed?",
      answer: "Yes! Make sure you include them in the party amount when RSVP",
    },
    {
      question: "What is the weather like?",
      answer:
        "The East Bay will be pretty warm during the summer, so please dress accordingly!",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Please list them on the RSVP. There will be a dedicated section for allergies!",
    },
    {
      question: "Is it okay to take pictures?",
      answer: "Yes, but please be mindful of the photographers and other guests."
    },
  ];

  return (
    <section id="faqSection">
      <div id="info">
        <h1 className="bellota-regular">Frequently Asked Questions</h1>

        <div id="questionSection">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 onClick={() => toggle(index)} className="faq-question">
                {faq.question}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  ▼
                </span>
              </h2>

              {openIndex === index && <p className="barlow-regular">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      <img src={image} alt="image" />
    </section>
  );
}
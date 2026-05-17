import { useState } from "react";
import { useEffect } from "react";

export function Faq() {
  useEffect(() => { document.title = "FAQ | Janelle & Jeremiah"; }, []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can we contact you?",
      answer: (
        <>
          You can text us at:<br />
          Jeremiah: <br />(925)-234-2419<br />
          Janelle: <br />(360)-528-1903
        </>
      )
    },
    {
      question: "Where is the reception?",
      answer: (
        <>
          <a 
          href="https://www.google.com/maps?q=2350+Jeffery+Way+Brentwood+CA+94513"
          target="_blank"
          rel="noopener noreferrer"
          >
            2350 Jeffery Way Brentwood, CA 94513
          </a><br/>
          Please enter into the North Entrance!
        </>
        
        
      )
    },
    {
      question: "What's the wedding dress code?",
      answer: "Sunday best! Attendees are NOT required to wear any specific color",
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
      {/* <img src={image} alt="image" /> */}
    </section>
  );
}
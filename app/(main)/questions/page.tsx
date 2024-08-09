"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  answertwo?: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Why do I need a link in bio tool?',
    answer: `Right now, every time you've got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It's time-consuming and complicated — making it so much harder to keep everything up to date.`,
    answertwo: 'A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.'
  },
  {
    question: 'Is Linktree the original link in bio tool?',
    answer: 'The short answer? Yes!',
    answertwo: 'Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning. You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!',
  },
  {
    question: 'Can you get paid and sell things from a Linktree?',
    answer: 'Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree.',
    answertwo: 'A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay!',
  },
  {
    question: 'Is Linktree safe to use on all of my social media profiles?',
    answer: 'The answer to this question is not provided in the example, so you can fill in the appropriate content here.',
  },
  {
    question: 'What makes Linktree better than the other link in bio options?',
    answer: 'The answer to this question is not provided in the example, so you can fill in the appropriate content here.',
  },
  {
    question: 'How can I drive more traffic to and through my Linktree?',
    answer: 'The answer to this question is not provided in the example, so you can fill in the appropriate content here.',
  },
  {
    question: 'How many links should I have on my Linktree?',
    answer: 'This depends on two things. If your priority is click-throughs and conversion, we recommend having 3-7 links on your Linktree at once (based on our most successful creators). Including too many options for your visitors slows down their course of action.',
  },
  {
    question: 'Do I need a website to use Linktree?',
    answer: 'No, you don’t! Linktree can act as your very own mini-website to share, sell and grow without any of the time and effort it takes to build and maintain a regular website. You can create a design that fully reflects your personality and brand in seconds, with no knowledge, skills or experience needed. If you already have a website, that’s great: you can add it to your Linktree.',
  },
  {
    question: 'Where can I download the app?',
    answer: 'Find it in the App Store, and in the Google Play store!',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full bg-[#780016]'>
      <div className="max-w-4xl mx-auto p-4 bg-[#780016]">
        <h2 className="text-3xl sm:text-5xl text-[#eacce8] font-bold text-center m-[50px] sm:m-[100px]">Got questions?</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="text-left p-4 bg-[#52000f] font-bold text-xl sm:text-2xl text-[#eacce8] rounded-3xl w-full"
              onClick={() => toggleOpen(index)}
            >
              <div className="flex justify-between items-center">
                <span>{item.question}</span>
                <span>{openIndex === index ? '▲' : '▼'}</span>
              </div>
            </button>
            {openIndex === index && (
              <div className="mt-2 p-4 text-[#eacce8] rounded-lg bg-[#52000f]">
                <p>{item.answer}</p>
                {item.answertwo && <p className="mt-2">{item.answertwo}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

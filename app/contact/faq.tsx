"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add custom information to your invoices including company details, tax information, and custom notes.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We bill monthly or annually depending on your plan. All payments are processed securely and you'll receive an invoice for each payment.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can change your account email in your account settings. You'll need to verify your new email address before the change takes effect.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1); // First item open by default

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="md:text-xl flex flex-col gap-4 text-center mt-10 mb-8">
        <h2>Frequently Asked Questions</h2>
        <p className="text-gray-500">Everything you need to know about the product and billing.</p>
      </div>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={item.id} className={`pb-4 ${index !== faqData.length - 1 ? 'border-b border-gray-200' : ''}`}>
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left py-4 hover:text-gray-600 transition-colors"
            >
              <span className="text-lg font-semibold pr-8">{item.question}</span>
              <span className="flex-shrink-0">
                {openId === item.id ? (
                  <Minus className="w-6 h-6 text-bgLemon rounded-full border-1 border-bgLemon p-0.5" />
                ) : (
                  <Plus className="w-6 h-6 text-bgLemon rounded-full border-1 border-bgLemon p-0.5" />
                )}
              </span>
            </button>

            {openId === item.id && (
              <div className="pb-4 md:pr-10 text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

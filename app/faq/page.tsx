/*
FAQ: will display frequently asked questions and answers about creating an account
, managing deliveries, payment methods and orders.
*/

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="ml-[2rem] min-w-[500px] max-w-7xl md:mx-auto flex flex-col items-center justify-center min-h-screen py-8 bg-bgLemon text-bgWhite px-4 dark:bg-gray-900 dark:text-bgLemon rounded-lg">
      <Accordion type="single" collapsible className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">
          Frequently Asked Question Page
        </h2>
        <p className="text-xl text-left max-w-4xl md:text-2xl">
          Welcome to the Velora FAQ Page. Here you can find answers to the most
          frequently asked questions about our platform, services, and policies.
          If you have any additional questions, feel free to reach out to our
          customer support team for further assistance.
        </p>

        {/* Account Management */}
        <div className="mt-10 max-w-3xl text-left mb-10 border-b-2 pb-5">
          <AccordionItem value="account-management">
            <AccordionTrigger className="text-3xl font-bold mb-6">
              Account Management
            </AccordionTrigger>{" "}
            <AccordionContent>
              <p className="text-xl md:text-2xl">
                Learn how to create, manage, and secure your Velora account.
                Find answers to common questions about account settings,
                password recovery, and profile updates.
              </p>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Orders & Payments */}
        <div className="mt-10 max-w-3xl text-left mb-10 border-b-2 pb-5">
          <AccordionItem value="orders-payments">
            <AccordionTrigger className="text-3xl font-bold mb-6">
              Orders & Payments
            </AccordionTrigger>{" "}
            <AccordionContent>
              <p className="text-xl md:text-2xl">
                Get information on placing orders, payment methods, and order
                tracking. Find solutions to common issues related to payments
                and order fulfillment.
              </p>
            </AccordionContent>
          </AccordionItem>
        </div>

        {/* Shipping & Deliveries */}
        <div className="mt-10 max-w-3xl text-left mb-10 border-b-2 pb-5">
          <AccordionItem value="shipping-deliveries">
            <AccordionTrigger className="text-3xl font-bold mb-6">
              Shipping & Deliveries
            </AccordionTrigger>{" "}
            <AccordionContent>
              <p className="text-xl md:text-2xl">
                Find answers to questions about shipping options, delivery
                times, and tracking your orders. Learn about our shipping
                policies and procedures.
              </p>
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </div>
  );
}

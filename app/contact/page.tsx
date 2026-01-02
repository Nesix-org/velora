import { Metadata } from "next";
import ContactDetails from "./contactDetails";
import ContactForm from "./contactForm";
import FAQ from "./faq";


export const metadata: Metadata = {
    title: "Velora || Contact Page",
    description: "The Contact Page of Velora Website",
};

export default function Contact() {
  return (
    <section className="lg:max-w-7xl w-full px-10 flex flex-col my-10 mx-auto">
      <header>
        <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
          Contact
        </h3>
      </header>
      <section className="flex flex-col md:flex-row items-start gap-5  md:gap-10 lg:gap-15 mt-5">
        <h2 className="text-2xl md:text-5xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
          Reach out to us anytime <br /> anyday
        </h2>
      </section>

      <section className="mt-10 flex flex-col md:flex-row gap-8 justify-between items-center">
        <ContactForm />
        <ContactDetails />
      </section>

        <FAQ />
    </section>
  );
}

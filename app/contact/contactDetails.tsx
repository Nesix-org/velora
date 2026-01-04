import React from "react";
import { Phone, Mail } from "lucide-react";

interface ContactInfo {
  label: string;
  value: string;
  link: string;
}

interface ContactSection {
  id: number;
  title: string;
  icon: React.JSX.Element;
  description: string;
  details: ContactInfo[];
}

const contactData: ContactSection[] = [
  {
    id: 1,
    title: "Call To Us",
    icon: <Phone className="w-5 h-5 text-white" />,
    description: "We are available 24/7, 7 days a week.",
    details: [
      { label: "Phone", value: "+8801611112222", link: "tel:+8801611112222" },
    ],
  },
  {
    id: 2,
    title: "Write To Us",
    icon: <Mail className="w-5 h-5 text-white" />,
    description: "Fill out our form and we will contact you within 24 hours.",
    details: [
      {
        label: "Emails",
        value: "customer@exclusive.com",
        link: "mailto:customer@exclusive.com",
      },
      {
        label: "Emails",
        value: "support@exclusive.com",
        link: "mailto:support@exclusive.com",
      },
    ],
  },
];

export default function ContactDetails() {
  return (
    <div className="max-w-sm p-10 shadow-sm border border-gray-100 rounded-sm">
      {contactData.map((section, index) => (
        <div key={section.id}>
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-bgLemon rounded-full">
                {section.icon}
              </div>
              <h3 className="font-medium text-black text-lg">
                {section.title}
              </h3>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 text-sm text-black">
              <p>{section.description}</p>
              {section.details.map((item, idx) => (
                <p key={idx}>
                  {item.label}:{" "}
                  <a
                    href={item.link}
                    className="cursor-pointer hover:underline"
                  >
                    {item.value}
                  </a>
                </p>
              ))}
            </div>
          </div>

          {/* Divider (Only show if not the last item) */}
          {index < contactData.length - 1 && (
            <hr className="my-8 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
}

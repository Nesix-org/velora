"use client";
// Marquee
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import Star from "@/public/assets/heroSection/star.svg";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

interface LoopProps{ label: string; icon: string | StaticImageData};

const labels: LoopProps[]= [
  { label: "Fashion", icon: Star },
  { label: "Style", icon: Star },
  { label: "Elegance", icon: Star },
  {label: "Beauty", icon: Star},
  {label: "Lifestyle", icon: Star}
];


function HomePageLabel () {
    return (
        <>
             <Marquee gradient={false} speed={50}>
          {labels.map((label) => (
            <div
              key={label.label}
              className="flex items-center space-x-4 md:space-x-15 mx-3 md:mx-10"
            >
              <p className="text-2xl md:text-5xl font-bold">{label.label}</p>
              <Image
                src={label.icon}
                alt={label.label}
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
          ))}
        </Marquee>
        </>
    )
}

export default HomePageLabel;
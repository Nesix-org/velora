import Image from "next/image";
import { Poppins, Inter } from "next/font/google";
import { icons, veloraTeam, blogCard } from "@/constants/blogCard";
import shoppingImg from "@/public/assets/blogPage/storyImg.svg";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function BlogPage() {
  return (
    <main className="w-full md:max-w-3xl lg:max-w-7xl px-5 lg:px-10 flex flex-col gap-14 md:gap-20 py-10 mx-auto">
      <section className="flex flex-col-reverse md:flex-row md:items-end md:justify-between">
        <div className="w-full md:max-w-[520px]">
          <header>
            <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
              Blog
            </h3>
          </header>
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
            Our Story
          </h2>
          <div className="w-full mt-4 md:mt-7 space-y-3 md:space-y-4">
            <p className="text-gray-400 text-[14px] md:text-xl">
              Launched in 2015, Velora is South Asia&apos;s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Velora has 10,500 sellers and 300 brands and serves 3
              million customers across the region.
            </p>
            <p className="text-gray-400 text-[14px] md:text-xl">
              Velora has more than 1 Million products to offer, growning at a
              very fast rate. Velora offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div>
          <Image src={shoppingImg} alt="Shopping image" priority />
        </div>
      </section>
      <section aria-labelledby="statistics">
        <div className="w-full flex flex-col gap-5 md:flex-row items-center">
          {blogCard.map((card) => (
            <div
              className="w-2xs md:max-w-[300px] h-64 border border-[#0000004D] rounded-md flex flex-col items-center justify-center gap-6 group hover:bg-bgLemon transition-colors duration-300 hover:shadow-lg hover:border-0"
              key={card.id}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full group-hover:bg-[#bcd47e]">
                <div className="bg-bgLemon w-15 h-15 lg:w-15 lg:h-15 flex items-center justify-center rounded-full group-hover:bg-white">
                  {card.icon}
                </div>
              </div>
              <div className="text-center">
                <span
                  className={`${inter.className} text-2xl md:text-3xl lg:text-4xl font-bold group-hover:text-white tracking-wider`}
                >
                  {card.amount}
                </span>
                <p
                  className={`${poppins.className} text-center mt-2 text-[14px] md:text-base group-hover:text-white`}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <header>
          <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
            Blog
          </h3>
        </header>
        <h2 className="text-2xl md:text-5xl lg:text-5xl font-medium text-gray-900 dark:text-gray-100">
          Meet the Team
        </h2>
        <div className="w-full flex flex-col gap-7 md:gap-5 md:flex-row justify-center mt-8 md:mt-10">
          {veloraTeam.map((team) => (
            <article className="w-full max-w-[400px]" key={team.id}>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={team.imageUrl}
                  alt={team.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p
                className={`${inter.className} text-2xl lg:text-4xl font-medium mt-3 tracking-wide`}
              >
                {team.name}
              </p>
              <p className={`${poppins.className} text-gray-400`}>
                {team.title}
              </p>
              <div className="flex gap-3 mt-2 md:mt-4">
                {icons.map((icon) => (
                  <button
                    className="cursor-pointer"
                    key={icon.id}
                    aria-label="social media handles"
                  >
                    <Image
                      src={icon.url}
                      alt="social url icons"
                      width={20}
                      height={20}
                    />
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

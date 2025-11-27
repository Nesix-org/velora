import Image from "next/image";

type AppProps = {
  appUrl: string;
  action?: string;
  name?: string;
};

const appProps: AppProps[] = [
  {
    appUrl: "/assets/appStoreDesign/download-on-the-app-store.svg",
    action: "Download on the",
    name: "App Store",
  },
  {
    appUrl:
      "/assets/appStoreDesign/GetItOnGooglePlay_Badge_Web_color_English.svg",
    action: "Get it on",
    name: "Google Play",
  },
];

export default function AppStoreExperience() {
  return (
    <section className="bg-[#A1C249] w-full pt-10 pb-5 md:px-16 md:py-0 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
      <div className="flex flex-col px-6 gap-6 md:gap-12 items-center md:items-start">
        <h2 className="text-2xl md:text-4xl font-medium md:text-left text-center">
          Enjoy better Experience with our App
        </h2>

        <nav className="flex flex-row gap-4">
          {appProps.map((app, index) => (
            <section key={index} className="">
              <a
                href={app.name === "App Store"
                  ? "https://apps.apple.com/app/idYOUR_APP_ID"
                  : "https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE"}
                aria-label={`Download Velora app on the ${app.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="p-[1px] rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, #6DDCFF, #7F60F9)",
                  }}
                >
                  <Image
                    src={app.appUrl}
                    alt=""
                    width={135}
                    height={40}
                    className="w-[120px] md:w-[135px]"
                  />
                </div>
              </a>
            </section>
          ))}
        </nav>
      </div>
      <figure>
        <Image
          src="/assets/appStoreDesign/veloraMobile.svg"
          alt="mobile app experience"
          width={400}
          height={500}
          className="w-[280px] h-auto md:w-[400px] lg:w-[500px]"
        />
      </figure>
    </section>
  );
}

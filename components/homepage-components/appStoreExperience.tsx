import Image from "next/image";

type AppProps = {
  appUrl: string;
  name?: string;
};

const appProps: AppProps[] = [
  {
    appUrl: "/assets/appStoreDesign/download-on-the-app-store.svg",
    name: "App Store",
  },
  {
    appUrl:
      "/assets/appStoreDesign/GetItOnGooglePlay_Badge_Web_color_English.svg",
    name: "Google Play",
  },
];

export default function AppStoreExperience() {
  return (
    <main className="w-full max-w-7xl py-20 px-10">
      <section className="rounded-xl bg-bgLemon w-full pt-10 md:py-10 lg:py-0 pb-5 md:px-16 md:py-0 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
        <div className="flex flex-col gap-6 md:gap-12 items-center md:items-start">
          <h2 className="text-2xl md:text-4xl font-medium md:text-left text-center">
            Enjoy a better Experience with our App
          </h2>

          <div className="flex flex-row gap-4">
            {appProps.map((app) => (
              <section key={app.appUrl}>
                <div
                  className="p-[1px] rounded-lg"
                  style={{
                    background: "linear-gradient(90deg, #6DDCFF, #7F60F9)",
                  }}
                >
                  <a
                    href={
                      app.name === "App Store"
                        ? "https://apps.apple.com/app/idYOUR_APP_ID"
                        : "https://play.google.com/store/apps/details?id=YOUR_APP_PACKAGE"
                    }
                    aria-label={`Download Velora app on the ${app.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="banner"
                  >
                    <Image
                      src={app.appUrl}
                      alt=""
                      width={135}
                      height={40}
                      className="w-[120px] md:w-[135px]"
                    />
                  </a>
                </div>
              </section>
            ))}
          </div>
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
    </main>
  );
}

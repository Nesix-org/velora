import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 px-5 md:py-40">
      <div className="w-full md:max-w-3xl mx-auto text-center space-y-6 md:space-y-10">
        <h2 className="text-4xl md:text-7xl font-medium"> Opps! </h2>
        <p className="text-5xl md:text-8xl font-medium tracking-wide">
          404 Not Found
        </p>
        <p className="">
          The page you&apos;re looking for doesn&apos;t exist. You can return to
          the homepage.
        </p>
        <Link href={"/"}>
          <button className="bg-bgLemon hover:bg-[#8FAF3A] text-black font-semibold py-3 px-20 rounded-3xl transition duration-200 shadow-md hover:shadow-lg">
            Go to Homepage
          </button>
        </Link>
      </div>
    </section>
  );
}

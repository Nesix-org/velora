import Image from "next/image";
import Link from "next/link";
import JustForYou from "@/components/cartComponents/justForYou";

export default function EmptyCart() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/emptyCart.svg"}
          alt={"empty Cart"}
          width={400}
          height={80}
        />
        <p className="text-gray-500 font-semibold text-3xl">No items here</p>
        <Link href={"/"} className="mt-2 text-2xl text-bgLemon px-4">
          Continue Shopping
        </Link>
      </div>
      <JustForYou />
    </section>
  );
}

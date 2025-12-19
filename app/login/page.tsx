// images
import Image from "next/image";
import signupImage from "@/public/assets/signup/signup.svg";
import SignInForm from "./SignInForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-5 h-full flex justify-around items-center mt-10">
      {/* image */}
      <div className="-ml-20 -mb-10 hidden lg:block">
        <Image
          src={signupImage}
          alt="Signup Image"
          className="object-cover w-[600px] h-[600px]"
        />
      </div>
      {/* signIn Form */}
      <SignInForm />
    </div>
  );
}

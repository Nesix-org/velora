// images
import Image from "next/image";
import signupImage from "@/public/assets/signup/signup.svg";
// form component
import SignUpForm from "./SignUpForm";


 
function SignupPage() {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-5 h-full flex justify-around items-center mt-10">
      {/* image */}
      <div className="-ml-20 -mb-21 hidden lg:block">
        <Image
          src={signupImage}
          alt="Signup Image"
          className="object-cover w-[700px] h-[700px]"
        />
      </div>
      {/* signup form */}
      <SignUpForm />
    </div>
  );
}

export default SignupPage
"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// zod imports
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// icons
import { EyeClosed, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import apple from "@/public/assets/signup/apple.svg";
import google from "@/public/assets/signup/google.svg";
import signupImage from "@/public/assets/signup/signup.svg";
// hooks
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/components/context/AuthContext";


// type FormFields = {
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

const formSchema =z.object({
  name:z.string().min(6),
  email:z.string().email("Email is required"),
  password:z.string().min(6),
  confirmPassword:z.string() ,
}).refine((data) => data.password === data.confirmPassword,{
  message:"Passwords do not match",
  path:["confirmPassword"],
})
 
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {login} = useAuth();
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), //checks validation against schema
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // replace with Api 
    const newUser ={name: data.name, email: data.email, password: data.password};
     if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(newUser));
  }

    await login(newUser);
    reset();
    router.push("/profile");
  };

  return (
    <div className="container mx-auto px-4 lg:px-0 py-5 h-full flex justify-around items-center mt-10">
      {/* image */}
      <div className="-ml-20 -mb-23 hidden lg:block">
        <Image
          src={signupImage}
          alt="Signup Image"
          className="object-cover w-[600px] h-[600px]"
        />
      </div>
      {/* signup Form */}
      <div className=" w-full lg:max-w-md  px-6 lg:px-10 py-5 ring-1 ring-black/10 lg:ring-0 rounded-lg shadow-lg lg:rounded-none">
        <div className="mb-6 lg:mb-8">
          <h1 className="text-xl font-bold text-center py-2">Create new account</h1>
          <p className="text-sm text-[#a1a1a1] text-center">Enter your personal details below to proceed</p>
        </div>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 lg:mb-4">
            <label className="block mb-2">Name</label>
            <Input
              type="text"
              className="w-full px-3 py-5.5 border rounded-md"
              placeholder="Enter your name"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-5 lg:mb-4">
            <label className="block mb-2">Email</label>
            <Input
              type="email"
              className="w-full px-3 py-5.5 border rounded-md"
              placeholder="Enter your email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-5 lg:mb-4 ">
            <label className="block mb-2">Password</label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                className=" px-3 py-5.5 border rounded-md "
                placeholder="Enter password"
                id="password"
                {...register("password")}
              />
              <div
                className="absolute right-4 top-3 w-5 h-5 cursor-pointer text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-5 lg:mb-4">
            <label className="block mb-2">Confirm Password</label>
            <div className="relative ">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                className=" px-3 py-5.5 border rounded-md "
                placeholder="confirm password"
                id="confirm password"
                {...register("confirmPassword")}
              />
              <div
                className="absolute right-4 top-3 w-5 h-5 cursor-pointer text-gray-400"
                onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? <Eye /> : <EyeClosed />}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p> 
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full px-4 py-2 bg-[#A1C249] text-primary rounded-md text-center"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <Spinner className="w-5 h-5 text-white" />
              </div>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
        <div className="text-center mt-4 ">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link href="/login" className="text-[#A1C249] hover:underline ml-1">
              Log in
            </Link>
          </p>
        </div>
        {/* divider */}
        <div className="flex items-center justify-center mt-3 gap-3 text-[#A1C249]">
          <p className="border-b border-[#A1C249] w-35 "></p>
          <span>Or</span>
          <p className="border-b border-[#A1C249] w-35 "></p>
        </div>
        <div>
          <button className="w-full mt-4 px-4 py-2 border border-[#A1C249]  rounded-md hover:bg-gray-100 flex items-center justify-center gap-2">
            <Image src={apple} alt="Apple Icon" width={20} height={20} />
            <span>Sign up with Apple</span>
          </button>
          <button className="w-full mt-4 px-4 py-2 border border-[#A1C249] rounded-md hover:bg-gray-100 flex items-center justify-center gap-2">
            <Image src={google} alt="Google Icon" width={20} height={20} />
            <span>Sign up with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

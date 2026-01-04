"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
// Zod, react-hook-form
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
// Icons & images
import { EyeClosed, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import apple from "@/public/assets/signup/apple.svg";
import google from "@/public/assets/signup/google.svg";
// state
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const LoginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6),
});

type LoginForm = z.infer<typeof LoginSchema>;

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { user, login } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema), //checks validation against schema
  });

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Check localStorage for a previous user
    const storedUser =
      user || JSON.parse(localStorage.getItem("user") || "null");
    console.log("Stored user:", storedUser);

    if (!storedUser) {
      alert("No account found. Please sign up.");
      return;
    }

    if (
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      await login(storedUser);
      reset();
      router.push("/profile");
      return;
    }

    alert("Invalid email or password");
  };
  return (
    <div className="flex flex-col">
      <div className=" w-full lg:max-w-md px-6 lg:px-10 py-5 ring-1 ring-black/10 lg:ring-0 rounded-lg shadow-lg lg:rounded-none">
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl font-bold text-center py-2">Login</h2>
          <p className="text-sm text-[#a1a1a1] text-center">
            Enter your personal details below to proceed
          </p>
        </div>
        <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
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
          <p className="text-right py-2">Forget password?</p>
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
              "Login"
            )}
          </button>
        </form>
        <div className="text-center mt-4 ">
          <p className="text-gray-600 dark:text-gray-400">
            Don’t have an account?
            <Link
              href="/signup"
              className="text-[#A1C249] hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>
        </div>

        {/* divider */}
        <div className="flex items-center justify-center mt-3 gap-3 text-[#A1C249]">
          <p className="border-b border-[#A1C249] w-35 "></p>
          <span>Or</span>
          <p className="border-b border-[#A1C249] w-35 "></p>
        </div>
        {/* signup with google and apple */}
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
};

export default SignInForm;

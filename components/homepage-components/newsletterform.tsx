'use client'

import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

function NewsLetterForm () {
    const [email, setEmail] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
    const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      setIsSubmitting(true);
  
      try {
        // TODO: Replace this with actual API call when backend is ready
        // const response = await fetch('/api/newsletter', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ email })
        // });
  
        // Simulate an API call to subscribe the user to the newsletter
        await new Promise((resolve) => setTimeout(resolve, 2000));
  
        // for now, just show a success toast
        toast.success("Subscribed to newsletter successfully!");
        setEmail(""); // Clear the input field
      } catch {
        toast.error("Something went wrong. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    };
  

    return (
        <form
        onSubmit={handleNewsletterSubmit}
        className="flex w-full max-w-md flex-col gap-3 md:w-[350px] lg:mr-[-2.5rem]"
      >
        <div className="relative">
          <Mail className="absolute left-15  top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 md:left-12" />
          <Input
            type="email"
            placeholder="Enter your email address"
            className="h-10 md:h-12 w-[85%] md:w-full mx-6 md:mx-0 text-sm md:text-md rounded-full border-0 bg-white pl-12 pr-4 text-center text-gray-900 placeholder:text-gray-400 md:pl-10 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="h-10 md:h-12 w-[85%] md:w-full mx-auto md:mx-0 text-sm md:text-md rounded-full bg-white/80 backdrop-blur-xl text-bgLemon 
hover:bg-white/90 hover:text-gray-900 md:w-auto px-6 font-semibold cursor-pointer
shadow-[0_8px_32px_0_rgba(255,255,255,0.37)] border border-white/30
relative overflow-hidden group
disabled:opacity-50 disabled:cursor-not-allowed
transition-all duration-300"
        >
          <span className="relative z-10">
            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-transparent opacity-50 group-hover:opacity-70 transition-opacity" />
        </motion.button>
      </form>
    )
}

export default NewsLetterForm;
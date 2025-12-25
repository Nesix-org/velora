"use client";

import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine((value) => isValidPhoneNumber(value), {
      message: "Invalid phone number for country",
    }),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    control,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-sm shadow-md p-8 flex flex-col gap-9 lg:pr-40"
    >
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="text-sm text-gray-400">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-3 border-1 rounded-lg hover:border-black text-sm w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="text-sm text-gray-400">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 border-1 rounded-lg hover:border-black text-sm w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm text-gray-400">
          Phone Number
        </label>
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              defaultCountry="ng"
              value={field.value}
              onChange={(phone) => field.onChange(phone)}
              inputClassName="w-full !py-6 !bg-transparent border-2 border-black !rounded-r-lg outline-none text-sm text-gray-600"
              countrySelectorStyleProps={{
                buttonClassName:
                  "!bg-transparent !border-1 !border-r !border-gray-300 !px-5 !py-6 !rounded-l-lg",
              }}
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{errors.phone.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-gray-400">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={5}
          placeholder="Enter your message"
          className="p-3 border-1 rounded-lg hover:border-black text-sm"
        />
      </div>
      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="cursor-pointer md:w-fit block bg-bgLemon text-black px-5 md:px-25 py-3 text-sm font-bold rounded-full"
      >
        {formState.isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

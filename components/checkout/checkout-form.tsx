'use client'

import { useForm } from "react-hook-form"
import { CheckoutFormField } from "./checkout-form-field"
import z from "zod"
// import { PhoneNumber } from "libphonenumber-js"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { CheckIcon } from "lucide-react"

const CheckoutFormSchema = z.object({
    fullName: z.string(),
    streetAddress: z.string(),
    city: z.string(),
    state: z.string(),
    phoneNumber: z.coerce.number(),
    email: z.email()
})

type CheckoutFormResolver = z.infer<typeof CheckoutFormSchema>

function CheckoutForm () {
    const [isChecked, setIsChecked] = useState(false)
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(CheckoutFormSchema)
    })

    function onSubmit (data: CheckoutFormResolver) {
        console.log(data)
    }

    return (
        <form className="w-full p-2 md:w-2/3 md:p-0 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="fullName"
                    label="Full Name"
                    type="text"
                    {...register('fullName')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="streetAddress"
                    label="Street Address"
                    type="text"
                    {...register('streetAddress')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="city"
                    label="City"
                    type="text"
                    {...register('city')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="state"
                    label="State"
                    type="text"
                    {...register('state')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="phoneNumber"
                    label="Phone Number"
                    type="tel"
                    {...register('phoneNumber')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField
                    htmlFor="email"
                    label="Email"
                    type="email"
                    {...register('email')}
                />
            </div>

            <div className="flex items-center gap-2">
                <div className="relative">
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={() => setIsChecked(prev => !prev)}
                        className={`appearance-none border p-2 rounded text-sm text-checkoutGray ${isChecked ? 'bg-checkbox' : ''}`}
                        // {...register('checkbox')}
                    />
                    {isChecked && (
                        <CheckIcon className="absolute top-0.5 right-0.5  m-auto size-4 text-white pointer-events-none" />
                    )}
                </div>
                <label htmlFor='checkbox' className="">
                    <span className="text-sm text-black">Save this information for faster check-out next time</span>
                </label>
            </div>
            {/* <button type="submit">
                submit
            </button> */}
        </form>
    )
}

export default CheckoutForm
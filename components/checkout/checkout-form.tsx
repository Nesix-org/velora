'use client'

import { useForm } from "react-hook-form"
import { CheckoutFormField } from "./checkout-form-field"
import z from "zod"
// import { PhoneNumber } from "libphonenumber-js"
import { zodResolver } from "@hookform/resolvers/zod"

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
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(CheckoutFormSchema)
    })

    function onSubmit (data: CheckoutFormResolver) {
        console.log(data)
    }

    return (
        <form className="w-2/3 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
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
            <button type="submit">
                submit
            </button>
        </form>
    )
}

export default CheckoutForm
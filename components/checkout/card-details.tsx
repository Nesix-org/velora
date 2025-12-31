'use client'

import z from "zod"
import { CheckoutFormField } from "./checkout-form-field"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const CardSchema = z.object({
    cardHolderName: z.string(),
    cardNumber: z.string().regex(/^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/, {
        message: "Invalid credit card format. Use: 1234 5678 9012 3456"
    }),
    cardCVV: z.coerce.string().regex(/^\d{3,4}$/, "Invalid CVV").max(3),
    expiryDate: z.string()
})

type CardData = z.infer<typeof CardSchema>

function CardDetails () {
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(CardSchema)
    })

    function handleCardSubmit(data:CardData) {
        console.log(data)
    }

    return (
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(handleCardSubmit)}>
            <div className="flex flex-col gap-2">
                <CheckoutFormField 
                    htmlFor="cardHolderName"
                    label="Card Holder Name"
                    type="text"
                    placeholder="Velora Store"
                    {...register('cardHolderName')}
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField 
                    htmlFor="cardNumber"
                    label="Card Number"
                    type="tel"
                    defaultValue='1235-5355-2234-0034'
                    placeholder="09876543218"
                    {...register('cardNumber')}
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col gap-2 flex-1">
                    <CheckoutFormField 
                        htmlFor="cardCVV"
                        label="Card CVV"
                        type="tel"
                        placeholder="123"
                        {...register('cardCVV')}
                    />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <CheckoutFormField 
                        htmlFor="expiryDate"
                        label="Expiry Date"
                        type="text"
                        placeholder="12/30"
                        {...register('expiryDate')}
                        // placeholder=""
                    />
                </div>
            </div>
        </form>
    )
}

export default CardDetails
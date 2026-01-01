import { CheckoutFormField } from "./checkout-form-field"

function CardDetails () {
    return (
        <form className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <CheckoutFormField 
                    htmlFor="cardHolderName"
                    label="Card Holder Name"
                    type="text"
                    placeholder="Velora Store"
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckoutFormField 
                    htmlFor="cardNumber"
                    label="Card Number"
                    type="tel"
                    placeholder="09876543218"
                />
            </div>
            <div className="flex items-center gap-2">
                <div className="flex flex-col gap-2 flex-1">
                    <CheckoutFormField 
                        htmlFor="cardCVV"
                        label="Card CVV"
                        type="tel"
                        placeholder="123"
                    />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <CheckoutFormField 
                        htmlFor="expiryDate"
                        label="Expiry Date"
                        type="text"
                        placeholder="12/30"
                        // placeholder=""
                    />
                </div>
            </div>
        </form>
    )
}

export default CardDetails
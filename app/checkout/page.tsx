import CheckoutForm from "@/components/checkout/checkout-form"

function Checkout () {
    return (
        <main className="w-full px-5 md:px-8 max-w-7xl md:flex md:flex-col mx-auto mt-12 dark:bg-gray-900 md:gap-8 mb-10">
            <div className="flex flex-col w-full gap-2">
                <h3 className="border-l-15 md:border-l-25 border-bgLemon p-2 px-2 md:text-2xl mb-2 font-medium">
                    Checkout
                </h3>
                <h2 className="text-5xl font-medium leading-[39px]">
                    Billing Details
                </h2>
            </div>
            <div className="flex">
                <div className="flex-1">
                    <CheckoutForm />
                </div>
                <div className="flex-1">
                    
                </div>
            </div>
        </main>
    )
}


export default Checkout
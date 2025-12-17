type CartSummaryProps = {
  totalPrice: number;
};

export default function CartSummary({ totalPrice }: CartSummaryProps) {
  return (
    <section className="flex flex-col md:flex-row mt-4 gap-4 justify-between items-start">
      {/* Coupon Form */}
      <form className="flex flex-col md:flex-row gap-4 items-center w-full">
        <label htmlFor="coupon" className="sr-only">
          Coupon code
        </label>
        <input
          id="coupon"
          type="text"
          placeholder="Coupon code"
          className="border border-gray-900 rounded-md px-4 py-2 w-full md:w-64"
        />
        <button
          type="submit"
          className="bg-bgLemon text-black px-4 py-3 text-xs font-bold rounded-full"
        >
          Apply Coupon
        </button>
      </form>

      {/* Cart Total */}
      <aside className="w-full md:w-96 border border-gray-900 rounded-md p-5">
        <h3 className="font-semibold mb-4">Cart Total</h3>

        <div className="divide-y divide-gray-300">
          <div className="flex justify-between py-3">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="flex justify-between py-3">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <button className="block mx-auto mt-4 bg-bgLemon text-black px-6 py-3 text-xs font-bold rounded-full">
          Proceed to Checkout
        </button>
      </aside>
    </section>
  );
}

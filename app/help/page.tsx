export default function HelpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-bgLemon text-bgWhite px-4 dark:bg-gray-900 dark:text-white rounded-lg">
      <p className="text-xl text-center max-w-2xl md:text-2xl">
        Welcome to the Velora Help Center. Here you can find answers to common
        questions, guides on how to use our platform, and resources to assist
        you with any issues you may encounter. Our goal is to provide you with
        the support you need to have a seamless shopping experience.
      </p>

      {/* Customer Support */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Customer Support</h2>
        <p className="text-xl md:text-2xl">
          Our dedicated customer support team is here to help you with any
          inquiries or issues you may have. You can reach us via email, phone,
          or live chat for prompt assistance.
        </p>
      </div>

      {/* Delivery details */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>
        <p className="text-xl md:text-2xl">
          Learn about our shipping options, delivery times, and tracking your
          orders. We strive to ensure that your purchases arrive safely and on
          time.
        </p>
      </div>

      {/* Terms & Conditions */}
      <div className="mt-10 max-w-3xl text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
        <p className="text-xl md:text-2xl">
          Familiarize yourself with our terms and conditions, including our
          return policy, privacy practices, and user responsibilities while
          using our platform.
        </p>
        <p className="text-xl md:text-2xl mt-4">
            Items purchases on Velora are subject to our standard return policy unless otherwise stated. Please review our return policy for detailed information on eligibility, timeframes, and procedures for returning items.
        </p>
      </div>

      {/* Privacy Policies */}
        <div className="max-w-3xl text-center mb-20">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-xl md:text-2xl">
                Your privacy is important to us. Read our privacy policy to understand how we collect, use, and protect your personal information while you shop on Velora.
            </p>
        </div>
    </div>
  );
}

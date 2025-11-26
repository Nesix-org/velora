export default function CompanyPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-bgLemon text-bgWhite px-4 dark:bg-gray-900 dark:text-white rounded-lg">
      <p className="text-xl text-center max-w-2xl md:text-2xl">
        Welcome to the Velora. Here you can find information about our company,
        mission, values, and team. We are dedicated to providing the best
        services to our customers and strive for excellence in everything we do.
      </p>



      {/* About us */}
        <div className="mt-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-xl md:text-2xl">
                Velora is a leading e-commerce platform committed to delivering high-quality products and exceptional customer service. Our mission is to make online shopping easy, enjoyable, and accessible for everyone.
            </p>
        </div>

        {/* Features */}
        <div className="mt-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
            <ul className="list-disc list-inside space-y-2 text-xl md:text-2xl">
                <li>Wide range of products from top brands</li>
                <li>User-friendly website and mobile app</li>
                <li>Secure payment options</li>
                <li>Fast and reliable shipping</li>
                <li>24/7 customer support</li>
            </ul>
        </div>

        {/* Work */}
        <div className="mt-10 max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-xl md:text-2xl">
                Meet the dedicated team behind Velora. Our diverse group of professionals is passionate about delivering the best online shopping experience.
            </p>
        </div>

        {/* Career */}
        <div className="mt-10 max-w-3xl text-center mb-20">
            <h2 className="text-2xl font-semibold mb-4">Careers at Velora</h2>
            <p className="text-xl md:text-2xl">
                Interested in joining our team? Explore career opportunities at Velora and be part of a dynamic and innovative company.
            </p>

            {/* list of available careers */}
            <ul className="list-disc list-inside space-y-2 mt-4 text-xl md:text-2xl">
                <li>Software Engineer</li>
                <li>Product Manager</li>
                <li>Marketing Specialist</li>
                <li>Customer Support Representative</li>
                <li>Logistics Coordinator</li>
            </ul>
        </div>

    </div>
  );
}

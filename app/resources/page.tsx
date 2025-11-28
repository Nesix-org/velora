/*
Resources: this page will talk about Free ebooks, development tutorial, how-to blog, and youtube playlist.
*/ 


export default function ResourcesPage() {
  return (
    <div className="ml-[2rem] min-w-[500px] max-w-7xl md:mx-auto flex flex-col items-center justify-center min-h-screen py-8 bg-bgLemon text-bgWhite px-4 dark:bg-gray-900 dark:text-white rounded-lg">
      <h1 className="text-4xl font-bold mb-6">Resources</h1>
      <div className="mb-4 border-b-4 border-white w-[180px] mx-auto rounded-lg"></div>

      <p className="text-xl text-center max-w-2xl md:text-2xl">
        Welcome to the Velora Resources Center. Here you can find a variety of
        resources including free ebooks, development tutorials, how-to blogs,
        and curated YouTube playlists to help you make the most of our platform.
        Whether you&apos;re a beginner or an experienced user, our resources are
        designed to assist you in your journey with Velora.
      </p>

      {/* Free Ebooks */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Free Ebooks</h2>
        <div className="mb-4 border-b-4 border-white w-[180px] mx-auto rounded-lg"></div>

        <p className="text-xl md:text-2xl">
          Explore our collection of free ebooks covering a wide range of topics
          related to e-commerce, online shopping, and digital marketing.
          Download and read at your convenience.
        </p>
      </div>

      {/* Development Tutorials */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Development Tutorials</h2>
        <div className="mb-4 border-b-4 border-white w-[180px] mx-auto rounded-lg"></div>
        <p className="text-xl md:text-2xl">
          Access step-by-step development tutorials to help you build and
          enhance your online store using Velora. Learn best practices and tips
          from industry experts.
        </p>
      </div>

      {/* How-to Blogs */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">How-to Blogs</h2>
        <div className="mb-4 border-b-4 border-white w-[180px] mx-auto rounded-lg"></div>
        <p className="text-xl md:text-2xl">
          Read our how-to blogs for practical advice and insights on various
          aspects of e-commerce, from setting up your store to optimizing sales
          and customer engagement.
        </p>
      </div>

      {/* YouTube Playlists */}
      <div className="mt-10 max-w-3xl text-center mb-20">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl">YouTube Playlists</h2>
        <div className="mb-4 border-b-4 border-white w-[180px] mx-auto rounded-lg"></div>
        <p className="text-xl md:text-2xl">
          Watch our curated YouTube playlists featuring tutorials, webinars, and
          success stories to help you get the most out of Velora and grow your
          online business.
        </p>
      </div>
    </div>
  );
}   
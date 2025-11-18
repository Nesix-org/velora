export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Velora
        </h1>
        <p className="text-center text-lg mb-4">
          Your modern e-commerce solution
        </p>
        <div className="text-center text-sm text-gray-600">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p>Package Manager: pnpm</p>
        </div>
      </div>
    </main>
  );
}

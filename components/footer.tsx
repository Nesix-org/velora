export default function Footer() {
  return (
    <footer className="w-full py-4 mt-8 border-t bg-bgWhite dark:bg-black">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Velora. All rights reserved.
      </div>
    </footer>
  );
}
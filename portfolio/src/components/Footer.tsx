export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Justin Florence. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

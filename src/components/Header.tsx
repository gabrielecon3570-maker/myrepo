import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MemeHub</h1>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link>
            <Link href="/upload" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Upload</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
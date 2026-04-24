export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">About MemeHub</h1>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Welcome to MemeHub, the ultimate destination for sharing and discovering the funniest memes on the internet!
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Our mission is to bring joy and laughter to people around the world through the power of memes. Whether you&apos;re looking for the latest viral trends or want to share your own creations, MemeHub has you covered.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Join our community and start memeing today!
          </p>
        </div>
      </div>
    </div>
  );
}
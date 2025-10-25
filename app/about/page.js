export const metadata = {
  title: "About - Bitlinks",
  description: "Learn more about Bitlinks, the private URL shortener.",
};

export default function About() {
  return (
    <div className="max-w-3xl mx-auto my-16 p-8 bg-purple-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">About Bitlinks</h1>
      <p className="text-gray-700 mb-3">
        Bitlinks is a simple, private, and fast URL shortener. We value your privacy
        and don't track your links. Our mission is to provide a straightforward
        experience for shortening URLs without the hassle.
      </p>
      <p className="text-gray-700">
        Built with Next.js, MongoDB, and a passion for privacy, Bitlinks helps you
        manage and share links efficiently.
      </p>
    </div>
  );
}

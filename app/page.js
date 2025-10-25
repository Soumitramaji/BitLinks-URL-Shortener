import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bitlinks - Simple & Private URL Shortener",
  description:
    "Shorten your links instantly with Bitlinks — no sign-up, no tracking, just privacy and simplicity.",
};

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-[80vh] flex items-center justify-center">
      <section className="grid md:grid-cols-2 grid-cols-1 w-full max-w-6xl mx-auto px-6 py-12 gap-10 items-center">
        {/* Text Section */}
        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-purple-900">
            The Best URL Shortener in the Market
          </h1>

          <p className="text-gray-700 md:max-w-md">
            We are the most straightforward URL shortener in the world. Unlike
            others, we don’t track you or ask for your details. We value your
            privacy — that’s why we built Bitlinks.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-500 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-purple-600 transition">
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gray-800 rounded-lg shadow-lg px-6 py-2 font-bold text-white hover:bg-gray-900 transition">
                GitHub
              </button>
            </Link>
          </div>
        </div>

      
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]">
          <Image
            className="object-contain mix-blend-darken"
            alt="Vector illustration representing link shortening"
            src="/vector.jpg"
            fill
            priority
          />
        </div>
      </section>
    </main>
  );
}

import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Eliminate Debugging Frustration. Ship Code Faster.</h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">Instantly find, fix, and verify code issues using your personal AI code debugger in a secure sandbox. Stop wasting hours on bugs—start building with confidence.</p>
      <Link href="/documentation" legacyBehavior>
        <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-block">
          Start Debugging Free
        </a>
      </Link>
    </section>
  );
}

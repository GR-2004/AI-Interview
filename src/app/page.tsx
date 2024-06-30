import Image from "next/image";
import Link from "next/link";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <>
    <Header/>
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to AI Mock Interview
          </h1>
          <p className="text-lg mb-8">
            Prepare for your next job interview with our AI-powered mock
            interviews.
          </p>
          <Link
            href="/dashboard"
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Features</h2>
            <p className="text-gray-600 mt-4">
              Discover what makes our AI mock interview platform unique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/ai.png"
                width={64}
                height={64}
                alt="AI Icon"
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">AI-Powered Questions</h3>
              <p className="text-gray-600 mt-2">
                Get tailored interview questions powered by advanced AI
                technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/feedback.png"
                width={64}
                height={64}
                alt="Feedback Icon"
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Real-time Feedback</h3>
              <p className="text-gray-600 mt-2">
                Receive immediate feedback on your answers to improve your
                performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/community.png"
                width={64}
                height={64}
                alt="Community Icon"
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Community Support</h3>
              <p className="text-gray-600 mt-2">
                Join our community of job seekers and experts for support and
                tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to ace your next interview?
          </h2>
          <p className="text-lg mb-8">
            Sign up now and start practicing with our AI-powered mock
            interviews.
          </p>
          <Link
            href="/dashboard/upgrade"
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}

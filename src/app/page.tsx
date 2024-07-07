import Image from "next/image";
import Link from "next/link";
import Header from "./dashboard/_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20">
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
              className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-slate-300 hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold ">Features</h2>
              <p className="text-gray-600 mt-4">
                Discover what makes our AI mock interview platform unique.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
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
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
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
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                &quot;AI Mock Interview helped me land my dream job! The questions
                  were spot-on and the feedback was invaluable.&quot;
                </p>
                <p className="text-blue-500 font-bold">- Jane Doe</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                &quot;A fantastic tool for anyone preparing for interviews. The AI
                  technology is truly impressive.&quot;
                </p>
                <p className="text-blue-500 font-bold">- John Smith</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                &quot;The real-time feedback feature is a game-changer. Highly
                  recommend this platform!&quot;
                </p>
                <p className="text-blue-500 font-bold">- Alice Johnson</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/sign-up.webp"
                  width={64}
                  height={64}
                  alt="Step 1 Icon"
                  className="mx-auto"
                />
                <h3 className="text-xl font-bold mt-4">Step 1: Sign Up</h3>
                <p className="text-gray-600 mt-2">
                  Create your account to get started.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/ai-interview.jpg"
                  width={64}
                  height={64}
                  alt="Step 2 Icon"
                  className="mx-auto"
                />
                <h3 className="text-xl font-bold mt-4">
                  Step 2: Take Mock Interviews
                </h3>
                <p className="text-gray-600 mt-2">
                  Practice with AI-generated questions and get real-time
                  feedback.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/success.png"
                  width={100}
                  height={100}
                  alt="Step 3 Icon"
                  className="mx-auto"
                />
                <h3 className="text-xl font-bold mt-4">
                  Step 3: Improve and Succeed
                </h3>
                <p className="text-gray-600 mt-2">
                  Use the feedback to improve and ace your interviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing</h2>
            <p className="text-gray-600 mb-8">
              Choose a plan that fits your needs and start practicing today.
            </p>
            <Link
              href="/dashboard/upgrade"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:text-blue-500 hover:bg-white"
            >
              View Pricing Plans
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="text-gray-600 mt-4">
                Find answers to the most commonly asked questions about our
                platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mt-4">
                  What is AI Mock Interview?
                </h3>
                <p className="text-gray-600 mt-2">
                  AI Mock Interview is a platform that helps you prepare for job
                  interviews with AI-generated questions and real-time feedback.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mt-4">How does it work?</h3>
                <p className="text-gray-600 mt-2">
                  Sign up, take mock interviews with AI-generated questions, and
                  receive real-time feedback to improve your performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mt-4">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600 mt-2">
                  Yes, we offer a free trial so you can experience our platform
                  before committing to a plan.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mt-4">
                  How can I contact support?
                </h3>
                <p className="text-gray-600 mt-2">
                  You can contact our support team via email at
                  support@aimockinterview.com.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">
                  Comprehensive Question Bank
                </h3>
                <p className="text-gray-600 mt-2">
                  Our platform features a vast array of questions tailored to
                  various job roles and industries.
                </p>
              </div>
              <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Expert Feedback</h3>
                <p className="text-gray-600 mt-2">
                  Get insights from industry experts to refine your answers and
                  improve your interview skills.
                </p>
              </div>
              <div className="bg-white text-blue-500 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">Success Stories</h3>
                <p className="text-gray-600 mt-2">
                  Join thousands of successful candidates who have landed their
                  dream jobs with our help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6 text-center">
            <p>
              &copy; {new Date().getFullYear()} AI Mock Interview. All rights
              reserved.
            </p>
            <div className="mt-4">
              <Link
                href="/about"
                className="text-gray-400 hover:text-white mx-2"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white mx-2"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white mx-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

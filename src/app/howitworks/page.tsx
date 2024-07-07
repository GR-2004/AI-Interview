import React from "react";
import Header from "../dashboard/_components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBook,
  faRobot,
  faChartBar,
  faArrowUp,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const HowItWorksPage = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold mb-10 text-purple-600 text-center pt-8">
          How It Works
        </h1>
        <div className="space-y-6 max-w-2xl w-full mb-8">
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faBriefcase}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 1:
                </strong>{" "}
                Select Your Goal
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Choose from a variety of career paths tailored to your goals. Our platform offers guidance for diverse fields, ensuring personalized preparation.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faBook}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 2:
                </strong>{" "}
                Prepare with AI-Generated Questions
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Access a comprehensive library of AI-generated interview questions, customized to your selected career path to enhance your readiness.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faRobot}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 3:
                </strong>{" "}
                Practice Mock Interviews
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Engage in realistic mock interviews with our AI. Practice answering questions in a simulated interview environment to build confidence.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faChartBar}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 4:
                </strong>{" "}
                Get Feedback and Improve
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Receive detailed feedback on your performance. Identify areas for improvement and refine your interview skills based on AI-driven insights.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faArrowUp}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 5:
                </strong>{" "}
                Track Your Progress
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Monitor your improvement over time with our progress tracking tools. See how your skills evolve and stay motivated as you reach your goals.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 hover:bg-purple-600 group">
            <FontAwesomeIcon
              icon={faComments}
              height={40}
              width={40}
              className="text-purple-600 text-2xl group-hover:text-white transition duration-300"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-white transition duration-300">
                <strong className="text-purple-600 group-hover:text-white transition duration-300">
                  STEP 6:
                </strong>{" "}
                Get Expert Advice
              </h2>
              <p className="text-gray-600 group-hover:text-white transition duration-300">
                Access personalized advice from industry experts. Get tips and strategies to excel in your interviews and advance your career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorksPage;

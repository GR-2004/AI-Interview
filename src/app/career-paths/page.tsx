import React from "react";
import Header from "../dashboard/_components/Header";
import { carrerData } from "@/utils/carrerData";

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">
        <div className="p-10 text-center">
          <h2 className="font-bold text-purple-600 text-4xl mb-4">
            Career Paths
          </h2>
          <p className="text-gray-500 text-lg">
            Explore diverse career paths with our AI-powered interview mocker.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
          {carrerData.map((path) => (
            <div
              key={path.id}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl text-purple-600 font-semibold mb-2">
                {path.title}
              </h2>
              <p className="text-gray-700 mb-4">{path.description}</p>
              <div className="space-y-2">
                {path.roles.map((role) => (
                  <div
                    key={role.id}
                    className="p-4 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

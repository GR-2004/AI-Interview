import React from "react";
import Header from "../dashboard/_components/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {carrerData} from "@/utils/carrerData"

const data = [
  {
    id: 0,
    title: "Web Development",
  },
  {
    id: 1,
    title: "App Development",
  },
  {
    id: 2,
    title: "Data Science",
  },
  {
    id: 3,
    title: "AI Ml",
  },
  {
    id: 4,
    title: "Cybersecurity",
  },
  {
    id: 5,
    title: "Networking",
  },
  {
    id: 6,
    title: "Database Management",
  },
  {
    id: 7,
    title: "Product Management",
  },
  {
    id: 8,
    title: "Quality Assurance",
  },
  {
    id: 9,
    title: "Technical Writing",
  },
  {
    id: 10,
    title: "Project Management",
  },
  {
    id: 11,
    title: "Entrepreneurship",
  },
  {
    id: 12,
    title: "Academia and Research",
  },
];

const page = () => {
  return (
    <>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">
        <div className="p-10">
          <h2 className="font-bold text-purple-600 text-2xl text-center">
            Questions
          </h2>
          <h2 className="text-gray-500 text-center">
            Prepare for any interview with our diverse question categories.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {
            data.map((res) => (
            <div key={res.id} className="border shadow-sm rounded-lg p-3">
              <Link href={`/questions/${res.title}`}>
                <h1 className="text-lg text">{res.title}</h1>
              </Link>
            </div>))
          }          
        </div>
      </div>
    </>
  );
};

export default page;

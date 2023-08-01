"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaSpellCheck } from "react-icons/fa";
const Navbar = () => {
  //  function handleQuiz() {
  //     console.log("hi")
  //     return <Link href="/save">save</Link>
  //   }
  return (
    <div className="flex-row ">
      <div className="fixed top-0 z-50 flex justify-between w-full h-20 mx-auto shadow-md bg-white/80">
        <div className="flex justify-between w-5/6 mx-auto">
          <div className="flex items-center font-bold ">
            <div className="">
              <FaSpellCheck />
            </div>
            <h3>Trivia Master</h3>
          </div>
          <div className="flex items-center font-bold">
            <h3>How it Works</h3>
          </div>
        </div>
      </div>
      <div className="flex w-4/6 mx-auto mt-14">
        <p className="mx-auto mt-10 mb-10 text-6xl text-blue-600 ">
          Welcome to Trivia Master
        </p>
      </div>
      <div className="flex w-4/6 mx-auto">
        <p className="mx-auto text-center font-extralight">
          Users can dynamically generate MCQs based on their selected
          preferences, making the website adaptable to various subjects
          ,categories and difficulty level and upon completing the quiz, users
          receive instantresults, offering valuable feedback on their
          performance.
        </p>
      </div>

      <div className="flex justify-center mt-5 mb-5">
        <Link href="/save">
          <button className="flex py-4 mx-auto font-semibold text-white bg-blue-600 rounded-md px-14 hover:bg-blue-700">Start the quiz</button>
        </Link>
      </div>
      <div className="flex mx-auto mt-4 ">
        <Image
          className="mx-auto"
          src={"/quiz.png"}
          alt="Picture of the author"
          width={800}
          height={600}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
};

export default Navbar;

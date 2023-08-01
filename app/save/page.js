"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import ProgressBar from "../progressBar";
const result = [
  {
    text: "What is frontend development?",

    answer: {
      correctOptions: {
        option: [4],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "Back-end development",
        },
        {
          id: 2,
          content: "Full-stack development",
        },
        {
          id: 3,
          content: "Database administration",
        },
        {
          id: 4,
          content:
            "The practice of building user interfaces for websites and applications",
        },
      ],
    },
  },
  {
    text: "What are some popular frontend development frameworks?",
    answer: {
      correctOptions: {
        option: [2, 3, 4],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "Angular",
        },
        {
          id: 2,
          content: "React",
        },
        {
          id: 3,
          content: "Vue.js",
        },
        {
          id: 4,
          content: "jQuery",
        },
      ],
    },
  },
  {
    text: "What programming languages are commonly used in frontend development?",
    answer: {
      correctOptions: {
        option: [1, 3, 4],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "HTML",
        },
        {
          id: 2,
          content: "Python",
        },
        {
          id: 3,
          content: "JavaScript",
        },
        {
          id: 4,
          content: "CSS",
        },
      ],
    },
  },
  {
    text: "What is the role of a frontend developer?",
    answer: {
      correctOptions: {
        option: [2],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "Designing databases",
        },
        {
          id: 2,
          content: "Creating and implementing user interfaces",
        },
        {
          id: 3,
          content: "Managing server infrastructure",
        },
        {
          id: 4,
          content: "Writing backend code",
        },
      ],
    },
  },
  {
    text: "What is responsive web design?",
    answer: {
      correctOptions: {
        option: [3],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "The process of optimizing a website for search engines",
        },
        {
          id: 2,
          content: "The practice of securing web applications",
        },
        {
          id: 3,
          content:
            "Designing websites to adapt to different screen sizes and devices",
        },
        {
          id: 4,
          content: "The process of improving website performance",
        },
      ],
    },
  },
  {
    text: "What is the purpose of using CSS in frontend development?",
    answer: {
      correctOptions: {
        option: [2],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "To define the functionality of a website",
        },
        {
          id: 2,
          content: "To style the appearance of a website",
        },
        {
          id: 3,
          content: "To handle server-side logic",
        },
        {
          id: 4,
          content: "To interact with databases",
        },
      ],
    },
  },
  {
    text: "What is the purpose of using JavaScript in frontend development?",
    answer: {
      correctOptions: {
        option: [1],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "To add interactivity and dynamic behavior to a website",
        },
        {
          id: 2,
          content: "To define the structure of a website",
        },
        {
          id: 3,
          content: "To handle server-side operations",
        },
        {
          id: 4,
          content: "To manage databases",
        },
      ],
    },
  },
  {
    text: "What is the purpose of using HTML in frontend development?",
    answer: {
      correctOptions: {
        option: [3],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "To style the appearance of a website",
        },
        {
          id: 2,
          content: "To add interactivity to a website",
        },
        {
          id: 3,
          content: "To define the structure and content of a website",
        },
        {
          id: 4,
          content: "To handle server-side operations",
        },
      ],
    },
  },
  {
    text: "What is the purpose of using version control systems in frontend development?",
    answer: {
      correctOptions: {
        option: [4],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "To manage server infrastructure",
        },
        {
          id: 2,
          content: "To handle server-side operations",
        },
        {
          id: 3,
          content: "To define the functionality of a website",
        },
        {
          id: 4,
          content: "To track changes and collaborate on code development",
        },
      ],
    },
  },
  {
    text: "What is the purpose of using frontend development tools like Webpack and Babel?",
    answer: {
      correctOptions: {
        option: [1],
      },
    },
    options: {
      option: [
        {
          id: 1,
          content: "To optimize and compile frontend code",
        },
        {
          id: 2,
          content: "To manage server infrastructure",
        },
        {
          id: 3,
          content: "To handle server-side operations",
        },
        {
          id: 4,
          content: "To define the appearance of a website",
        },
      ],
    },
  },
];
const newArr = result.map((item, i) => ({
  ...item,
  response: "",
}));

const array = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

export default function Home() {
  const [res, setRes] = useState(0);
  const [col, setCol] = useState("bg-orange-200");
  const [checked, setChecked] = useState(false);
  const [ind, setInd] = useState(1);

  const [sIndex, setSIndex] = useState(0);
  const [eIndex, setEIndex] = useState(1);
  const [selected, setSelected] = useState(null);
  const [store, setStore] = useState([...result].slice(sIndex, eIndex));
  const [progress, setProgress] = useState(10);

  // useEffect(() => {

  //     setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0));

  // }, [ind]);

  function handleCheck(item, itemC, itemR, it) {
    setSelected(it);
    newArr[ind - 1].response = it.content;
    console.log("item", it);
    console.log("hC", itemC);
    console.log("hR ", itemR);

    if (itemC === itemR) {
      array[ind - 1] = true;
    } else {
      array[ind - 1] = false;
    }
  }
  console.log("newArr", newArr);
  console.log("selected", selected);
  console.log("array", array);

  function handleResult() {
    let cnt = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === true) {
        cnt = cnt + 1;

        console.log("cnt", cnt);
      }
    }
    let ans = (cnt / 10) * 100;
    setRes(ans);
  }
  function handleNext() {
    if (progress > 0 && progress < 100) {
      setProgress(progress + 10);
    }
    console.log("next", ind, ind + 1);

    setSIndex(ind);
    setEIndex(ind + 1);
    if (ind > 0 && ind < 10) {
      setInd(ind + 1);
    }
  }

  console.log("ind", ind);
  function handlePrev() {
    if (progress > 0 && progress < 100) {
      setProgress(progress - 10);
    }

    if (ind > 0 && ind < 10) {
      setInd(ind - 1);
    }
    setSIndex(ind - 2);
    setEIndex(ind - 1);
  }

  return (
    <div className="flex h-screen pb-2 bg-slate-50">
      <div className="flex-row items-center justify-center w-8/12 mx-auto mt-8 rounded-lg justify-items-center ">
        <div className="flex items-center justify-between ml-4 ">
          <p className="font-bold text-yellow-600 "> Questions {ind}/10</p>
          <div className="p-4 ">
            <ProgressBar progress={progress} />
          </div>
          <div className="flex items-center ">
            <button className="flex items-center justify-center w-20 h-8 font-bold text-white transition duration-300 ease-in-out delay-150 bg-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 rounded-xl " onClick={handleResult}>Submit </button>
            
          </div>
        </div>
        <div className="flex ">
          {[...newArr].slice(sIndex, eIndex).map((item, i) => {
            return (
              <div className="flex-row items-center mb-4 " key={i}>
                <p className="h-16 mt-4 ml-4 text-3xl font-semibold ">
                  {item.text}
                </p>
                {item.options.option.map((it, index) => {
                  return (
                    <div
                      onClick={() =>
                        handleCheck(
                          item,
                          it.id,
                          item.answer.correctOptions.option[0],
                          it
                        )
                      }
                      className={
                        newArr[ind - 1].response == it.content
                          ? " flex rounded-2xl     items-center text-white  h-28  mt-5  bg-indigo-400"
                          : " transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-indigo-100 mt-5 rounded-2xl  h-28 flex items-center "
                      }
                      key={index}
                    >
                      <div
                        className={
                          newArr[ind - 1].response == it.content
                            ? "  w-7   ml-3 mr-3 h-7 min-w-[28px] border-x-4 border-y-4 rounded-full border   bg-indigo-400 border-white "
                            : "  ml-2 mr-2 w-7 h-7 min-w-[28px]  rounded-full  border   border-black "
                        }
                      ></div>
                      <p className="ml-2 text-xl ">{it.content}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="flex justify-between">
            <button
              className="px-10 py-4 mb-2 text-xl font-semibold text-white bg-indigo-400 rounded-2xl"
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="px-10 py-4 mb-2 text-xl font-semibold text-white bg-indigo-400 rounded-2xl"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

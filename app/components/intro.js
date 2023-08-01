import React from "react";
const data = [
  {
    title: "Create an account",
    content:
      "Create your free account on Expensasaurus by providing your basic details. It only takes a few minutes to get started.",
  },
  {
    title: "Set your topic",
    content: "Select your topic according to your need ",
  },
  {
    title: "Result Generation",
    content:
      "Upon completing the quiz, users receive instant results, offering valuable feedback on their performance.",
  },
  {
    title: "Dynamic MCQs",
    content:
      "Users can dynamically generate MCQs based on their selected preferences, making the website adaptable to various subjects and categories and also they can set the difficulty level",
  },
  {
    title: "Multilingual",
    content:
      "User can give quiz in multi languages such as English, Hindi,German,,French etc",
  },
];
const Intro = () => {
  return (
    <div className="w-full ">
      <div className="flex mx-auto mt-5 mb-5 ">
        <p className="mx-auto font-semibold text-xls">How it works</p>
      </div>
      <div className="w-5/6 mx-auto">
        {data.map((item, index) => {
          return (
            <div id={index} className="w-1/2 ">
              <div className="mb-4 ">
                <div>
                  <p className="text-2xl ">{item.title}</p>
                </div>
                <div>
                  <p className="font-light ">{item.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Intro;

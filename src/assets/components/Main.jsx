import React from "react";
import reactionIcon from "../images/icon-reaction.svg";
import memoryIcon from "../images/icon-memory.svg";
import verbalIcon from "../images/icon-verbal.svg";
import visualIcon from "../images/icon-visual.svg";

function Main() {
  return (
    <div className="main">
      <div className="content">
        <div className="content__left">
          <h1>Your Result</h1>
          <div className="circle">
            <h1 className="text-[60px]">76</h1>
            <p>of 100</p>
          </div>
          <h1>Great</h1>
          <p className="result-text px-14 text-center">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="content__right">
          <p className="text-start w-full m-[8px] pl-[12px] text-[1.25rem]">
            Summary
          </p>
          <div
            className="flex flex-row justify-between  items-center p-[1.25rem] w-[300px] rounded-[1rem] m-[8px]"
            style={{
              background: "hsl(0, 100%, 95%",
              color: "hsl(0, 100%, 67%)",
            }}
          >
            <div className="flex flex-row  items-center space-x-2">
              <img src={reactionIcon} alt="" />
              <p className="text-hsl(0, 100%, 95%) text-[1.25rem]">Reaction</p>
            </div>
            <p className="text-black text-[1rem]">
              80 / <span className="text-gray-400">100</span>
            </p>
          </div>
          <div
            className="flex flex-row justify-between  items-center p-[1.25rem] w-[300px] rounded-[1rem] m-[8px]"
            style={{
              background: "hsl(39, 100%, 95%)",
              color: "hsl(39, 100%, 56%)",
            }}
          >
            <div className="flex flex-row  items-center space-x-2">
              <img src={memoryIcon} alt="" />
              <p className="text-hsl(0, 100%, 95%) text-[1.25rem]">Memory</p>
            </div>
            <p className="text-black text-[1rem]">
              92 / <span className="text-gray-400">100</span>
            </p>
          </div>
          <div
            className="flex flex-row justify-between  items-center p-[1.25rem] w-[300px] rounded-[1rem] m-[8px]"
            style={{
              background: "hsl(166, 100%, 95%)",
              color: "hsl(166, 100%, 37%)",
            }}
          >
            <div className="flex flex-row  items-center space-x-2">
              <img src={verbalIcon} alt="" />
              <p className="text-hsl(0, 100%, 95%) text-[1.25rem]">Verbal</p>
            </div>
            <p className="text-black text-[1rem]">
              61 / <span className="text-gray-400">100</span>
            </p>
          </div>
          <div
            className="flex flex-row justify-between  items-center p-[1.25rem] w-[300px] rounded-[1rem] m-[8px]"
            style={{
              background: "hsl(234, 85%, 95%)",
              color: "hsl(234, 85%, 45%)",
            }}
          >
            <div className="flex flex-row  items-center space-x-2">
              <img src={visualIcon} alt="" />
              <p className="text-hsl(0, 100%, 95%) text-[1.25rem]">Visual</p>
            </div>
            <p className="text-black text-[1rem]">
              61 / <span className="text-gray-400">100</span>
            </p>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

import { useState } from "react";
import SmallSideBar from "../Body/SmallSideBar";
import Sidebar from "../Body/Sidebar";
import { useSelector } from "react-redux";
import ButtonList from "../Body/ButtonList";

const Results = () => {
  const showSideBar = useSelector((store) => store?.app?.showSideBar);
  return (
    <div className="">
      {showSideBar ? (
        <div className="w-72 top-12 h-screen fixed ml-1 overflow-y-scroll hide-scrollbar hover:thin-scrollbar">
          <Sidebar />{" "}
        </div>
      ) : (
        <div className="w-32 top-12 h-screen static fixed  overflow-y-scroll hide-scrollbar">
          <SmallSideBar />{" "}
        </div>
      )}
      {showSideBar ? (
        <div className="ml-80 mt-16 flex overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
      ) : (
        <div className="ml-36 mt-16 flex overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
      )}
      {showSideBar ? (
        <div className="w-full bg-red-300 h-24 ml-80 mt-4"> </div>
      ) : (
        <div className="w-full bg-red-300 h-24 ml-36 mt-4">hello</div>
      )}
    </div>
  );
};

export default Results;

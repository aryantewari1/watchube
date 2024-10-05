import { useEffect, useState } from "react";
import SmallSideBar from "../Body/SmallSideBar";
import Sidebar from "../Body/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import ButtonList from "../Body/ButtonList";
import { YOUTUBE_LIST_API } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";
import { addResultsVideo } from "../../store/Slices/resultsSlice";

const apiKey = process.env.REACT_APP_YTUBE_API_KEY;

const Results = () => {
  const dispatch = useDispatch();
  const showSideBar = useSelector((store) => store?.app?.showSideBar);
  const [queryData] = useSearchParams();
  const query = queryData.get("search_query");
  console.log(query);

  useEffect(() => {
    handleSearchRequest();
  }, []);
  const handleSearchRequest = async () => {
    const data = await fetch(YOUTUBE_LIST_API + query + "&key=" + apiKey);
    const json = await data.json();
    dispatch(addResultsVideo(json?.items));
    console.log(json);
  };
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
      <div></div>
    </div>
  );
};

export default Results;

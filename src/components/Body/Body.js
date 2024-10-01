import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import SmallSideBar from "./SmallSideBar";
import ButtonList from "./ButtonList";

const Body = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div className="">
      {showSideBar ? (
        <div className="w-60 top-12 h-screen fixed  overflow-y-scroll hide-scrollbar hover:thin-scrollbar">
          <Sidebar />{" "}
        </div>
      ) : (
        <div className="w-28 top-12 h-screen fixed  overflow-y-scroll hide-scrollbar">
          <SmallSideBar />{" "}
        </div>
      )}
      {showSideBar ? (
        <div className="ml-64 mt-16 flex overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
      ) : (
        <div className="ml-36 mt-16 ">
          <ButtonList />
        </div>
      )}
      {showSideBar ? (
        <div className="ml-64 mt-8  min-h-screen overflow-y-auto">
          <VideoContainer />
        </div>
      ) : (
        <div className="ml-36 mt-8 min-h-screen overflow-y-auto">
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default Body;

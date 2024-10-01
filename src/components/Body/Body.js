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
        <div className="w-52 top-12 h-screen fixed  overflow-y-scroll hide-scrollbar hover:thin-scrollbar">
          <Sidebar />{" "}
        </div>
      ) : (
        <div className="w-20 top-12 h-screen fixed  overflow-y-scroll hide-scrollbar">
          <SmallSideBar />{" "}
        </div>
      )}
      {showSideBar ? (
        <div className="ml-56 mt-16 flex overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
      ) : (
        <div className="ml-24 mt-16 flex overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
      )}

      {showSideBar ? (
        <div className="ml-56 mt-4 min-h-screen overflow-y-auto grid grid-cols-4 gap-y-8">
          <VideoContainer />
        </div>
      ) : (
        <div className="ml-24 mt-4 min-h-screen overflow-y-auto grid grid-cols-4 gap-y-8">
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default Body;

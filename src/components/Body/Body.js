import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import SmallSideBar from "./SmallSideBar";

const Body = () => {
  const showSideBar = useSelector((store) => store.app.showSideBar);
  return (
    <div className="flex">
      {showSideBar ? (
        <div className="w-64 top-16 h-screen fixed overflow-y-auto overflow-y-scroll">
          <Sidebar />{" "}
        </div>
      ) : (
        <div className="w-28 top-16 h-screen fixed overflow-y-auto overflow-y-scroll">
          <SmallSideBar />{" "}
        </div>
      )}

      {showSideBar ? (
        <div className="ml-64 mt-16 w-full min-h-screen overflow-y-auto">
          <VideoContainer />
        </div>
      ) : (
        <div className="ml-28 mt-16 w-full min-h-screen overflow-y-auto">
          <VideoContainer />
        </div>
      )}
    </div>
  );
};

export default Body;

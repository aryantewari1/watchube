import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      {/* Sidebar: fixed to the left */}
      <div className="w-64 top-16 h-screen fixed overflow-y-auto overflow-y-scroll">
        <Sidebar />
      </div>

      {/* VideoContainer: placed beside the Sidebar */}
      <div className="ml-64 mt-16 w-full min-h-screen overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;

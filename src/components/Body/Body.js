import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";

const Body = () => {
  return (
    <div className="flex">
      {/* Sidebar: fixed to the left */}
      <Sidebar />

      {/* VideoContainer: placed beside the Sidebar */}
      <div className="ml-64 mt-16 w-full h-screen overflow-y-auto">
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;

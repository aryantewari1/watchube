import ButtonList from "../Body/ButtonList";
import LiveContainer from "./LiveContainer";
import VideoList from "./VideoList";

const RightContainer = () => {
  return (
    <div className="flex flex-col">
      <div>
        <LiveContainer />
      </div>
      <div className="w-96">
        <div className="overflow-x-scroll hide-scrollbar">
          <ButtonList />
        </div>
        <VideoList />
      </div>
    </div>
  );
};

export default RightContainer;

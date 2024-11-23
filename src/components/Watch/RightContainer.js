import ButtonList from "../Body/ButtonList";
import VideoList from "./VideoList";

const RightContainer = () => {
  return (
    <div className="overflow-x-scroll hide-scrollbar w-96">
      <div className="overflow-x-scroll hide-scrollbar">
        <ButtonList />
      </div>
      <VideoList />
    </div>
  );
};

export default RightContainer;

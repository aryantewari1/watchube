import ButtonList from "../Body/ButtonList";
import VideoList from "./VideoList";

const RightContainer = () => {
  return (
    <div className="overflow-x-scroll hide-scrollbar w-96">
      <ButtonList />
      <VideoList />
    </div>
  );
};

export default RightContainer;

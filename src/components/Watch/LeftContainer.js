import CommentListContainer from "./CommentListContainer";
import VideoInfo from "./VideoInfo";

const LeftContainer = () => {
  return (
    <div className="ml-24 flex flex-col">
      <div>
        <VideoInfo />
      </div>
      <div>
        <div className="">
          <CommentListContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;

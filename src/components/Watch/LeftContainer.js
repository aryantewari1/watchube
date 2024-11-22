import CommentListContainer from "./CommentListContainer";
import VideoInfo from "./VideoInfo";
import { comments } from "../../utils/constant";
const LeftContainer = () => {
  return (
    <div className="ml-24 flex flex-col">
      <div>
        <VideoInfo />
      </div>
      <div>
        <div className="">
          <CommentListContainer commentsList={comments} />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;

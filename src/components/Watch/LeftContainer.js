import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";

const LeftContainer = () => {
  return (
    <div className="ml-24">
      <div>
        <VideoInfo />
      </div>
      <div></div>
    </div>
  );
};

export default LeftContainer;

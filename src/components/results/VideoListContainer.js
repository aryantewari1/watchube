import { useSelector } from "react-redux";
import VideoListCard from "./VideoListCard";

const VideoListContainer = () => {
  const videos = useSelector((store) => store?.results);

  if (videos.length === 0) return;
  return (
    <div className="w-full">
      {videos.map((video) => {
        return <VideoListCard data={video} />;
      })}
    </div>
  );
};

export default VideoListContainer;

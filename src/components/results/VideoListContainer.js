import { useSelector } from "react-redux";
import VideoListCard from "./VideoListCard";
import { Link } from "react-router-dom";

const VideoListContainer = () => {
  const videos = useSelector((store) => store?.results);

  if (videos.length === 0) return;
  return (
    <div className="w-full">
      {videos.map((video) => {
        return (
          <Link to={"/watch?v=" + video?.id?.videoId}>
            <VideoListCard data={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoListContainer;

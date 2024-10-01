import useYtubeVideo from "../../hooks/useYtubeVideo";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const videos = useSelector((store) => store.app.videos);
  useYtubeVideo();
  if (videos.length === 0) return;
  return (
    <>
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </>
  );
};

export default VideoContainer;

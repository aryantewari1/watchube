import useYtubeVideo from "../../hooks/useYtubeVideo";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videos = useSelector((store) => store.app.videos);
  useYtubeVideo();
  if (videos.length === 0) return;
  return (
    <>
      {videos.map((video) => {
        const maxresUrl = video.snippet.thumbnails?.maxres?.url;
        if (!maxresUrl) {
          return null;
        }

        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </>
  );
};

export default VideoContainer;

import useYtubeVideo from "../../hooks/useYtubeVideo";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import SmallVideoCard from "./SmallVideoCard";

const VideoContainer = () => {
  useYtubeVideo();
  const showSideBar = useSelector((store) => store?.app?.showSideBar);
  const videos = useSelector((store) => store.app.videos);

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
            {showSideBar ? (
              <VideoCard info={video} />
            ) : (
              <SmallVideoCard info={video} />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default VideoContainer;

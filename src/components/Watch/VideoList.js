import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import useYtubeVideo from "../../hooks/useYtubeVideo";
import { Link } from "react-router-dom";

const VideoList = () => {
  useYtubeVideo();
  const videos = useSelector((store) => store?.app?.videos);
  if (videos.length === 0) return;
  console.log(videos);
  return (
    <div className="mt-3">
      {videos.map((video) => (
        <Link to={"?v=" + video.id} key={video.id}>
          <ListCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoList;

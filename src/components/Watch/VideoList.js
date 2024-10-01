import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import useYtubeVideo from "../../hooks/useYtubeVideo";

const VideoList = () => {
  useYtubeVideo();
  const videos = useSelector((store) => store?.app?.videos);
  if (videos.length === 0) return;
  console.log(videos);
  return (
    <div className="mt-3">
      {videos.map((video) => (
        <ListCard info={video} />
      ))}
    </div>
  );
};

export default VideoList;

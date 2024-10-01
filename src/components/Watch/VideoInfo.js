import { useSelector } from "react-redux";
import useVideoInfo from "../../hooks/useVideoInfo";

const VideoInfo = () => {
  const video = useSelector((store) => store?.app?.video);

  const id = useVideoInfo();
  console.log(video);
  if (video === null) return;
  const { snippet, statistics } = video;
  console.log(snippet);
  return (
    <div>
      <div>
        <iframe
          className="rounded-xl"
          width="900"
          height="520"
          src={"https://www.youtube.com/embed/" + id + "?si=omhLtyHZuz1HGj6x"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-2 w-11/12">
        <p className="font-[Roboto] text-xl font-bold">{snippet?.title}</p>
      </div>
    </div>
  );
};

export default VideoInfo;

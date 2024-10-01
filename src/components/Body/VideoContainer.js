import { useEffect } from "react";
import { YOUTUBE_API } from "../../utils/constant";

const VideoContainer = () => {
  const apiKey = process.env.REACT_APP_YTUBE_API_KEY;
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_API + apiKey);
    const json = await data.json();
    console.log(json);
  };
  return <div className="flex-[10] bg-slate-200">VideoContainer</div>;
};

export default VideoContainer;

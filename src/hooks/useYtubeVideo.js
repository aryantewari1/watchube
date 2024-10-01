import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setVideos } from "../store/Slices/appSlice";
import { YOUTUBE_API } from "../utils/constant";

const useYtubeVideo = () => {
  const dispatch = useDispatch();
  const apiKey = process.env.REACT_APP_YTUBE_API_KEY;
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_API + apiKey);
    const json = await data.json();
    console.log(json);
    dispatch(setVideos(json.items));
  };
};

export default useYtubeVideo;

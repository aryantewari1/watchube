import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setVideo } from "../store/Slices/appSlice";

const useVideoInfo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const apiKey = process.env.REACT_APP_YTUBE_API_KEY;
  useEffect(() => {
    getVideo();
  }, []);
  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + "id=" + id + "&key=" + apiKey);
    const json = await data.json();
    console.log(json);
    dispatch(setVideo(json.items?.[0]));
  };

  return id;
};

export default useVideoInfo;

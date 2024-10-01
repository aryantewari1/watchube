import homeLogo from "./sidebar images/home.png";
import shortsLogo from "./sidebar images/movie-media-player-icon.png";
import subscriptionLogo from "./sidebar images/playlist-videos-icon.png";
import videoLogo from "./sidebar images/play-round-icon.png";

const SmallSideBar = () => {
  return (
    <div className="mx-auto py-8 pr-3 bg-white">
      <div className="flex flex-col justify-center items-center pb-6 ">
        <img src={homeLogo} className="w-6 h-6 object-contain  mb-3" />
        <p className="text-center text-xs font-[Roboto]">Home</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-6">
        <img src={shortsLogo} className="w-6 h-6 object-contain mb-3 " />
        <p className="text-center text-xs font-[Roboto]">Shorts</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-6">
        <img src={subscriptionLogo} className="w-6 h-6 object-contain  mb-3" />
        <p className="text-center text-xs font-[Roboto]">Subscriptions</p>
      </div>
      <div className="flex flex-col justify-center items-center b-6">
        <img src={videoLogo} className="w-6 h-6 object-contain  mb-3" />
        <p className="text-center text-xs font-[Roboto]">You</p>
      </div>
    </div>
  );
};

export default SmallSideBar;

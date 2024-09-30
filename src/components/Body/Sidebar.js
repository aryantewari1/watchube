import SidebarContainer from "./SidebarContainer";
import homeLogo from "./sidebar images/home.png";
import shortsLogo from "./sidebar images/play-round-icon.png";
import subscriptionLogo from "./sidebar images/movie-media-player-icon.png";
import userLogo from "./sidebar images/male-icon.png";
import historyLogo from "./sidebar images/history-icon.png";
import playlistLogo from "./sidebar images/playlist-videos-icon.png";
import videoLogo from "./sidebar images/play-round-icon.png";
import watchLaterLogo from "./sidebar images/timer-icon.png";
import likeLogo from "./sidebar images/thumbs-up-black-icon.png";
import trendingLogo from "./sidebar images/trending.png";
import shoppingLogo from "./sidebar images/shopping.png";
import musicLogo from "./sidebar images/music-icon.png";
import filmsLogo from "./sidebar images/video-roll-icon.png";
import liveLogo from "./sidebar images/base-station-icon.png";
import gamingLogo from "./sidebar images/gamepad-icon.png";
import newsLogo from "./sidebar images/newspaper-icon.png";
import sportsLogo from "./sidebar images/spotlight-icon.png";
import fashionLogo from "./sidebar images/spotlight-icon.png";
import podcastLogo from "./sidebar images/podcast-line-icon.png";
import youtubeLogo from "./sidebar images/youtube-color-icon.png";
import studioLogo from "./sidebar images/play-round-icon.png";
import audioLogo from "./sidebar images/audio-tune-icon.png";
import kidsLogo from "./sidebar images/child-boy-icon.png";
import settingsLogo from "./sidebar images/setting-line-icon.png";
import reportLogo from "./sidebar images/pencil-icon.png";
import helpLogo from "./sidebar images/question-mark-round-icon.png";
import feedBackLogo from "./sidebar images/complaint-icon.png";
const heading = [
  {
    key: 1,
    heading: null,
    imageList: [homeLogo, shortsLogo, subscriptionLogo],
    titleList: ["Home", "Shorts", "Subscriptions"],
  },
  {
    key: 2,
    heading: "You >",
    imageList: [
      userLogo,
      historyLogo,
      playlistLogo,
      videoLogo,
      watchLaterLogo,
      likeLogo,
    ],
    titleList: [
      "Your channel",
      "History",
      "Playlists",
      "Your videos",
      "Your courses",
      "Watch Later",
      "Liked videos",
    ],
  },
  {
    key: 3,
    heading: "Subscriptions",
    imageList: [],
    titleList: [],
  },
  {
    key: 4,
    heading: "Explore",
    imageList: [
      trendingLogo,
      shoppingLogo,
      musicLogo,
      filmsLogo,
      liveLogo,
      gamingLogo,
      newsLogo,
      sportsLogo,
      fashionLogo,
      podcastLogo,
    ],
    titleList: [
      "Trending",
      "Shopping",
      "Music",
      "Films",
      "Live",
      "Gaming",
      "News",
      "Sports",
      "Fashion & Beauty",
      "Podcasts",
    ],
  },
  {
    key: 5,
    heading: "More from Watchube",
    imageList: [youtubeLogo, studioLogo, audioLogo, kidsLogo],
    titleList: [
      "Watchube Premium",
      "Watchube Studio",
      "Watchube Music",
      "Watchube kids",
    ],
  },
  {
    key: 6,
    heading: null,
    imageList: [settingsLogo, reportLogo, helpLogo, feedBackLogo],
    titleList: ["Settings", "Report History", "Help", "Send feedback"],
  },
];
const Sidebar = () => {
  return (
    <div className="pb-20">
      <div>
        {heading.map((data) => (
          <SidebarContainer key={data.key} section={data} />
        ))}
      </div>
      <div className="w-3/4 mx-auto">
        <div className="text-sm font-[Roboto] text-gray-400 py-4">
          About Press Copyright Contact us Creator Advertise Developers
        </div>
        <div className="text-sm font-[Roboto] text-gray-400 pb-4">
          Terms Privacy Policy & Safety How YouTube works Test new features
        </div>
        <div className="text-sm font-[Roboto] text-gray-400">
          © 2024 Watchube LLC
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

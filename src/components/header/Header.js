import logo from "./logo.png";
import ham from "./ham.png";
import search from "./search.png";
import notif from "./notif.png";
import video from "./video.png";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../../store/Slices/appSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const handleSideBar = () => {
    dispatch(setShowSideBar());
  };
  return (
    <div className="flex top-0 pt-2 z-50 fixed w-full h-14 bg-white">
      <div className="flex flex-[1] items-center ">
        <img
          src={ham}
          alt="logo"
          className="w-8 h-8 ml-4 mr-3"
          onClick={() => {
            handleSideBar();
          }}
        />
        <Link to="/">
          <img src={logo} className="w-36 h-11" />
        </Link>
      </div>
      <div className="flex flex-[4] justify-center h-10">
        <input
          type="text"
          placeholder="Search"
          className="w-7/12 rounded-l-full pl-5 border font-[Roboto]   border-gray-300"
        />
        <button className=" bg-gray-200 pl-4 pr-6 rounded-r-full object-contain border border-gray-200">
          <img src={search} className="h-6 object-contain" />
        </button>
      </div>
      <div className="flex flex-[1]  items-center justify-end">
        <img
          src={notif}
          alt="notification"
          className="w-10 h-8 object-contain mx-2"
        />
        <img src={video} alt="video" className="w-10 h-7 object-contain mx-2" />
        <img
          alt="videos"
          src="https://yt3.ggpht.com/ytc/AIdro_lO1bg78qyz0HR_ZIH8s5qeSfzYr9fVSd1DukOaqgMnQ42rwYpPYWufcdbL9Z9Zby0O7g=s88-c-k-c0x00ffffff-no-rj"
          className="w-9 h-9 mx-2 mr-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

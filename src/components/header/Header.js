import logo from "./logo.png";
import ham from "./ham.png";
import search from "./search.png";
import notif from "./notif.png";
import video from "./video.png";
const Header = () => {
  return (
    <div className="flex pt-2 z-50 fixed w-full h-12 bg-white">
      <div className="flex flex-[1] items-center ">
        <img src={ham} className="w-8 h-8 ml-4 mr-3" />
        <img src={logo} className="w-36 h-11" />
      </div>
      <div className="flex flex-[4] justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 rounded-l-full pl-5 border border-gray-200"
        />
        <button className=" bg-gray-200 pl-4 pr-6 rounded-r-full object-contain border border-gray-200">
          <img src={search} className="h-6 object-contain" />
        </button>
      </div>
      <div className="flex flex-[1]  items-center justify-end">
        <img src={notif} className="w-10 h-8 object-contain mx-2" />
        <img src={video} className="w-10 h-7 object-contain mx-2" />
        <img
          src="https://yt3.ggpht.com/ytc/AIdro_lO1bg78qyz0HR_ZIH8s5qeSfzYr9fVSd1DukOaqgMnQ42rwYpPYWufcdbL9Z9Zby0O7g=s88-c-k-c0x00ffffff-no-rj"
          className="w-9 h-9 mx-2 mr-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;

import logo from "./logo.png";
import ham from "./ham.png";
import search from "./search.png";
import notif from "./notif.png";
import video from "./video.png";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchSuggestions,
  setShowSideBar,
} from "../../store/Slices/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../../utils/constant";
import { addSearchCache } from "../../store/Slices/searchSlice";

const Header = () => {
  const searchCache = useSelector((store) => store?.search);
  const [inputValue, setInputValue] = useState("");
  const searchSuggestions = useSelector(
    (store) => store?.app?.searchSuggestions
  );
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[inputValue]) {
        dispatch(setSearchSuggestions(searchCache[inputValue]));
      } else {
        handleSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + inputValue);
    const json = await data.json();
    const keyValue = json[0];
    dispatch(setSearchSuggestions(json[1]));
    dispatch(
      addSearchCache({
        [keyValue]: json[1],
      })
    );
  };

  const handleShowSuggestion = (val) => {
    setShowSuggestions(val);
  };

  const handleSideBar = () => {
    dispatch(setShowSideBar());
  };

  const handleBlur = (e) => {
    // Check if blur is not happening because of clicking on the suggestions box
    if (!e.relatedTarget || !e.relatedTarget.closest(".suggestions-box")) {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="flex top-0 pt-2 z-50 fixed w-full h-14 bg-white">
      <div className="flex flex-[1] items-center pl-2 ">
        <img
          src={ham}
          alt="logo"
          className="w-8 h-8 ml-4 mr-3"
          onClick={handleSideBar}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-36 h-11" />
        </Link>
      </div>

      <div className="flex flex-[4] justify-center h-10 relative ">
        <input
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={() => handleShowSuggestion(true)}
          onBlur={handleBlur}
          className="w-7/12 rounded-l-full pl-5 border font-[Roboto] border-gray-300"
        />
        <button className="bg-gray-200 pl-4 pr-6 rounded-r-full object-contain border border-gray-200">
          <img src={search} alt="search" className="h-6 object-contain" />
        </button>

        {showSuggestions && (
          <div
            className="absolute w-7/12 bg-white top-11 mr-14 shadow-lg rounded-xl border border-gray-200 suggestions-box"
            onMouseDown={(e) => e.preventDefault()} // Prevent blur when clicking on suggestions
          >
            {searchSuggestions.map((s) => {
              return (
                <Link
                  to={"/results?search_query=" + s}
                  className="flex items-center pl-2 hover:bg-gray-200"
                >
                  <img
                    src={search}
                    alt="search icon"
                    className="h-5 object-contain"
                  />
                  <p className="w-full px-3 py-2">{s}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      <div className="flex flex-[1] items-center justify-end">
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

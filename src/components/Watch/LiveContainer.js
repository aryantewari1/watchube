import { useDispatch, useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import { useEffect, useState } from "react";
import { addChat, removeChat } from "../../store/Slices/LiveChatSlice";
import { generate, generateImageLinks } from "../../utils/helper";
import { makeid } from "../../utils/helper";
const LiveContainer = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const liveChats = useSelector((store) => store?.liveChat?.chats);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("api called");
      dispatch(
        addChat({
          name: generate(),
          text: makeid(8),
          imageSrc: generateImageLinks(),
        })
      );
    }, 2000);
    return () => {
      console.log("api removed");
      dispatch(removeChat());
      clearInterval(id);
    };
  }, []);
  return (
    <div className="flex flex-col w-full h-[580px] mb-3 border-[1px] border-slate-300 rounded-xl">
      <div className="p-4 w-full border-b-[1px] border-slate-300 text-lg">
        Top chat
      </div>
      <div className="flex flex-col-reverse w-full h-5/6 bg-gray-50  overflow-y-scroll">
        {liveChats.map((chat) => (
          <LiveChat chat={chat} />
        ))}
      </div>
      <div className="w-full p-2 flex flex-row-reverse  justify-around items-center ">
        <button
          className="px-2 py-1 ml-2 bg-gray-100"
          onClick={() => {
            dispatch(
              addChat({
                name: "notbasickk",
                text: inputValue,
                imageSrc: generateImageLinks(),
              })
            );
            setInputValue("");
          }}
        >
          send
        </button>
        <div className="">
          <input
            type="text"
            className="p-1 h-full w-56 pl-2 border-[1px] border-gray-200"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="mr-2">Enter Live Chat:</div>
      </div>
    </div>
  );
};

export default LiveContainer;

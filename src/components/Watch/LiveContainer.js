import LiveChat from "./LiveChat";

const LiveContainer = () => {
  return (
    <div className="flex flex-col w-full h-[580px] mb-3 border-[1px] border-slate-300 rounded-xl">
      <div className="p-4 w-full border-b-[1px] border-slate-300 text-lg">
        Top chat
      </div>
      <div className="flex flex-col-reverse w-full h-5/6 bg-gray-50  overflow-y-scroll">
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
        <LiveChat />
      </div>
      <div className="w-full p-2 flex flex-row-reverse  justify-around items-center ">
        <button className="px-2 py-1 ml-2 bg-gray-100">send</button>
        <div className="">
          <input
            type="text"
            className="p-1 h-full w-56 pl-2 border-[1px] border-gray-200"
          />
        </div>
        <div className="mr-2">Enter Live Chat:</div>
        <div></div>
      </div>
    </div>
  );
};

export default LiveContainer;

import { userLogo } from "../../utils/constant";

const LiveChat = () => {
  return (
    <div className="flex items-center pl-2 py-1 mt-1">
      <div className="">
        <img src={userLogo} className="w-9 rounded-full" />
      </div>
      <div>
        <span className="pl-3 text-gray-700">Aryan</span>
        <span className="pl-2 text-sm">Hey not basickk</span>
      </div>
    </div>
  );
};

export default LiveChat;

import { userLogo } from "../../utils/constant";

const LiveChat = ({ chat }) => {
  const { name, text } = chat;
  return (
    <div className="flex items-center pl-2 py-1 mt-1">
      <div className="">
        <img src={userLogo} className="w-9 rounded-full" />
      </div>
      <div>
        <span className="pl-3 text-gray-700">{name}</span>
        <span className="pl-2 text-sm">{text}</span>
      </div>
    </div>
  );
};

export default LiveChat;

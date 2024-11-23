import { useState } from "react";
import { userLogo } from "../../utils/constant";

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const { replies } = comment;

  return (
    <div>
      <div className="flex items-center my-4 bg-gray-200 p-4 mr-2 relative">
        <div className="">
          <img
            src={userLogo}
            className="w-10 rounded-full"
            alt="channel logo"
          />
        </div>
        <div className="ml-3 bg-gray">
          <div className="font-semibold">{"@" + comment?.name}</div>
          <div className="pl-1">{comment?.text}</div>
        </div>

        {replies.length > 0 && (
          <div
            className="absolute right-0 bottom-0 bg-gray-500 text-white py-1 px-3 rounded-sm hover:bg-gray-900"
            onClick={() => {
              setShowReplies(!showReplies);
            }}
          >
            <button>replies</button>
          </div>
        )}
      </div>
      {showReplies && (
        <div className="border-l-2 border-black ml-14">
          {replies.length != 0 &&
            replies.map((r, i) => <Comment comment={r} key={i} />)}
        </div>
      )}
    </div>
  );
};

export default Comment;

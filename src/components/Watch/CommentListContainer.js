import { useState } from "react";
import { addComment } from "../../store/Slices/commentsSlice";
import { userLogo } from "../../utils/constant";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";

const CommentListContainer = () => {
  const [inputValue, setInputValue] = useState();
  const dispatch = useDispatch();
  const commentsList = useSelector((store) => store.commentsList.comments);
  return (
    <div className="bg-gray-50 pl-2 pt-4">
      <h1 className="text-lg font-bold mb-4">Comments:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addComment({
              name: "aryan",
              text: inputValue,
              replies: [],
            })
          );
          setInputValue("");
        }}
        className="border-[1px] border-gray-200 pt-4 pl-2 mr-2 shadow-sm pb-3"
      >
        <div className="flex items-center gap-x-3">
          <img src={userLogo} alt="userLogo" className="w-10 rounded-full " />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add comment"
            className="w-full border-0 border-b-[3px] border-blue-500 outline-none focus:border-b-black p-2 bg-gray-50 mr-2"
          />
        </div>
        <div className="flex flex-row-reverse">
          <button className="px-2 py-1 bg-slate-500 hover:bg-slate-700 mt-2 mr-2 rounded-sm text-white">
            {" "}
            Comment{" "}
          </button>
        </div>
      </form>
      {commentsList.map((c, i) => (
        <Comment comment={c} key={i} />
      ))}
    </div>
  );
};

export default CommentListContainer;

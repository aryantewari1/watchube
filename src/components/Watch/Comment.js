const Comment = ({ comment }) => {
  const { replies } = comment;
  return (
    <div>
      <div className="flex items-center my-4 bg-gray-200 p-4">
        <div className="">
          <img
            src="https://yt3.ggpht.com/ytc/AIdro_lO1bg78qyz0HR_ZIH8s5qeSfzYr9fVSd1DukOaqgMnQ42rwYpPYWufcdbL9Z9Zby0O7g=s88-c-k-c0x00ffffff-no-rj"
            className="w-10 rounded-full"
            alt="channel logo"
          />
        </div>
        <div className="ml-3 bg-gray">
          <div className="font-semibold">{"@" + comment?.name}</div>
          <div className="pl-1">{comment?.text}</div>
        </div>
      </div>
      <div className="border-l-2 border-black ml-14">
        {replies.length != 0 &&
          replies.map((r, i) => <Comment comment={r} key={i} />)}
      </div>
    </div>
  );
};

export default Comment;

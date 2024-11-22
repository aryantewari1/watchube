import Comment from "./Comment";

const CommentListContainer = ({ commentsList }) => {
  return (
    <div className="bg-gray-50 pl-2 pt-4">
      <h1 className="text-lg font-bold">Comments:</h1>
      {commentsList.map((c, i) => (
        <Comment comment={c} key={i} />
      ))}
    </div>
  );
};

export default CommentListContainer;

const VideoListCard = ({ data }) => {
  const { id, snippet } = data;

  return (
    <div className="flex mb-4">
      <div className="">
        {id.kind === "youtube#video" ? (
          <div className="w-[30rem] h-72">
            <img
              src={snippet?.thumbnails?.medium?.url}
              alt="thumbnail"
              className="w-full h-full rounded-xl object-cover "
            />
          </div>
        ) : (
          <img
            src={snippet?.thumbnails?.medium?.url}
            alt="thumbnail"
            className=" w-40 rounded-full"
          />
        )}
      </div>
      {id.kind === "youtube#video" ? (
        <div className="ml-4 font-[Roboto] text-lg">
          <p>{snippet.title}</p>
        </div>
      ) : null}
    </div>
  );
};

export default VideoListCard;

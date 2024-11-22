const ListCard = ({ info }) => {
  const { snippet, statistics } = info;
  return (
    <div className="flex gap-x-2 mb-4">
      <div className="flex[9]">
        <img
          src={snippet?.thumbnails?.maxres?.url}
          alt="thumbnail"
          className="w-44 rounded-lg"
        />
      </div>
      <div className="flex-[3] ">
        <p className="">{snippet.title}</p>
      </div>
    </div>
  );
};

export default ListCard;

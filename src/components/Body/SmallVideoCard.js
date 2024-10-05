const SmallVideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  return (
    <div className="w-[21rem]">
      <div className="">
        <img
          src={snippet.thumbnails?.maxres?.url}
          alt={snippet.localized.title}
          className="w-[21rem] rounded-xl"
        />
      </div>
      <div className="flex pt-2">
        <div className="flex-[2] "></div>
        <div className="flex-[11] ">
          <p className="font-medium leading-tight">{snippet.title}</p>
          <p className="pt-2 text-gray-700">{snippet.channelTitle}</p>
          <p className="text-sm text-gray-700">{statistics.viewCount} views</p>
        </div>
      </div>
    </div>
  );
};

export default SmallVideoCard;

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;

  const viewCount = () => {
    const num = statistics.viewCount;
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    } else {
      return num;
    }
  };

  return (
    <div className="w-96">
      <div className="">
        <img
          src={snippet.thumbnails?.maxres?.url}
          alt={snippet.localized.title}
          className="w-96 rounded-xl"
        />
      </div>
      <div className="flex pt-2">
        <div className="flex-[2] "></div>
        <div className="flex-[11] ">
          <p className="font-medium leading-tight">{snippet.title}</p>
          <p className="pt-2 text-gray-700">{snippet.channelTitle}</p>
          <p className="text-sm text-gray-700">{viewCount()} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

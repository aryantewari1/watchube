const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "News",
    "Rockets",
    "Bharti Singh",
    "Field rations",
    "Music",
    "Air force",
    "Aviation",
    "Combat vehicles",
    "Disha vakani",
    "Street food",
    "Restaurants",
    "Battlegrounds Mobile India",
    "Trucks",
    "Role-playing games",
    "Pop music",
    "Tourism",
    "Recently uploaded",
    "New to you",
  ];
  return (
    <div className="flex">
      {list.map((data, i) => (
        <div className="mr-3" key={i}>
          <button className="px-3 py-1 font-medium whitespace-nowrap rounded-md bg-gray-100">
            {data}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ButtonList;

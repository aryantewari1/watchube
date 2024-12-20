const SidebarContainer = ({ section }) => {
  const { heading, imageList, titleList } = section;
  if (imageList === null) return;
  return (
    <div className="border-b border-b-gray-200 px-6 font-[Roboto] ">
      <div className="font-[Roboto] font-medium text-lg py-4">{heading}</div>
      {imageList.map((img, i) => {
        return (
          <div
            key={i}
            className="flex items-center pl-2 py-3 hover:bg-gray-200 "
          >
            <div>
              <img
                src={img}
                className="w-5 h-5  object-contain"
                alt={titleList[i]}
              />
            </div>
            <div>
              <span className="pl-6 pt-1 text-black text-sm">
                {titleList[i]}
              </span>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContainer;

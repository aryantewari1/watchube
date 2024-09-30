const SidebarContainer = ({ section }) => {
  const { heading, imageList, titleList } = section;
  console.log(imageList);
  if (imageList === null) return;
  return (
    <div className="border-b border-b-gray-200 px-6 font-[Roboto]">
      <div className="font-[Roboto] font-medium text-lg py-4">{heading}</div>
      {imageList.map((img, i) => {
        return (
          <div key={i} className="flex items-center pb-6">
            <img
              src={img}
              className="w-6 h-6 object-contain"
              alt={titleList[i]}
            />
            <span className="pl-6 pt-1 text-black text-sm">{titleList[i]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContainer;

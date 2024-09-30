const SidebarContainer = ({ section }) => {
  const { heading, imageList, titleList } = section;
  console.log(imageList);
  if (imageList === null) return;
  return (
    <div className="border border-b-black p-4">
      <div>{heading}</div>
      {imageList.map((img, i) => {
        return (
          <div key={i} className="flex">
            <img src={img} className="w-6" alt={titleList[i]} />
            <span>{titleList[i]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarContainer;

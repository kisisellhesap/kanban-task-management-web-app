const DropDown = () => {
  return (
    <div className="absolute bg-White dark:bg-VeryDarkGrey p-2 flex flex-col rounded-sm w-full top-20 shadow-custom-light shadow-custom-dark">
      <span className="body-l text-MediumGrey hover:bg-LightGreyBG dark:hover:bg-DarkGrey p-2 rounded-sm cursor-pointer">
        Todo
      </span>
      <span className="body-l text-MediumGrey hover:bg-LightGreyBG p-2 rounded-sm cursor-pointer">
        Todo
      </span>
      <span className="body-l text-MediumGrey hover:bg-LightGreyBG p-2 rounded-sm cursor-pointer">
        Todo
      </span>
    </div>
  );
};

export default DropDown;

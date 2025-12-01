import BoardItem from "./boardItem";

const Boards = () => {
  return (
    <div className="space-y-[19px]">
      <h3 className="px-[34px] heading-s text-MediumGrey ">ALL BOARDS (3)</h3>

      <div className="flex flex-col">
        <BoardItem />
      </div>
    </div>
  );
};

export default Boards;

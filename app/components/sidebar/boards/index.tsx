import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import BoardItem from "./boardItem";

const Boards = () => {
  const { boards } = useSelector((state: RootState) => state.boardReducer);
  console.log(boards);
  return (
    <div className="space-y-[19px]">
      <h3 className="px-[34px] heading-s text-MediumGrey ">
        ALL BOARDS ({boards.length})
      </h3>

      <div className="flex flex-col gap-1">
        {boards.map((item) => (
          <BoardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Boards;

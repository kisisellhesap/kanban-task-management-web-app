import BoardItem from "./boardItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useEffect } from "react";
import { getBoard } from "@/app/redux/slices/serverState-FETCH/board/actions";

const Boards = () => {
  const { boards } = useSelector((state: RootState) => state.boardReducer);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);
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

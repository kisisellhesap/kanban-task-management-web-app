import { setColumnId, setStatusTask } from "@/app/redux/slices/taskFormSlice";
import { AppDispatch, RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

interface DropDownProps {
  closeDropDown: () => void;
}
const DropDown = ({ closeDropDown }: DropDownProps) => {
  const { id } = useParams();

  const { boards } = useSelector((state: RootState) => state.boardReducer);

  const dispatch = useDispatch<AppDispatch>();
  const board = boards.find((item) => item.id === id);

  return (
    <div className="absolute bg-White dark:bg-VeryDarkGrey p-2 flex flex-col rounded-sm w-full top-20 shadow-custom-light shadow-custom-dark max-h-[133px] pr-3 overflow-y-auto">
      {board && board.columns.length !== 0 ? (
        board.columns.map((item, i) => (
          <span
            key={i}
            className="body-l text-MediumGrey hover:bg-LightGreyBG p-2 rounded-sm cursor-pointer"
            onClick={() => {
              dispatch(setStatusTask(item.name));
              dispatch(setColumnId(item.id));

              closeDropDown();
            }}
          >
            {item.name}
          </span>
        ))
      ) : (
        <span className="body-l text-MediumGrey  p-2 rounded-sm cursor-pointer">
          There is no status set for this board
        </span>
      )}
    </div>
  );
};

export default DropDown;

import Link from "next/link";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { useParams } from "next/navigation";
import { Board } from "@/app/types";
interface BoardItemProps {
  item: Board;
}
const BoardItem = ({ item }: BoardItemProps) => {
  const { id } = useParams();
  const isActive = id === item.id;

  return (
    <Link
      href={`/boards/${item.id}`}
      className={`max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MediumGrey  ${
        isActive
          ? "bg-MainPurple text-white"
          : "hover:bg-MainPurple/10  hover:text-MainPurple dark:hover:bg-White"
      }    `}
    >
      <TbLayoutBoardSplit className="w-6 h-6" />
      <span className="heading-m">{item.name}</span>
    </Link>
  );
};

export default BoardItem;

import Link from "next/link";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { useParams } from "next/navigation";

const BoardItem = () => {
  const { name } = useParams();

  const isActive = name === "platform%20launch";

  return (
    <Link
      href={"/boards/platform launch"}
      className={`max-w-[276px] flex items-center gap-4 px-8 py-4 rounded-r-full text-MediumGrey  ${
        isActive
          ? "bg-MainPurple text-white"
          : "hover:bg-MainPurple/10  hover:text-MainPurple dark:hover:bg-White"
      }    `}
    >
      <TbLayoutBoardSplit className="w-6 h-6" />
      <span className=" heading-m ">Platform Launch</span>
    </Link>
  );
};

export default BoardItem;

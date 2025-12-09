"use client";
import Column from "@/app/components/column";
import NewColumnAdd from "@/app/components/column/newColumnAdd.tsx";
import { RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const NamePage = () => {
  const { boards } = useSelector((state: RootState) => state.boardReducer);
  const { id } = useParams();

  const item = boards.find((item) => item.id === id);
  return (
    <div className="w-full h-full gap-6 flex overflow-x-auto p-4">
      <>
        <div className="flex h-max gap-6">
          {item?.columns.map((column) => (
            <Column key={column.id} column={column} />
          ))}
        </div>
        <NewColumnAdd />
      </>
    </div>
  );
};

export default NamePage;

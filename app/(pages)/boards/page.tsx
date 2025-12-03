import Column from "@/app/components/column";
import NewColumnAdd from "@/app/components/column/newColumnAdd.tsx";

const Boards = () => {
  return (
    <div className="w-full h-full gap-6 flex overflow-x-auto p-4">
      <div className="flex h-max gap-6">
        <Column />
        <Column />
      </div>
      <NewColumnAdd />
    </div>
  );
};

export default Boards;

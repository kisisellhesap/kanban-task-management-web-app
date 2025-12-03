import Column from "@/app/components/column";

const Boards = () => {
  return (
    <div className=" bg-red-300 w-full h-full flex overflow-x-scroll p-4">
      <div className="flex h-full gap-6">
        <Column />
        <Column />
        <Column />
      </div>
      <div className="min-w-70 w-full flex">new Column</div>
    </div>
  );
};

export default Boards;

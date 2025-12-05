import Button from "@/app/components/button";
import Column from "@/app/components/column";
import NewColumnAdd from "@/app/components/column/newColumnAdd.tsx";

const NamePage = () => {
  return (
    <div className="w-full h-full gap-6 flex overflow-x-auto p-4">
      {/* <div className="flex flex-col items-center gap-8">
        <p className="text-MediumGrey">
          This board is empty. Create a new column to get started.
        </p>

        <Button type="primary" size="L" text="+ Add New Column" width="174px" />
      </div> */}

      <>
        <div className="flex h-max gap-6">
          <Column />
          <Column />
        </div>
        <NewColumnAdd />
      </>
    </div>
  );
};

export default NamePage;

import Button from "@/app/components/button";
import CustomItem from "./customItem";

interface CustomContentProps {
  type: "board" | "task";
}
const CustomContent = ({ type }: CustomContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="heading-m text-MediumGrey dark:text-White">
        {type === "board" ? "Columns" : "Subtasks"}
      </label>
      <div className="flex flex-col gap-3 max-h-[94px] overflow-y-auto pr-5">
        <CustomItem />
        <CustomItem />
        <CustomItem />
        <CustomItem />
      </div>
      <Button
        type="secondary"
        size="S"
        text={`+ Add New ${type === "board" ? "Column" : "Subtask"}`}
        width="100%"
        onClick={() => {}}
      />
    </div>
  );
};

export default CustomContent;

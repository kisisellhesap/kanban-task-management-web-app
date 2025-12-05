import Button from "@/app/components/button";
import CustomItem from "./customItem";

const CustomContent = () => {
  return (
    <div className="flex flex-col gap-4">
      <label className="heading-m text-MediumGrey dark:text-White">
        Columns
      </label>
      <div className="flex flex-col gap-3">
        <CustomItem />
        <CustomItem />
      </div>
      <Button
        type="secondary"
        size="S"
        text="+ Add New Column"
        width="100%"
        onClick={() => {}}
      />
    </div>
  );
};

export default CustomContent;

import Input from "../../input";
import { FaXmark } from "react-icons/fa6";

const CustomItem = () => {
  return (
    <div className="flex items-center gap-4">
      <Input name="name" value="name" placeholder="we.g. Web Design" />
      <button className="">
        <FaXmark className="text-MediumGrey w-6 h-6" />
      </button>
    </div>
  );
};

export default CustomItem;

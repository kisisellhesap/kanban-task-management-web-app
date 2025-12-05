import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import {
  changeModalContent,
  openModal,
} from "../redux/slices/clientState-UI/modalSlice";

interface ThreedotButtonProps {
  type: "task" | "board";
}
const ThreedotButton = ({ type }: ThreedotButtonProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const editSomething = (type: string) => {
    dispatch(openModal());

    if (type === "task") {
      console.log("Edit Task");
      dispatch(changeModalContent("edit_task"));
    } else {
      dispatch(changeModalContent("edit_board"));
    }
  };
  const deleteSomething = (type: string) => {
    dispatch(openModal());

    if (type === "task") {
      console.log("Delete Task");
      dispatch(changeModalContent("delete_task"));
    } else {
      dispatch(changeModalContent("delete_board"));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative cursor-pointer threedot" ref={dropdownRef}>
      <BsThreeDotsVertical
        className="text-MediumGrey w-8 h-16"
        onClick={toggleDropdown}
      />

      {isDropdownOpen && (
        <div className="p-4 w-48 h-[94px] bg-White dark:bg-VeryDarkGrey rounded-lg absolute top-20 right-0 flex flex-col items-start gap-4 text-body-l shadow-custom-light shadow-custom-dark z-10">
          <button
            onClick={() => editSomething(type)}
            className="text-MediumGrey"
          >
            {type === "task" ? "Edit Task" : "Edit Board"}
          </button>
          <button onClick={() => deleteSomething(type)} className="text-Red">
            {type === "task" ? "Delete Task" : "Delete Board"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreedotButton;

"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from "./dropdown";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

interface CurrentStatusProps {
  status?: string;
}
const CurrentStatus = ({ status }: CurrentStatusProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { form } = useSelector((state: RootState) => state.taskFormReducer);
  const { modalContent } = useSelector((state: RootState) => state.modalReducer);

  console.log(form, "currentStatıs");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="current-stateus relative mt-auto" ref={dropdownRef}>
      <div className="flex flex-col gap-2">
        <h4 className="heading-m text-MediumGrey dark:text-White">Current Status</h4>

        <div
          className={`border border-Border/25 rounded-sm px-4 py-2 flex items-center justify-between gap-2 cursor-pointer select-none hover:border-MainPurple ${
            modalContent === "view_task" && "pointer-events-none"
          }`}
          onClick={toggleDropdown}
        >
          <input
            type="text"
            className="body-l w-full text-black dark:text-White pointer-events-none select-none outline-none border-none hide-caret"
            value={status ?? form.status}
            placeholder="There is no status set for this board"
            required
            readOnly
          />
          <MdKeyboardArrowDown className="text-MainPurple e w-5 h-5" />
        </div>
      </div>

      {isDropdownOpen && <DropDown closeDropDown={() => setIsDropdownOpen(false)} />}
    </div>
  );
};

export default CurrentStatus;

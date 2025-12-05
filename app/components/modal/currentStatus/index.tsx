"use client";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from "./dropdown";

const CurrentStatus = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
    <div className="current-stateus relative" ref={dropdownRef}>
      <div className="flex flex-col gap-2">
        <h4 className="heading-m text-MediumGrey dark:text-White">
          Current Status
        </h4>

        <div
          className="border border-Border/25 rounded-sm px-4 py-2 flex items-center justify-between gap-2 cursor-pointer hover:border-MainPurple"
          onClick={toggleDropdown}
        >
          <span className="body-l text-black dark:text-White">Doing</span>
          <MdKeyboardArrowDown className="text-MainPurple e w-5 h-5" />
        </div>
      </div>

      {isDropdownOpen && <DropDown />}
    </div>
  );
};

export default CurrentStatus;

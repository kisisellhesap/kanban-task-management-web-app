import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ThreedotButtonProps {
  buttonOneText?: string;
  buttonTwoText?: string;
  buttonOneFn?: () => void;
  buttonTwoFn?: () => void;
}
const ThreedotButton = ({
  buttonOneText,
  buttonTwoText,
  buttonOneFn,
  buttonTwoFn,
}: ThreedotButtonProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <div className="relative cursor-pointer threedot" ref={dropdownRef}>
      <BsThreeDotsVertical
        className="text-MediumGrey w-8 h-16"
        onClick={toggleDropdown}
      />

      {isDropdownOpen && (
        <div className="p-4 w-48 h-[94px] bg-White dark:bg-VeryDarkGrey rounded-lg absolute top-20 right-0 flex flex-col items-start gap-4 text-body-l shadow-sm z-10">
          <button onClick={buttonOneFn} className="text-MediumGrey">
            {buttonOneText}
          </button>
          <button onClick={buttonTwoFn} className="text-Red">
            {buttonTwoText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ThreedotButton;

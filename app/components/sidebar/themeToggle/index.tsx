"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const mounted = () => {
      setMounted(true);
    };
    mounted();
  }, []);

  if (!mounted) {
    return <div className="w-[235px] h-11"></div>;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  const isDark = resolvedTheme === "dark";

  return (
    <div className="bg-LightGreyBG dark:bg-VeryDarkGrey flex items-center gap-6 justify-center rounded-md py-3 mx-8 mt-auto mb-20">
      <Image
        src="/assets/icon-light-theme.svg"
        width={18}
        height={18}
        alt="light theme icon"
      />
      <button
        className="w-10 h-5 rounded-full bg-MainPurple hover:bg-HoverMainPurple p-[3px] transition-colors duration-200 ease-in-out hover:bg-MainPurpleHover"
        onClick={toggleTheme}
      >
        <div
          className={`${
            isDark ? "translate-x-5" : "translate-x-0"
          } w-3.5 h-3.5 bg-White rounded-full transition-transform duration-200 ease-in-out`}
        ></div>
      </button>
      <Image
        src="/assets/icon-dark-theme.svg"
        width={18}
        height={18}
        alt="dark theme icon"
      />
    </div>
  );
};

export default ThemeToggle;

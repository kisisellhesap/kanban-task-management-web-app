"use client";
import { useMiniScreen } from "@/app/hooks/useBreakPointScreen";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMiniScreen = useMiniScreen();
  useEffect(() => {
    const mounted = () => {
      setMounted(true);
    };
    mounted();
  }, []);

  if (!mounted) {
    return <div className="w-[152px] h-[25px]" />;
  }

  const logoSrc = isMiniScreen
    ? "/assets/logo-mobile.svg"
    : resolvedTheme === "dark"
    ? "/assets/logo-light.svg"
    : "/assets/logo-dark.svg";

  return (
    <Image
      src={logoSrc}
      width={152}
      height={25}
      className="w-[152px]  h-[25px]"
      alt="kanban logo"
      priority
    />
  );
};

export default Logo;

"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mounted = () => {
      setMounted(true);
    };
    mounted();
  }, []);

  if (!mounted) {
    return <div className="w-[152px] h-[25.83px] mx-[34px] mb-[54px]" />;
  }

  const logoSrc =
    resolvedTheme === "dark"
      ? "/assets/logo-light.svg"
      : "/assets/logo-dark.svg";

  return (
    <Image
      src={logoSrc}
      width={152}
      height={25}
      alt="kanban logo"
      priority
      className="mx-[34px] mb-[54px]"
    />
  );
};

export default Logo;

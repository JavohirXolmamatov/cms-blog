"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// use client
// 1. Qachonki biz hooklardan foydalanganimizda client use client larni ishlatish kerak bo'lsini unutmang
// 2. Qachonki biz handler yani button, input lardan foydalanganimizda  use client larni ishlatish kerak bo'lsini unutmang

const ModeToogle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted && resolvedTheme === "dark" ? (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  ) : (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  );
};

export default ModeToogle;

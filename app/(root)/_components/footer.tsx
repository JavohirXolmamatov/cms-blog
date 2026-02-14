"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User2 } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [active, setActive] = useState(false);
  return (
    <footer className="flex flex-center py-24 flex-col container mx-auto max-w-2xl space-y-12 ">
      <h1 className="text-5xl font-creteRound text-center max-md:text-3xl">
        Get latest posts delivered right to your inbox
      </h1>
      <div className="grid max-md:grid-cols-1 grid-cols-3  md:gap-4 w-full">
        <Input
          placeholder="Your email address"
          className="w-full col-span-2"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        />
        <Button
          className="max-md:mt-2"
          size={"lg"}
          variant={active ? "default" : "outline"}
        >
          <User2 className="h-4 w-4 me-2" />
          <span>Join today</span>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;

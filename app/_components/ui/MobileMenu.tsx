"use client";
import { useState } from "react";
import { HelpCircle, Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "./sheet";
import { Button } from "./button";

export const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const menuItems = [
    { icon: HelpCircle, label: "About us", href: "/about-us" },
  ];
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-3">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center space-x-3 text-lg font-medium"
              onClick={() => setOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

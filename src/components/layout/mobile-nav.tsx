"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { navigationButtonsData } from "@/data/navigation.data";
import Link from "next/link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Unified AI HUB</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function NavLinks({ onClick = () => {} }: { onClick?: () => void }) {
  return (
    <>
      {navigationButtonsData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
          onClick={onClick}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

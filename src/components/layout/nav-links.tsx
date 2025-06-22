import { navigationButtonsData } from "@/data/navigation.data";
import Link from "next/link";

export function NavLinks() {
  return (
    <>
      {navigationButtonsData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}

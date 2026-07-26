import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { CATEGORIES, CATEGORY_LABELS, type Category } from "@/lib/categories";
import { cn } from "@/lib/utils";

export function CategoryChips({ active }: { active?: Category }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href="/discover">
        <Badge
          variant={active ? "outline" : "default"}
          className={cn("px-3 py-1 text-sm", active && "hover:bg-accent")}
        >
          All
        </Badge>
      </Link>
      {CATEGORIES.map((category) => (
        <Link key={category} href={`/discover?category=${category}`}>
          <Badge
            variant={active === category ? "default" : "outline"}
            className={cn(
              "px-3 py-1 text-sm",
              active !== category && "hover:bg-accent",
            )}
          >
            {CATEGORY_LABELS[category]}
          </Badge>
        </Link>
      ))}
    </div>
  );
}

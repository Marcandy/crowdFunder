import { cn } from "@/lib/utils";

// Dumb display component: takes a precomputed percent (0–100+). The real
// number is produced by percentFunded() from lib/money.ts — Exercise 1, Part B.
export function ProgressBar({
  percent,
  className,
}: {
  percent: number;
  className?: string;
}) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(percent)}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}
    >
      <div
        className="h-full rounded-full bg-emerald-600 transition-[width]"
        style={{ width: `${Math.min(percent, 100)}%` }}
      />
    </div>
  );
}

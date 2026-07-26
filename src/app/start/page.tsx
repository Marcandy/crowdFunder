import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Start a project" };

// Placeholder so header/footer links resolve. Day 2 AM replaces this with the
// one-page create form (draft → publish gate) — see REWRITE_PLAN.md §10.
export default function StartPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="text-2xl font-bold tracking-tight">Start a project</h1>
      <p className="mx-auto mt-2 max-w-md text-muted-foreground">
        The create form (save a draft, then publish when it passes the gate)
        arrives with the Day 2 projects domain.
      </p>
      <Button asChild className="mt-6" variant="outline">
        <Link href="/">Back home</Link>
      </Button>
    </div>
  );
}

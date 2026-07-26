import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Dashboard" };

// Shell only. Day 1 PM: protected by Auth.js (signed-out → /login).
// Day 2: "My projects" tab (status, derived totals). Day 3: backer list +
// "My pledges" tab. Route protection is enforced server-side, not just hidden.
export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">
        Your projects and your pledges, in one place.
      </p>

      <div className="mt-10 rounded-lg border border-dashed p-12 text-center">
        <p className="font-medium">Nothing to show yet.</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
          Once sign-in and the projects domain land, this page lists your
          projects with live totals and the people who backed them.
        </p>
        <Button
          render={<Link href="/discover" />}
          className="mt-4"
          variant="outline"
        >
          Browse projects
        </Button>
      </div>
    </div>
  );
}

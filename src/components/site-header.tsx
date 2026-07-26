import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          crowd<span className="text-emerald-600">Funder</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="/discover">Discover</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/start">Start a project</Link>
          </Button>
          {/* Swapped for a session-aware menu once Auth.js lands (Day 1 PM) */}
          <Button asChild size="sm">
            <Link href="/login">Sign in</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

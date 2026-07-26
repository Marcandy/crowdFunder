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
          <Button render={<Link href="/discover" />} variant="ghost" size="sm">
            Discover
          </Button>
          <Button render={<Link href="/start" />} variant="ghost" size="sm">
            Start a project
          </Button>
          {/* Swapped for a session-aware menu once Auth.js lands (Day 1 PM) */}
          <Button render={<Link href="/login" />} size="sm">
            Sign in
          </Button>
        </nav>
      </div>
    </header>
  );
}

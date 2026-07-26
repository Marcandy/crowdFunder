import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>crowdFunder — bring creative projects to life.</p>
        <nav className="flex gap-4">
          <Link href="/discover" className="hover:text-foreground">
            Discover
          </Link>
          <Link href="/start" className="hover:text-foreground">
            Start a project
          </Link>
        </nav>
      </div>
    </footer>
  );
}

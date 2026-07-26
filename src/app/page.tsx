import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORIES, CATEGORY_LABELS } from "@/lib/categories";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export default function Home() {
  const featured = MOCK_PROJECTS.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-14 text-center sm:py-20">
        <h1 className="mx-auto max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Bring a creative project to life.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
          Publish a project with a goal and a deadline, and let backers get it
          off the ground — or discover something worth backing today.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button render={<Link href="/start" />} size="lg">
            Start a project
          </Button>
          <Button render={<Link href="/discover" />} size="lg" variant="outline">
            Discover projects
          </Button>
        </div>
      </section>

      <section className="pb-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured projects</h2>
          <Link
            href="/discover"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t pb-16 pt-10">
        <h2 className="mb-4 text-xl font-semibold">Browse by category</h2>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <Link key={category} href={`/discover?category=${category}`}>
              <Badge
                variant="outline"
                className="px-3 py-1 text-sm hover:bg-accent"
              >
                {CATEGORY_LABELS[category]}
              </Badge>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

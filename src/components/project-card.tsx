import Link from "next/link";

import { ProgressBar } from "@/components/progress-bar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CATEGORY_LABELS } from "@/lib/categories";
import type { MockProject } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: MockProject }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full overflow-hidden py-0 transition-shadow group-hover:shadow-md">
        <div
          className={cn(
            "h-36 w-full bg-gradient-to-br",
            project.cover,
          )}
          aria-hidden
        />
        <CardContent className="space-y-3 px-4 pb-4">
          <div className="flex items-center justify-between gap-2">
            <Badge variant="secondary">{CATEGORY_LABELS[project.category]}</Badge>
            <span className="text-xs text-muted-foreground">
              {project.daysLeft} days left
            </span>
          </div>
          <div>
            <h3 className="font-semibold leading-snug group-hover:underline">
              {project.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {project.blurb}
            </p>
          </div>
          <div className="space-y-1.5">
            <ProgressBar percent={project.percent} />
            <p className="text-sm">
              <span className="font-semibold">{project.raised}</span>{" "}
              <span className="text-muted-foreground">
                of {project.goal} · {project.percent}% funded
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

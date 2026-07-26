import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = { title: "Sign in" };

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-6xl justify-center px-4 py-24">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Sign in to start a project or back one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Wired to Auth.js signIn("google") in the Day 1 PM auth feature.
              One provider only — see REWRITE_PLAN.md §13 (no magic links). */}
          <Button className="w-full" size="lg" disabled>
            Continue with Google
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Google sign-in connects once Auth.js lands (Day 1).
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

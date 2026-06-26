"use client";

import Link from "next/link";
import { Lock } from "lucide-react";

import { useAuth } from "@/features/auth/hooks/use-auth";
import { LoginButton } from "@/features/auth/components/login-button";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { user, loading, loginWithGoogle } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse rounded-3xl border border-border bg-muted/70 p-12 text-center shadow-xl">
          <div className="mb-4 h-12 w-12 rounded-full bg-muted" />
          <div className="mx-auto mt-4 h-6 w-60 rounded bg-muted" />
          <div className="mx-auto mt-3 h-4 w-72 rounded bg-muted" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4 text-slate-100">
        <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-center rounded-3xl bg-slate-900/70 p-5 text-4xl text-primary-foreground">
            <Lock className="h-10 w-10" />
          </div>
          <h1 className="text-center text-4xl font-semibold tracking-tight text-white">
            Authentication Required
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-300 sm:text-base">
            You need to sign in before accessing Community Hero features.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <LoginButton onLogin={loginWithGoogle} />
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

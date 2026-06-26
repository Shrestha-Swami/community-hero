"use client";

import { AuthGuard } from "@/components/auth/AuthGuard";
import { ReportForm } from "@/features/report/components/ReportForm";

export default function ReportPage() {
  return (
    <AuthGuard>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <ReportForm />
      </main>
    </AuthGuard>
  );
}
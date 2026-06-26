"use client";

import { MapPin } from "lucide-react";

import { SectionTitle } from "@/components/common/section-title";

export default function MapPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionTitle
        title="Live Community Map"
        subtitle="Interactive placeholder"
        description="Nearby verified civic reports will appear here."
      />

      <div className="mt-10 rounded-[2rem] border border-border bg-background p-8 shadow-xl">
        <div className="flex items-center gap-3 text-emerald-700">
          <MapPin className="size-5" />
          <h2 className="text-xl font-semibold">Coming Soon</h2>
        </div>

        <div className="mt-8 h-96 rounded-3xl border border-dashed border-muted bg-slate-950/5 p-6 text-center text-sm text-muted-foreground">
          <div className="mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-4">
            <div className="rounded-3xl bg-white/10 p-6 shadow-inner">
              <p className="text-lg font-semibold text-foreground">Live map placeholder</p>
            </div>
            <p className="max-w-md text-sm leading-6">
              Nearby verified civic reports will appear here once real-time map support is enabled.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

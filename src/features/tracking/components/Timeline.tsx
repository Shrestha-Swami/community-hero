import { CheckCircle, Circle, Dot } from "lucide-react";

import type { TrackingTimelineItem } from "../types";

interface TimelineProps {
  timeline: TrackingTimelineItem[];
}

export function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="rounded-3xl border border-border bg-background p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Status Timeline</p>
          <p className="text-xs text-muted-foreground">
            Recent updates are shown in chronological order.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {timeline.map((item, index) => {
          const isComplete = item.state === "complete";
          const isCurrent = item.state === "current";

          return (
            <div key={`${item.status}-${index}`} className="flex items-start gap-3">
              <div className="mt-1">
                {isComplete ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : isCurrent ? (
                  <Dot className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">{item.description}</p>
                  <span className="text-xs text-muted-foreground">{item.status}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{item.timestamp}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

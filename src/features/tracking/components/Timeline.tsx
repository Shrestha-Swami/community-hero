import { CheckCircle, Circle, Dot } from "lucide-react";

import type { TrackingTimelineItem } from "../types";

interface TimelineProps {
  timeline: TrackingTimelineItem[];
}

export function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="rounded-3xl border border-border bg-background p-4 sm:p-5 shadow-sm min-w-0 w-full overflow-hidden">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">Status Timeline</p>
          <p className="text-xs text-muted-foreground truncate">
            Recent updates are shown in chronological order.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {timeline.map((item, index) => {
          const isComplete = item.state === "complete";
          const isCurrent = item.state === "current";

          return (
            <div key={`${item.status}-${index}`} className="flex items-start gap-3 min-w-0 w-full">
              <div className="mt-1 shrink-0">
                {isComplete ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                ) : isCurrent ? (
                  <Dot className="h-5 w-5 text-primary" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-400" />
                )}
              </div>
              <div className="flex-1 min-w-0 break-words">
                <div className="flex flex-col gap-1 items-start sm:flex-row sm:items-center sm:gap-2">
                  <p className="text-sm font-semibold text-foreground break-words">{item.description}</p>
                  <span className="text-xs text-muted-foreground shrink-0">{item.status}</span>
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

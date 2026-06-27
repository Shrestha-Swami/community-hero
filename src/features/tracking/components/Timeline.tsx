"use client";

import { CheckCircle, Circle, Dot } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { TrackingTimelineItem } from "../types";

interface TimelineProps {
  timeline: TrackingTimelineItem[];
}

export function Timeline({ timeline }: TimelineProps) {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl border border-border bg-background p-4 sm:p-5 shadow-sm min-w-0 w-full overflow-hidden">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">{t("tracking.timeline.title")}</p>
          <p className="text-xs text-muted-foreground truncate">
            {t("tracking.timeline.description")}
          </p>
        </div>
      </div>

      <div className="space-y-4" role="list">
        {timeline.map((item, index) => {
          const isComplete = item.state === "complete";
          const isCurrent = item.state === "current";

          return (
            <div key={`${item.status}-${index}`} className="flex items-start gap-3 min-w-0 w-full" role="listitem">
              <div className="mt-1 shrink-0">
                {isComplete ? (
                  <CheckCircle className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                ) : isCurrent ? (
                  <Dot className="h-5 w-5 text-primary animate-pulse" aria-hidden="true" />
                ) : (
                  <Circle className="h-5 w-5 text-slate-400" aria-hidden="true" />
                )}
              </div>
              <div className="flex-1 min-w-0 break-words">
                <div className="flex flex-col gap-1 items-start sm:flex-row sm:items-center sm:gap-2">
                  <p className="text-sm font-semibold text-foreground break-words">
                    {t(`tracking.status.${item.description}`) || item.description}
                  </p>
                  <span className="text-xs text-muted-foreground shrink-0">
                    ({t(`tracking.status.${item.status}`) || item.status})
                  </span>
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

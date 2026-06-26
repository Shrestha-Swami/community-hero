import { ArrowRight, CheckCircle } from "lucide-react";

import { TRACKING_STATUSES } from "../types";
import { getReportProgress } from "../services/tracking.service";
import type { TrackingStatus } from "../types";

interface ReportProgressProps {
  status: TrackingStatus;
}

export function ReportProgress({ status }: ReportProgressProps) {
  const progressPercentage = getReportProgress(status);
  const currentIndex = TRACKING_STATUSES.indexOf(status);

  return (
    <div className="space-y-4 rounded-3xl border border-border bg-background p-5 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold">Report Progress</p>
          <p className="text-xs text-muted-foreground">
            Track the current stage of your report.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {progressPercentage}%
        </span>
      </div>

      <div className="rounded-full bg-slate-200 h-2 overflow-hidden">
        <div
          className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="overflow-x-auto">
        <div className="flex min-w-[520px] items-start gap-4">
          {TRACKING_STATUSES.map((step, index) => {
            const isComplete = index < currentIndex;
            const isCurrent = index === currentIndex;

            return (
              <div key={step} className="flex min-w-[120px] flex-1 flex-col items-center text-center">
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full border transition ${
                    isComplete
                      ? "border-emerald-500 bg-emerald-500 text-white"
                      : isCurrent
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-slate-200 bg-slate-100 text-slate-500"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>

                <p className="text-sm font-medium leading-tight">{step}</p>

                {index < TRACKING_STATUSES.length - 1 ? (
                  <div className="mt-4 flex h-6 w-full items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

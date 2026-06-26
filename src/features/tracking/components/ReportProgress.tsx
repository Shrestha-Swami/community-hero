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
    <div className="space-y-4 rounded-3xl border border-border bg-background p-4 sm:p-5 shadow-sm min-w-0 w-full overflow-hidden">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">Report Progress</p>
          <p className="text-xs text-muted-foreground truncate">
            Track the current stage of your report.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-700 shrink-0">
          {progressPercentage}%
        </span>
      </div>

      <div className="rounded-full bg-slate-200 h-2 overflow-hidden w-full">
        <div
          className="h-2 rounded-full bg-emerald-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Mobile Vertical Stepper (< 768px) */}
      <div className="flex flex-col gap-3 md:hidden mt-4 pl-1">
        {TRACKING_STATUSES.map((step, index) => {
          const isComplete = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div key={step} className="flex items-center gap-3 relative">
              {/* Connecting line between circles */}
              {index < TRACKING_STATUSES.length - 1 && (
                <div
                  className={`absolute left-[15px] top-8 bottom-[-12px] w-0.5 ${
                    index < currentIndex ? "bg-emerald-500" : "bg-slate-200"
                  }`}
                />
              )}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition z-10 ${
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
                  <span className="text-xs font-semibold">{index + 1}</span>
                )}
              </div>
              <div className="flex-1 min-w-0 text-left">
                <span
                  className={`text-sm font-medium ${
                    isCurrent ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Horizontal Stepper (>= 768px) */}
      <div className="hidden md:block overflow-x-auto w-full">
        <div className="flex min-w-[520px] items-start gap-4 py-2">
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

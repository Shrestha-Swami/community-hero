"use client";

import { useMemo } from "react";

import { formatTimeline, getReportProgress } from "../services/tracking.service";
import type { ReportTrackingData, ReportTrackingResult, TrackingStatus } from "../types";

export function useReportTracking(report?: ReportTrackingData | null): ReportTrackingResult {
  const currentStatus = report?.status ?? "Pending";

  const result = useMemo(() => {
    const status = report?.status ?? "Pending";

    return {
      currentStatus: status,
      progressPercentage: getReportProgress(status),
      timeline: formatTimeline({
        status,
        createdAt: report?.createdAt,
      }),
      loading: false,
    };
  }, [report?.createdAt, report?.status]);

  return result;
}

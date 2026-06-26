import {
  TRACKING_STATUSES,
  type ReportTrackingData,
  type TrackingStatus,
  type TrackingTimelineItem,
} from "../types";

const STATUS_DESCRIPTIONS: Record<TrackingStatus, string> = {
  Pending: "Submitted",
  Verified: "AI Verified",
  Assigned: "Assigned",
  "In Progress": "In Progress",
  Resolved: "Resolved",
};

function formatTimestamp(date: Date) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

export function getReportProgress(status: TrackingStatus) {
  const index = TRACKING_STATUSES.indexOf(status);
  if (index < 0) {
    return 0;
  }

  return Math.round((index / (TRACKING_STATUSES.length - 1)) * 100);
}

export function getStatusColor(status: TrackingStatus) {
  switch (status) {
    case "Pending":
      return "bg-slate-100 text-slate-700";
    case "Verified":
      return "bg-blue-100 text-blue-700";
    case "Assigned":
      return "bg-violet-100 text-violet-700";
    case "In Progress":
      return "bg-orange-100 text-orange-700";
    case "Resolved":
      return "bg-emerald-100 text-emerald-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

export function formatTimeline(report: ReportTrackingData): TrackingTimelineItem[] {
  const currentIndex = TRACKING_STATUSES.indexOf(report.status);
  const baseDate = report.createdAt ? new Date(report.createdAt) : new Date();

  return TRACKING_STATUSES.map((status, index) => {
    const state: TrackingTimelineItem["state"] =
      index < currentIndex
        ? "complete"
        : index === currentIndex
        ? "current"
        : "pending";

    const timestamp = state === "pending"
      ? ""
      : formatTimestamp(new Date(baseDate.getTime() + index * 15 * 60 * 1000));

    return {
      status,
      description: STATUS_DESCRIPTIONS[status],
      timestamp,
      state,
    };
  });
}

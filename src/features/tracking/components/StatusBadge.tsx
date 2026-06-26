import type { TrackingStatus } from "../types";
import { getStatusColor } from "../services/tracking.service";

interface StatusBadgeProps {
  status: TrackingStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold whitespace-normal break-words text-center shrink-0 ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

import type { TrackingStatus } from "../types";
import { getStatusColor } from "../services/tracking.service";

interface StatusBadgeProps {
  status: TrackingStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(status)}`}>
      {status}
    </span>
  );
}

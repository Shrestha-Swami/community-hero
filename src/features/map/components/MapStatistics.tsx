import { useTranslation } from "react-i18next";

interface MapStatisticsProps {
  total: number;
  active: number;
  resolved: number;
  highPriority: number;
  loading: boolean;
}

export function MapStatistics({
  total,
  active,
  resolved,
  highPriority,
  loading,
}: MapStatisticsProps) {
  const { t } = useTranslation();

  const stats = [
    {
      label: t("dashboard.stats.totalReports") || "Total Reports",
      value: total,
      color: "border-indigo-500/20 dark:border-indigo-400/10 hover:border-indigo-500/40",
    },
    {
      label: t("dashboard.stats.inProgress") || "Active Issues",
      value: active,
      color: "border-amber-500/20 dark:border-amber-400/10 hover:border-amber-500/40",
    },
    {
      label: t("dashboard.stats.resolved") || "Resolved",
      value: resolved,
      color: "border-emerald-500/20 dark:border-emerald-400/10 hover:border-emerald-500/40",
    },
    {
      label: t("dashboard.performance.highPriority") || "High Priority",
      value: highPriority,
      color: "border-rose-500/20 dark:border-rose-400/10 hover:border-rose-500/40",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-2xl border bg-background p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${stat.color}`}
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </p>
          <div className="mt-2 flex items-center justify-between">
            {loading ? (
              <div className="h-8 w-12 animate-pulse rounded bg-slate-900/10 dark:bg-slate-100/10" />
            ) : (
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

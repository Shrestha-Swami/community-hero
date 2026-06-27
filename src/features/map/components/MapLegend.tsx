import type { Category } from "@/features/report/types";

export function MapLegend() {
  const legendItems: { label: Category | "Other"; color: string }[] = [
    { label: "Roads", color: "bg-indigo-600" },
    { label: "Garbage", color: "bg-orange-500" },
    { label: "Street Lights", color: "bg-amber-400" },
    { label: "Water", color: "bg-sky-500" },
    { label: "Traffic", color: "bg-purple-500" },
    { label: "Safety", color: "bg-rose-600" },
    { label: "Other", color: "bg-slate-500" },
  ];

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 items-center rounded-2xl border border-border bg-background p-3 shadow-xs">
      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
        Legend:
      </span>
      <div className="flex flex-wrap gap-3">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs font-medium">
            <span className={`h-2.5 w-2.5 rounded-full ${item.color} shrink-0`} />
            <span className="text-foreground/85">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

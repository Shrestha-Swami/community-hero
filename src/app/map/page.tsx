"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { ErrorCard } from "@/components/common";
import { SectionTitle } from "@/components/common/section-title";
import { useLiveMap } from "@/features/map/hooks/use-live-map";
import { MapFilters } from "@/features/map/components/MapFilters";
import { MapLegend } from "@/features/map/components/MapLegend";
import { MapStatistics } from "@/features/map/components/MapStatistics";

// Dynamic import of LiveMap to disable SSR (since Leaflet requires 'window' object)
const LiveMap = dynamic(
  () => import("@/features/map/components/LiveMap").then((mod) => mod.LiveMap),
  {
    ssr: false,
    loading: () => {
      // Inline use of hook would fail here, but translation dictionary is loaded, we can use a basic translation or text.
      // Better to return a simple loading indicator that is translated inside the page component, but for the loader:
      return (
        <div className="h-[400px] sm:h-[550px] w-full rounded-[2rem] bg-muted/20 animate-pulse flex items-center justify-center border border-border">
          <p className="text-muted-foreground text-sm font-medium">Loading interactive map…</p>
        </div>
      );
    },
  }
);

export default function MapPage() {
  const { t } = useTranslation();
  const {
    filteredReports,
    loading,
    error,
    userLocation,
    selectedCategory,
    selectedStatus,
    setSelectedCategory,
    setSelectedStatus,
    statistics,
  } = useLiveMap();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 w-full">
      <SectionTitle
        title={t("liveMap.title")}
        subtitle={t("liveMap.subtitle")}
        description={t("liveMap.description")}
      />

      <div className="mt-8">
        {/* Statistics Row */}
        <MapStatistics
          total={statistics.total}
          active={statistics.active}
          resolved={statistics.resolved}
          highPriority={statistics.highPriority}
          loading={loading}
        />

        {error ? (
          <div className="mt-6">
            <ErrorCard message="Unable to load the community map. Please check your network connection." />
          </div>
        ) : (
          <div className="mt-6 space-y-6">
            {/* Filter and Legend Row */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between">
              <MapFilters
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                onSelectCategory={setSelectedCategory}
                onSelectStatus={setSelectedStatus}
              />
              <MapLegend />
            </div>

            {/* Map Container */}
            {loading ? (
              <div className="h-[400px] sm:h-[550px] w-full rounded-[2rem] bg-muted/20 animate-pulse flex items-center justify-center border border-border">
                <p className="text-muted-foreground text-sm font-medium">{t("liveMap.connecting")}</p>
              </div>
            ) : filteredReports.length === 0 ? (
              <div className="h-[400px] sm:h-[550px] w-full rounded-[2rem] border border-dashed border-muted bg-slate-950/5 dark:bg-white/5 p-6 flex items-center justify-center text-center">
                <div className="max-w-md space-y-3">
                  <p className="text-lg font-semibold text-foreground">{t("liveMap.empty.title")}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("liveMap.empty.description")}
                  </p>
                </div>
              </div>
            ) : (
              <LiveMap reports={filteredReports} userLocation={userLocation} />
            )}
          </div>
        )}
      </div>
    </main>
  );
}

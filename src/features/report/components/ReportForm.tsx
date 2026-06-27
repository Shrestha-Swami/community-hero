"use client";

import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Loader2, MapPin, Mic, MicOff } from "lucide-react";
import { useTranslation } from "react-i18next";

import type { VisionAnalysis } from "@/ai/agents/vision";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { REPORT_CATEGORIES } from "../constants";
import { MediaUploader } from "./MediaUploader";
import { AIAnalysisCard } from "./AIAnalysisCard";

import { useReportForm } from "../hooks/use-report-form";
import { submitReport } from "../services/report.service";
import { analyzeMedia } from "../services/ai.service";
import { useCurrentLocation, reverseGeocode } from "@/features/location";
import { useSpeechRecognition } from "@/hooks/use-speech-recognition";

export function ReportForm() {
  const { t, i18n } = useTranslation();
  const {
    description,
    setDescription,
    category,
    setCategory,
    media,
    setMediaFile,
    location,
    setLocation,
    submitting,
    submit,
    reset,
    analysis,
    setAnalysis,
    analyzing,
    setAnalyzing,
  } = useReportForm();

  const {
    latitude,
    longitude,
    accuracy,
    loading: locationLoading,
    error: locationError,
  } = useCurrentLocation();

  const [geocodeError, setGeocodeError] = useState<string | null>(null);

  // Speech to Text hook integration
  const { isListening, isSupported, startListening, stopListening } = useSpeechRecognition({
    lang: i18n.language,
    onResult: (text) => {
      setDescription((prev) => (prev ? prev + " " + text : text));
    },
  });

  useEffect(() => {
    if (
      locationLoading ||
      locationError ||
      latitude == null ||
      longitude == null
    ) {
      return;
    }

    const currentLatitude = latitude;
    const currentLongitude = longitude;

    async function fetchAddress() {
      try {
        const address = await reverseGeocode(currentLatitude, currentLongitude);

        setLocation({
          latitude: currentLatitude,
          longitude: currentLongitude,
          accuracy: accuracy ?? 0,
          address: address.address,
          city: address.city,
          state: address.state,
          country: address.country,
        });
        setGeocodeError(null);
      } catch (error) {
        console.error(error);
        setGeocodeError(t("reportForm.locationDetail.errorGeocode") || "Unable to resolve address.");

        setLocation({
          latitude: currentLatitude,
          longitude: currentLongitude,
          accuracy: accuracy ?? 0,
          address: `${currentLatitude.toFixed(6)}, ${currentLongitude.toFixed(6)}`,
          city: "",
          state: "",
          country: "",
        });
      }
    }

    fetchAddress();
  }, [accuracy, latitude, longitude, locationError, locationLoading, setLocation, t]);

  const onSubmit = useCallback(async () => {
    await submit(async (payload) => {
      const id = await submitReport(payload);
      alert(t("reportForm.toasts.submitSuccess", { id }) || `Report submitted successfully!\nReport ID: ${id}`);
      reset();
    });
  }, [reset, submit, t]);

  const onAnalyze = useCallback(async () => {
    if (!media) return;

    try {
      setAnalyzing(true);
      const result = await analyzeMedia(media);
      setAnalysis(result as VisionAnalysis);
    } catch (error) {
      console.error(error);
      alert(t("reportForm.toasts.analyzeFailed") || "AI analysis failed. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  }, [media, setAnalysis, setAnalyzing, t]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            {t("reportForm.title")}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {t("reportForm.description")}
          </p>
        </div>

        {/* Upload */}
        <section aria-labelledby="upload-section-title" className="mb-6">
          <h2 id="upload-section-title" className="mb-2 text-lg font-semibold">
            {t("reportForm.uploadTitle")}
          </h2>

          <MediaUploader
            media={media}
            onChange={setMediaFile}
          />

          <p className="mt-2 text-xs text-muted-foreground">
            {t("reportForm.uploadTip")}
          </p>
        </section>

        {/* Description */}
        <section aria-labelledby="description-section-title" className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <label id="description-section-title" htmlFor="report-description" className="block text-sm font-medium">
              {t("reportForm.descLabel")}
            </label>
            
            {/* Microphone Button */}
            {isSupported && (
              <Button
                type="button"
                variant={isListening ? "destructive" : "outline"}
                size="sm"
                onClick={isListening ? stopListening : startListening}
                className={cn(
                  "rounded-full flex items-center gap-1.5 h-8 text-xs font-semibold px-3 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isListening && "animate-pulse"
                )}
                aria-label={isListening ? t("reportForm.speech.stop") : t("reportForm.speech.start")}
              >
                {isListening ? (
                  <>
                    <MicOff className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{t("reportForm.speech.stop")}</span>
                  </>
                ) : (
                  <>
                    <Mic className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
                    <span>{t("reportForm.speech.start")}</span>
                  </>
                )}
              </Button>
            )}
          </div>

          <textarea
            id="report-description"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={t("reportForm.descPlaceholder")}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </section>

        {/* Category + Location */}
        <section aria-labelledby="meta-section-title" className="mb-8 flex flex-col gap-4 md:flex-row">
          <h2 id="meta-section-title" className="sr-only">Category and Location details</h2>
          <div className="flex-1">
            <label htmlFor="report-category" className="mb-2 block text-sm font-medium">
              {t("reportForm.categoryLabel")}
            </label>

            <select
              id="report-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {REPORT_CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {t("categories." + item) || item}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-72">
            <label className="mb-2 block text-sm font-medium">{t("reportDetail.location")}</label>

            <div className="rounded-3xl border border-border bg-background p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">{t("reportForm.locationStatus")}</p>
                  <p className="text-xs text-muted-foreground mt-0.5" aria-live="polite">
                    {locationLoading
                      ? t("reportForm.locationDetail.waiting")
                      : locationError
                      ? t("reportForm.locationDetail.denied")
                      : location && location.address
                      ? t("reportForm.locationDetail.detected")
                      : t("reportForm.locationDetail.requesting")}
                  </p>
                </div>
                <div>
                  {locationLoading ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      <Loader2 className="animate-spin size-4" aria-hidden="true" />
                      {t("common.loading").replace("...", "")}
                    </span>
                  ) : locationError ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                      <AlertTriangle className="size-4" aria-hidden="true" />
                      {t("common.error")}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      <CheckCircle className="size-4" aria-hidden="true" />
                      {t("reportForm.locationDetail.detected")}
                    </span>
                  )}
                </div>
              </div>

              {locationLoading ? (
                <p className="text-sm text-muted-foreground">
                  {t("reportForm.locationDetail.waiting")}
                </p>
              ) : locationError ? (
                <p className="text-sm text-destructive">{locationError}</p>
              ) : location ? (
                <div className="space-y-3 rounded-2xl bg-slate-950/5 dark:bg-white/5 p-4 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-emerald-600" aria-hidden="true" />
                    <span className="font-medium text-foreground">{t("reportForm.locationCard.address")}</span>
                  </div>
                  <p className="text-xs leading-relaxed">{location.address}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("reportForm.locationCard.latitude")}</p>
                      <p className="mt-0.5 font-semibold text-foreground">{location.latitude.toFixed(6)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("reportForm.locationCard.longitude")}</p>
                      <p className="mt-0.5 font-semibold text-foreground">{location.longitude.toFixed(6)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("reportForm.locationCard.city")}</p>
                      <p className="mt-0.5 font-semibold text-foreground truncate">{location.city || "Unknown"}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t("reportForm.locationCard.region")}</p>
                      <p className="mt-0.5 font-semibold text-foreground truncate">{location.state || "Unknown"}</p>
                    </div>
                  </div>
                  <div className="text-[10px] text-muted-foreground border-t border-border/40 pt-2">
                    {t("reportForm.locationCard.accuracy", { accuracy: accuracy?.toFixed(0) || "N/A" })}
                  </div>
                  {geocodeError ? (
                    <p className="text-xs text-destructive">{geocodeError}</p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onAnalyze}
            disabled={!media || analyzing || !!analysis}
            className="rounded-md bg-secondary px-5 py-2 font-medium text-secondary-foreground transition hover:opacity-90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          >
            {analyzing
              ? t("reportForm.buttons.analyzing")
              : analysis
              ? t("reportForm.buttons.complete")
              : t("reportForm.buttons.analyze")}
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={submitting || !analysis}
            className="rounded-md bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
          >
            {submitting ? t("reportForm.buttons.submitting") : t("reportForm.buttons.submit")}
          </button>

          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-border px-5 py-2 transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer text-foreground"
          >
            {t("reportForm.buttons.reset")}
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="space-y-5" aria-label="AI Verification Info">
        <AIAnalysisCard
          analysis={analysis}
          loading={analyzing}
        />

        <div className="rounded-2xl border border-border bg-background p-5 shadow-xs">
          <h3 className="mb-2 text-sm font-semibold text-foreground">
            {t("reportForm.locationStatus")}
          </h3>

          <p className="text-xs text-muted-foreground leading-relaxed">
            Google Maps and GPS integration will appear here after analysis.
          </p>
        </div>
      </aside>
    </div>
  );
}
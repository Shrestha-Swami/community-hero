"use client";

import { useCallback, useEffect, useState } from "react";
import { AlertTriangle, CheckCircle, Loader2, MapPin } from "lucide-react";

import type { VisionAnalysis } from "@/ai/agents/vision";

import { REPORT_CATEGORIES } from "../constants";

import { MediaUploader } from "./MediaUploader";
import { AIAnalysisCard } from "./AIAnalysisCard";

import { useReportForm } from "../hooks/use-report-form";
import { submitReport } from "../services/report.service";
import { analyzeMedia } from "../services/ai.service";
import { useCurrentLocation, reverseGeocode } from "@/features/location";

export function ReportForm() {
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
        setGeocodeError("Unable to resolve address.");

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
  }, [accuracy, latitude, longitude, locationError, locationLoading, setLocation]);

  const onSubmit = useCallback(async () => {
    await submit(async (payload) => {
      const id = await submitReport(payload);

      alert(`Report submitted successfully!\nReport ID: ${id}`);

      reset();
    });
  }, [reset, submit]);

  const onAnalyze = useCallback(async () => {
    if (!media) return;

    try {
      setAnalyzing(true);

      const result = await analyzeMedia(media);

      setAnalysis(result as VisionAnalysis);
    } catch (error) {
      console.error(error);
      alert("AI analysis failed. Please try again.");
    } finally {
      setAnalyzing(false);
    }
  }, [media, setAnalysis, setAnalyzing]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Report a Civic Issue
          </h1>

          <p className="mt-2 text-muted-foreground">
            Upload an image or short video of the issue. Our AI will analyze
            the evidence and recommend the appropriate department.
          </p>
        </div>

        {/* Upload */}
        <section className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">
            Upload Evidence
          </h2>

          <MediaUploader
            media={media}
            onChange={setMediaFile}
          />

          <p className="mt-2 text-xs text-muted-foreground">
            Supported formats: JPG, PNG, WEBP, MP4, MOV, WEBM
          </p>
        </section>

        {/* Description */}
        <section className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the civic issue..."
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          />
        </section>

        {/* Category + Location */}
        <section className="mb-8 flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              {REPORT_CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-72">
            <label className="mb-2 block text-sm font-medium">Location</label>

            <div className="rounded-3xl border border-border bg-background p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Location status</p>
                  <p className="text-sm text-muted-foreground">
                    {locationLoading
                      ? "Waiting for browser permission..."
                      : locationError
                      ? "Location permission denied. You can still submit without a detected location."
                      : location && location.address
                      ? "Location detected"
                      : "Requesting location..."}
                  </p>
                </div>
                <div>
                  {locationLoading ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      <Loader2 className="animate-spin size-4" />
                      Detecting
                    </span>
                  ) : locationError ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
                      <AlertTriangle className="size-4" />
                      Denied
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                      <CheckCircle className="size-4" />
                      Detected
                    </span>
                  )}
                </div>
              </div>

              {locationLoading ? (
                <p className="text-sm text-muted-foreground">
                  Asking for permission to access your browser location.
                </p>
              ) : locationError ? (
                <p className="text-sm text-destructive">{locationError}</p>
              ) : location ? (
                <div className="space-y-3 rounded-2xl bg-slate-950/5 p-4 text-sm text-slate-700">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-emerald-600" />
                    <span className="font-medium text-foreground">Address</span>
                  </div>
                  <p>{location.address}</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Latitude</p>
                      <p className="mt-1 text-sm text-foreground">{location.latitude.toFixed(6)}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Longitude</p>
                      <p className="mt-1 text-sm text-foreground">{location.longitude.toFixed(6)}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">City</p>
                      <p className="mt-1 text-sm text-foreground">{location.city || "Unknown"}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Region</p>
                      <p className="mt-1 text-sm text-foreground">{location.state || "Unknown"}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Accuracy: {accuracy ? `${accuracy.toFixed(0)} meters` : "N/A"}
                  </div>
                  {geocodeError ? (
                    <p className="text-sm text-destructive">{geocodeError}</p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onAnalyze}
            disabled={!media || analyzing || !!analysis}
            className="rounded-md bg-secondary px-5 py-2 font-medium text-secondary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {analyzing
              ? "Analyzing..."
              : analysis
              ? "✓ AI Analysis Complete"
              : "Analyze with AI"}
          </button>

          <button
            type="button"
            onClick={onSubmit}
            disabled={submitting || !analysis}
            className="rounded-md bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Report"}
          </button>

          <button
            type="button"
            onClick={reset}
            className="rounded-md border border-border px-5 py-2 transition hover:bg-muted"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="space-y-5">
        <AIAnalysisCard
          analysis={analysis}
          loading={analyzing}
        />

        <div className="rounded-lg border border-border bg-background p-4">
          <h3 className="mb-2 text-sm font-semibold">
            Live Location
          </h3>

          <p className="text-sm text-muted-foreground">
            Google Maps and GPS integration will appear here after analysis.
          </p>
        </div>
      </aside>
    </div>
  );
}
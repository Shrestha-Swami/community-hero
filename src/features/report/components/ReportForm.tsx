"use client";

import { useCallback } from "react";

import { REPORT_CATEGORIES } from "../constants";
import type { ReportPayload } from "../types";

import { MediaUploader } from "./MediaUploader";
import { AIAnalysisCard } from "./AIAnalysisCard";

import { useReportForm } from "../hooks/use-report-form";
import { submitReport } from "../services/report.service";

export function ReportForm() {
  const {
    description,
    setDescription,

    category,
    setCategory,

    media,
    setMediaFile,

    submitting,
    submit,
    reset,
  } = useReportForm();

  const onSubmit = useCallback(async () => {
    await submit(async (payload: ReportPayload) => {
      return submitReport(payload);
    });
  }, [submit]);

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {/* Left Section */}
      <div className="lg:col-span-2">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Report a Civic Issue
          </h1>

          <p className="mt-2 text-muted-foreground">
            Upload an image or short video of the issue. Our AI will analyze the
            evidence and recommend the appropriate department.
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
            Supported formats:
            JPG, PNG, WEBP, MP4, MOV, WEBM
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
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full md:w-72">
            <label className="mb-2 block text-sm font-medium">
              Location
            </label>

            <div className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
              📍 Current location will be detected automatically
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onSubmit}
            disabled={submitting}
            className="rounded-md bg-primary px-5 py-2 font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Analyze & Submit"}
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
        <AIAnalysisCard />

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
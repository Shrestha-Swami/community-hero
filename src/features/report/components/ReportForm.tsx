"use client"

import { useCallback } from "react"
import { ReportPayload } from "../types"
import { REPORT_CATEGORIES } from "../constants"
import { ImageUploader } from "./ImageUploader"
import { AIAnalysisCard } from "./AIAnalysisCard"
import { useReportForm } from "../hooks/use-report-form"
import { submitReport } from "../services/report.service"

export function ReportForm() {
  const {
    description,
    setDescription,
    category,
    setCategory,
    image,
    setImageFile,
    location,
    setLocation,
    submitting,
    submit,
    reset,
  } = useReportForm()

  const onSubmit = useCallback(async () => {
    await submit(async (payload: ReportPayload) => {
      // Delegate to service - currently unimplemented per instructions
      return submitReport(payload)
    })
  }, [submit])

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <h1 className="mb-4 text-2xl font-bold">Report an Issue</h1>

        <section className="mb-4">
          <ImageUploader image={image} onChange={setImageFile} />
        </section>

        <section className="mb-4">
          <label className="mb-2 block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            placeholder="Describe the issue"
          />
        </section>

        <section className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1">
            <label className="mb-2 block text-sm font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as any)}
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
            >
              {REPORT_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-64">
            <label className="mb-2 block text-sm font-medium">Location</label>
            <div className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground">
              (Current location coming soon)
            </div>
          </div>
        </section>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            onClick={onSubmit}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Report"}
          </button>
          <button
            type="button"
            className="text-sm text-muted-foreground"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>

      <aside className="space-y-4">
        <AIAnalysisCard />
        <div className="rounded-lg border border-border bg-background p-4">
          <h3 className="mb-2 text-sm font-semibold">Location</h3>
          <div className="text-sm text-muted-foreground">Placeholder for map or geolocation</div>
        </div>
      </aside>
    </div>
  )
}

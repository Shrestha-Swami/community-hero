"use client";

import type { VisionAnalysis } from "@/ai/agents/vision";

interface Props {
  analysis: VisionAnalysis | null;
  loading?: boolean;
}

export function AIAnalysisCard({
  analysis,
  loading = false,
}: Props) {
  return (
    <div className="rounded-lg border border-border bg-background p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">
        AI Analysis
      </h3>

      {loading && (
        <p className="text-sm text-muted-foreground">
          🤖 Analyzing image...
        </p>
      )}

      {!loading && !analysis && (
        <p className="text-sm text-muted-foreground">
          Upload evidence and click
          <strong> Analyze with AI</strong>.
        </p>
      )}

      {!loading && analysis && (
        <div className="space-y-3 text-sm">
          <div>
            <strong>Category:</strong> {analysis.category}
          </div>

          <div>
            <strong>Severity:</strong> {analysis.severity}
          </div>

          <div>
            <strong>Confidence:</strong> {analysis.confidence}%
          </div>

          <div>
            <strong>Priority:</strong> {analysis.priorityScore}
          </div>

          <div>
            <strong>Department:</strong> {analysis.department}
          </div>

          <div>
            <strong>Summary:</strong>

            <p className="mt-1 text-muted-foreground">
              {analysis.summary}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
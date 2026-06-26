export type Category =
  | "Roads"
  | "Garbage"
  | "Street Lights"
  | "Water"
  | "Traffic"
  | "Safety"
  | "Other";

export interface AIAnalysis {
  category: string;
  severity: "Low" | "Medium" | "High";
  priorityScore: number;
  suggestedDepartment: string;
  summary: string;
  confidence: number;
}

export interface ReportPayload {
  description: string;
  category: Category;

  media: File | null;
  mediaType: "image" | "video" | null;
  mimeType: string | null;

  location?: string | null;
}

export interface Report {
  id?: string;

  media?: File | null;
  mediaType?: "image" | "video";

  description: string;
  category: string;

  location?: string;

  aiAnalysis?: AIAnalysis;
}
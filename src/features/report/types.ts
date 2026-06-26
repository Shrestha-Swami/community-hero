export type Category =
  | "Roads"
  | "Garbage"
  | "Street Lights"
  | "Water"
  | "Traffic"
  | "Safety"
  | "Other"

export interface ReportPayload {
  description: string
  category: Category
  image?: File | null
  location?: string | null
}

export interface AIAnalysis {
  category: string;
  severity: "Low" | "Medium" | "High";
  priorityScore: number;
  suggestedDepartment: string;
  summary: string;
  confidence: number;
}

export interface Report {
  id?: string;
  image?: File;
  description: string;
  category: string;
  location?: string;
  aiAnalysis?: AIAnalysis;
}
// report feature types.

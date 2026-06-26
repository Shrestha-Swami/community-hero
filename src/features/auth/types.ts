export interface UserProfile {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    heroPoints: number;
    heroLevel:
      | "Volunteer"
      | "Community Helper"
      | "Civic Champion"
      | "City Guardian"
      | "Community Hero";
    reportsSubmitted: number;
    reportsVerified: number;
    streak: number;
    badges: string[];
    createdAt: Date | null;
  }
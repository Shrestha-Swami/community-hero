import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

import { auth, db } from "@/firebase";

import type {
  Category,
  ReportLocation,
  ReportPayload,
  ReportStatus,
} from "../types";

const INITIAL_STATUS: ReportStatus = "Pending";

export async function submitReport(payload: ReportPayload) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be logged in.");
  }

  const docRef = await addDoc(collection(db, "reports"), {
    uid: user.uid,
    displayName: user.displayName ?? "",
    email: user.email ?? "",

    description: payload.description,
    category: payload.category,

    aiAnalysis: payload.aiAnalysis ?? null,

    mediaType: payload.mediaType,
    mimeType: payload.mimeType,

    location: payload.location ?? null,

    status: INITIAL_STATUS,

    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return docRef.id;
}

export async function fetchUserReports() {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be logged in.");
  }

  const reportsQuery = query(
    collection(db, "reports"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(reportsQuery);

  return snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      description: data.description,
      category: data.category as Category,
      status: data.status as ReportStatus,
      mediaType: data.mediaType as "image" | "video" | undefined,
      location: data.location as ReportLocation | undefined,
      aiAnalysis: data.aiAnalysis ?? null,
      createdAt: data.createdAt?.toDate?.() ?? null,
    };
  });
}

"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";

export default function FirebaseTestPage() {
  const [status, setStatus] = useState("Ready");

  const testFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "connection_test"), {
        message: "Community Hero Firebase Connected 🚀",
        createdAt: serverTimestamp(),
      });

      setStatus(`✅ Success! Document ID: ${docRef.id}`);
    } catch (error) {
      console.error(error);
      setStatus("❌ Connection Failed");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Firebase Connection Test</h1>

        <button
          onClick={testFirestore}
          className="rounded bg-emerald-600 px-6 py-3 text-white"
        >
          Test Firestore
        </button>

        <p>{status}</p>
      </div>
    </main>
  );
}
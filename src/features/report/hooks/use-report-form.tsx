"use client"

import { useCallback, useState } from "react"
import type { ReportPayload, Category } from "../types"

export function useReportForm(initial?: Partial<ReportPayload>) {
  const [description, setDescription] = useState(initial?.description ?? "")
  const [category, setCategory] = useState<Category>(
    (initial?.category as Category) ?? ("Other" as Category)
  )
  const [image, setImage] = useState<File | null>(initial?.image ?? null)
  const [location, setLocation] = useState<string | null>(initial?.location ?? null)
  const [submitting, setSubmitting] = useState(false)

  const reset = useCallback(() => {
    setDescription("")
    setCategory("Other")
    setImage(null)
    setLocation(null)
    setSubmitting(false)
  }, [])

  const setImageFile = useCallback((file: File | null) => {
    setImage(file)
  }, [])

  const submit = useCallback(async (onSubmit: (payload: ReportPayload) => Promise<unknown>) => {
    setSubmitting(true)
    try {
      const payload: ReportPayload = {
        description,
        category,
        image,
        location,
      }
      await onSubmit(payload)
    } finally {
      setSubmitting(false)
    }
  }, [description, category, image, location])

  return {
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
  }
}

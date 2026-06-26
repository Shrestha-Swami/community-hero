"use client"

import { useCallback, useRef, useState } from "react"
import { toDataUrl } from "../utils/image"

interface ImageUploaderProps {
  image?: File | null
  onChange: (file: File | null) => void
}

export function ImageUploader({ image, onChange }: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleFile = useCallback(async (file?: File | null) => {
    if (!file) {
      setPreview(null)
      onChange(null)
      return
    }
    const url = await toDataUrl(file)
    setPreview(url)
    onChange(file)
  }, [onChange])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if (f) handleFile(f)
  }, [handleFile])

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null
    handleFile(f)
  }, [handleFile])

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="flex h-44 w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/10 p-4"
      >
        <div className="text-center">
          <p className="mb-2 text-sm text-muted-foreground">Drag & drop an image here</p>
          <p className="mb-4 text-xs text-muted-foreground">or</p>
          <div className="flex gap-2 items-center justify-center">
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground"
              onClick={() => inputRef.current?.click()}
            >
              Upload from device
            </button>
            <button
              type="button"
              className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              onClick={() => inputRef.current?.click()}
            >
              Use Camera
            </button>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={onSelectFile}
          />
        </div>
      </div>

      {preview && (
        <div className="mt-3">
          <p className="mb-2 text-sm text-muted-foreground">Preview</p>
          <img src={preview} alt="preview" className="max-h-64 w-full rounded-md object-contain" />
          <div className="mt-2 flex justify-end">
            <button
              type="button"
              className="text-sm text-destructive"
              onClick={() => handleFile(null)}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

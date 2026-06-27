"use client";

import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toDataUrl } from "../utils/media";

interface MediaUploaderProps {
  media?: File | null;
  onChange: (file: File | null) => void;
}

export function MediaUploader({
  media,
  onChange,
}: MediaUploaderProps) {
  const { t } = useTranslation();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = useCallback(
    async (file?: File | null) => {
      if (!file) {
        setPreviewUrl(null);
        onChange(null);
        return;
      }

      const url = await toDataUrl(file);

      setPreviewUrl(url);
      onChange(file);
    },
    [onChange]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();

      const file = e.dataTransfer.files?.[0];

      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onSelectFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] ?? null;

      handleFile(file);
    },
    [handleFile]
  );

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        className="flex h-44 w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/10 p-4"
      >
        <div className="text-center">
          <p className="mb-2 text-sm text-muted-foreground">
            {t("common.dragDrop")}
          </p>

          <p className="mb-4 text-xs text-muted-foreground">
            JPG • PNG • WEBP • MP4 • MOV • WEBM
          </p>

          <div className="flex justify-center gap-2">
            <button
              type="button"
              className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground"
              onClick={() => inputRef.current?.click()}
            >
              📁 {t("common.chooseFile")}
            </button>

            <button
              type="button"
              className="rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground"
              onClick={() => inputRef.current?.click()}
            >
              📷 {t("common.camera")}
            </button>
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/*"
            capture="environment"
            className="hidden"
            onChange={onSelectFile}
          />
        </div>
      </div>

      {previewUrl && (
        <div className="mt-4">
          <p className="mb-2 text-sm text-muted-foreground">
            {t("common.preview")}
          </p>

          {media?.type.startsWith("video") ? (
            <video
              src={previewUrl}
              controls
              className="max-h-64 w-full rounded-md"
            />
          ) : (
            <img
              src={previewUrl}
              alt={t("common.preview")}
              className="max-h-64 w-full rounded-md object-contain"
            />
          )}

          <div className="mt-3 flex justify-end">
            <button
              type="button"
              className="text-sm text-destructive"
              onClick={() => handleFile(null)}
            >
              {t("common.remove")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
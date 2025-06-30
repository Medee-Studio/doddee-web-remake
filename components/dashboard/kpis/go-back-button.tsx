"use client";

import { ArrowLeft } from "lucide-react";

export default function GoBackButton({
  formIdx,
  setFormIdx,
}: {
  formIdx: number;
  setFormIdx: (e: number) => void;
}) {
  return (
    formIdx > 0 && (
      <button 
        onClick={() => setFormIdx(formIdx - 1)} 
        className="absolute top-4 left-4 p-2 hover:bg-gray-100 rounded-md transition-colors"
        type="button"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
    )
  );
}
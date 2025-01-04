import React from 'react';
import { Loader2 } from 'lucide-react';

export default function UploadProgress() {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center">
        <Loader2 className="h-8 w-8 text-amber-500 animate-spin mb-2" />
        <span className="text-white text-sm">Վերբեռնում...</span>
      </div>
    </div>
  );
}
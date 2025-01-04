import React from 'react';
import { AlertCircle } from 'lucide-react';

interface UploadErrorProps {
  message: string;
}

export default function UploadError({ message }: UploadErrorProps) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
      <div className="flex flex-col items-center text-center p-4">
        <AlertCircle className="h-8 w-8 text-red-500 mb-2" />
        <p className="text-red-500 text-sm bg-black/80 px-4 py-2 rounded">
          {message}
        </p>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { lockScroll, unlockScroll } from '../../utils/scrollLock';

interface EditVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (url: string) => void;
  currentUrl: string;
}

export default function EditVideoModal({ isOpen, onClose, onSave, currentUrl }: EditVideoModalProps) {
  const [url, setUrl] = useState(currentUrl);

  React.useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(url);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Խմբագրել Տեսանյութը</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-300 mb-2">
              Տեսանյութի հղում
            </label>
            <input
              type="url"
              id="videoUrl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
              placeholder="https://..."
              required
            />
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              Չեղարկել
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-400"
            >
              Պահպանել
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
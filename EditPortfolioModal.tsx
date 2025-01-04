import React, { useState } from 'react';
import { X } from 'lucide-react';
import { VideoData } from '../../../types/portfolio';
import { lockScroll, unlockScroll } from '../../../utils/scrollLock';

interface EditPortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: VideoData) => void;
  item: VideoData;
}

export default function EditPortfolioModal({ isOpen, onClose, onSave, item }: EditPortfolioModalProps) {
  const [formData, setFormData] = useState<VideoData>(item);

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
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">Խմբագրել տեսանյութը</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
              Վերնագիր
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
              Կատեգորիա
            </label>
            <input
              type="text"
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          {!item.videoUrl && (
            <div>
              <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Նկարի հղում
              </label>
              <input
                type="url"
                id="thumbnailUrl"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          )}

          {item.videoUrl && (
            <div>
              <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Տեսանյութի հղում
              </label>
              <input
                type="url"
                id="videoUrl"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
          )}
          
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
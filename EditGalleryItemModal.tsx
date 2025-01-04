import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import { lockScroll, unlockScroll } from '../../utils/scrollLock';
import { GalleryItem } from '../../types/gallery';
import { validateVimeoUrl, formatVimeoUrl } from '../../utils/vimeoUtils';

interface EditGalleryItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: GalleryItem;
  onSave: (item: GalleryItem) => void;
}

export default function EditGalleryItemModal({ 
  isOpen, 
  onClose, 
  item, 
  onSave 
}: EditGalleryItemModalProps) {
  const [formData, setFormData] = useState(item);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (formData.type === 'video') {
        const vimeoError = validateVimeoUrl(formData.url);
        if (vimeoError) {
          throw new Error(vimeoError);
        }
        formData.url = formatVimeoUrl(formData.url);
      }

      // Test image loading (for thumbnail or image)
      const testUrl = formData.type === 'video' ? formData.thumbnailUrl : formData.url;
      if (testUrl) {
        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Նկարը հասանելի չէ'));
          img.src = testUrl;
        });
      }

      onSave(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Սխալ է տեղի ունեցել');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">
            {formData.type === 'video' ? 'Փոխել տեսանյութը' : 'Փոխել նկարը'}
          </h3>
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
              value={formData.title || ''}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
              placeholder="Վերնագիր..."
            />
          </div>

          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
              {formData.type === 'video' ? 'Vimeo հղում' : 'Նկարի հղում'}
            </label>
            <input
              type="url"
              id="url"
              value={formData.url}
              onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
              placeholder={formData.type === 'video' ? 'https://vimeo.com/...' : 'https://...'}
              required
            />
          </div>

          {formData.type === 'video' && (
            <div>
              <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-300 mb-2">
                Մանրապատկերի հղում
              </label>
              <input
                type="url"
                id="thumbnailUrl"
                value={formData.thumbnailUrl || ''}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
                placeholder="https://..."
                required
              />
            </div>
          )}

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
              disabled={isSubmitting}
            >
              Չեղարկել
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-400 
                disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                'Պահպանել'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
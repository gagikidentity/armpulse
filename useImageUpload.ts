import { useState, useCallback } from 'react';
import { uploadTeamMemberImage } from '../../../utils/teamStorage';

interface UseImageUploadProps {
  memberId: string;
  currentImage: string;
  onImageChange: (image: string) => void;
}

export const useImageUpload = ({
  memberId,
  currentImage,
  onImageChange
}: UseImageUploadProps) => {
  const [previewUrl, setPreviewUrl] = useState(currentImage);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = useCallback(async (file: File) => {
    setIsUploading(true);
    setError(null);
    
    try {
      const publicUrl = await uploadTeamMemberImage(memberId, file);
      onImageChange(publicUrl);
      return true;
    } catch (err) {
      setError(err instanceof Error 
        ? err.message 
        : 'Տեղի է ունեցել սխալ: Խնդրում ենք փորձել կրկին');
      return false;
    } finally {
      setIsUploading(false);
    }
  }, [memberId, onImageChange]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Show preview immediately
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    const success = await handleUpload(file);
    if (!success) {
      setPreviewUrl(currentImage); // Restore previous image on failure
    }
  };

  return {
    previewUrl,
    isUploading,
    error,
    handleFileChange
  };
};
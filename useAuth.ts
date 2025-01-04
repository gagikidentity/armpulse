import { useState } from 'react';
import { signIn } from '../../utils/auth/authService';
import { getAuthErrorMessage } from '../../utils/auth/errors';

export const useAuth = (onSuccess?: () => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      await signIn(email, password);
      onSuccess?.();
    } catch (err) {
      const message = err instanceof Error ? getAuthErrorMessage(err.message) : getAuthErrorMessage('');
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    handleLogin
  };
};
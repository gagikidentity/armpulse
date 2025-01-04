import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ForgotPasswordFormProps {
  onBack: () => void;
}

export default function ForgotPasswordForm({ onBack }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      setMessage({
        type: 'success',
        text: 'Գաղտնաբառը վերականգնելու հղումն ուղարկվել է ձեր էլ․ հասցեին'
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Սխալ է տեղի ունեցել: Խնդրում ենք փորձել կրկին'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">Վերականգնել գաղտնաբառը</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Էլ․ հասցե
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {message && (
          <p className={`text-sm ${message.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
            {message.text}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-amber-500 text-black rounded-md hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Ուղարկել'
            )}
          </button>
          
          <button
            type="button"
            onClick={onBack}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Վերադառնալ
          </button>
        </div>
      </form>
    </div>
  );
}
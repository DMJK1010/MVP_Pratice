'use client';

import { useState } from 'react';
import GuestbookInput from './GuestbookInput';
import SubmitButton from './SubmitButton';

interface GuestbookFormProps {
  onSubmit: (content: string) => void;
}

export default function GuestbookForm({ onSubmit }: GuestbookFormProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSubmit(message);
      setMessage('');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
      }}
    >
      <GuestbookInput value={message} onChange={setMessage} />
      <SubmitButton onClick={handleSubmit} disabled={!message.trim()} />
    </div>
  );
}

'use client';

interface GuestbookInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function GuestbookInput({
  value,
  onChange,
  placeholder = '방명록을 남겨보세요.',
}: GuestbookInputProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="body"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 12px',
        height: '40px',
        width: '100%',
        background: 'var(--gray-01)',
        borderRadius: '8px',
        border: 'none',
        outline: 'none',
        color: 'var(--gray-03)',
      }}
    />
  );
}

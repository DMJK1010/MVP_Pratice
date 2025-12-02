'use client';

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function SubmitButton({
  onClick,
  disabled = false,
}: SubmitButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '36px',
        height: '36px',
        minWidth: '36px',
        minHeight: '36px',
        background: disabled ? 'var(--gray-02)' : 'var(--primary-blue)',
        borderRadius: '100px',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        flexShrink: 0,
      }}
    >
      {/* Arrow Up Icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 4L10 16M10 4L5 9M10 4L15 9"
          stroke="var(--gray-00)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

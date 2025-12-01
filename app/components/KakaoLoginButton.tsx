'use client';

import Image from 'next/image';

export default function KakaoLoginButton() {
  const handleLogin = () => {
    // TODO: Supabase 카카오 로그인 연동
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0 12px',
        gap: '6px',
        height: '40px',
        background: '#FEE500',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      <Image
        src="/kakao.svg"
        alt="카카오"
        width={18}
        height={18}
      />
      <span
        className="title2"
        style={{ color: 'var(--gray-03)' }}
      >
        로그인
      </span>
    </button>
  );
}

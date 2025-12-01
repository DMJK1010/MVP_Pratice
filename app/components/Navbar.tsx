'use client';

import Image from 'next/image';
import KakaoLoginButton from './KakaoLoginButton';

interface NavbarProps {
  isLoggedIn?: boolean;
  userName?: string;
  profileImage?: string;
  onLogout?: () => void;
}

export default function Navbar({
  isLoggedIn = false,
  userName = '',
  profileImage = '/profile-default.png',
  onLogout,
}: NavbarProps) {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 var(--page-padding)',
        height: '52px',
        width: '100%',
        maxWidth: '390px',
        margin: '0 auto',
      }}
    >
      {/* 로고 */}
      <div className="logo">
        <Image
          src="/logo.png"
          alt="조선대학교"
          width={36}
          height={36}
          className="logo-image"
        />
        <span className="logo-text">방명록</span>
      </div>

      {/* 로그인 상태에 따른 우측 영역 */}
      {isLoggedIn ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          {/* 유저 정보 */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <Image
              src={profileImage}
              alt="프로필"
              width={20}
              height={20}
              style={{ borderRadius: '100px' }}
            />
            <span className="title1">{userName}</span>
          </div>

          {/* 로그아웃 버튼 */}
          <button
            onClick={onLogout}
            className="title2"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gray-02)',
              cursor: 'pointer',
            }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <KakaoLoginButton />
      )}
    </nav>
  );
}

import KakaoLoginButton from './components/KakaoLoginButton';

export default function Home() {
  return (
    <main style={{ padding: 'var(--page-padding)' }}>
      <h1 className="title1">방명록</h1>
      <div style={{ marginTop: '20px' }}>
        <KakaoLoginButton />
      </div>
    </main>
  );
}

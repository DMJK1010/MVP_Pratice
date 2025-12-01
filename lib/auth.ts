import { supabase } from '@/lib/supabase';

// 카카오 로그인
export async function signInWithKakao() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'kakao',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: {
        scope: 'profile_nickname profile_image',
      },
    },
  });

  if (error) {
    console.error('로그인 에러:', error.message);
  }
}

// 로그아웃
export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('로그아웃 에러:', error.message);
  }
}

// 현재 사용자 정보 가져오기
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

# 오늘, 한 줄 - 방명록

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16.0.6-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=kakao&logoColor=black"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</div>

## 📚 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [주요 기능](#-주요-기능)
- [프로젝트 구조](#-프로젝트-구조)
- [개발 환경 설정](#-개발-환경-설정)
- [배포](#-배포)

## 📝 프로젝트 소개

카카오 로그인으로 간편하게 방명록을 남길 수 있는 웹 애플리케이션입니다.<br>
Next.js App Router와 Supabase를 활용한 풀스택 프로젝트입니다.

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 16.0.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Font**: Pretendard, Binggrae Taom

### Backend
- **API**: Next.js Route Handlers
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth + Kakao OAuth

### Infrastructure
- **Hosting**: Vercel
- **Database**: Supabase Cloud

## ✨ 주요 기능

### 🔐 카카오 로그인
- Supabase Auth를 통한 카카오 OAuth 로그인
- 프로필 이미지 및 닉네임 자동 연동

### 📝 방명록
- 방명록 작성 및 조회
- 작성자 프로필 이미지 표시
- 최신순 정렬

### 🎨 디자인
- 노트 스타일 배경
- 반응형 모바일 최적화 (375px)

## 📁 프로젝트 구조

```
guest-book/
├── app/
│   ├── api/
│   │   └── guestbook/
│   │       └── route.ts      # 방명록 API (GET, POST)
│   ├── auth/
│   │   └── callback/
│   │       └── route.ts      # OAuth 콜백 처리
│   ├── components/
│   │   ├── GuestbookCard.tsx # 방명록 카드
│   │   ├── GuestbookForm.tsx # 입력 폼
│   │   ├── GuestbookInput.tsx
│   │   ├── KakaoLoginButton.tsx
│   │   ├── Navbar.tsx
│   │   └── SubmitButton.tsx
│   ├── styles/
│   │   ├── color.css         # 컬러 시스템
│   │   ├── typography.css    # 타이포그래피
│   │   ├── spacing.css       # 스페이싱
│   │   └── components.css    # 컴포넌트 스타일
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # 메인 페이지
├── lib/
│   ├── auth.ts               # 인증 서버 액션
│   └── supabase/
│       ├── client.ts         # 브라우저용 클라이언트
│       └── server.ts         # 서버용 클라이언트
├── public/
│   ├── fonts/                # 로컬 폰트
│   ├── kakao.svg
│   ├── logo.png
│   └── empty.svg
├── docs/
│   └── supabase-setup.md     # Supabase 설정 가이드
└── .env.local                # 환경 변수 (비공개)
```

## 🛠 개발 환경 설정

### 필수 요구사항

- Node.js 20.x 이상
- npm 또는 yarn

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/guest-book.git
cd guest-book
npm install
```

### 2. Supabase 설정

#### 2-1. 프로젝트 생성
1. [Supabase](https://supabase.com) 접속 및 로그인
2. **New Project** 클릭
3. 프로젝트 정보 입력:
   - Name: `guestbook`
   - Database Password: 비밀번호 설정
   - Region: `Northeast Asia (Seoul)`
4. **Create new project** 클릭

#### 2-2. 테이블 생성
1. 왼쪽 메뉴 **SQL Editor** 클릭
2. 다음 SQL 실행:

```sql
create table guestbook (
  id uuid default gen_random_uuid() primary key,
  user_name varchar not null,
  profile_image text,
  content text not null,
  created_at timestamp with time zone default now()
);
```

#### 2-3. API 키 확인
1. **Project Settings** → **API** 탭
2. 다음 값 복사:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...`

### 3. 카카오 개발자 설정

#### 3-1. 앱 생성
1. [카카오 개발자](https://developers.kakao.com) 접속
2. **내 애플리케이션** → **애플리케이션 추가하기**
3. 앱 이름 입력 후 저장

#### 3-2. 플랫폼 등록
1. **앱 설정** → **플랫폼**
2. **Web 플랫폼 등록**:
   - 사이트 도메인: `http://localhost:3000` (개발용)

#### 3-3. 카카오 로그인 설정
1. **제품 설정** → **카카오 로그인**
2. **활성화 설정**: ON
3. **Redirect URI 등록**:
   ```
   https://YOUR_SUPABASE_PROJECT_ID.supabase.co/auth/v1/callback
   ```

#### 3-4. 동의 항목 설정
1. **카카오 로그인** → **동의항목**
2. 다음 항목 **필수 동의**로 설정:
   - 닉네임
   - 프로필 사진

#### 3-5. 앱 키 확인
1. **앱 설정** → **앱 키**
2. **REST API 키** 복사

### 4. Supabase 카카오 Provider 설정

1. Supabase 대시보드 → **Authentication** → **Providers**
2. **Kakao** 클릭하여 활성화
3. 입력:
   - **Client ID**: 카카오 REST API 키
   - **Client Secret**: 카카오 Client Secret (앱 키 → 보안 → Client Secret 발급)

### 5. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일 생성:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...your-anon-key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 6. 로컬 실행

```bash
npm run dev
```

http://localhost:3000 접속

## 🚀 배포

### Vercel 배포

#### 1. Vercel 연결
1. [Vercel](https://vercel.com) 접속 및 GitHub 로그인
2. **Add New Project**
3. GitHub 저장소 선택 (`guest-book`)
4. **Import**

#### 2. 환경 변수 설정
**Environment Variables**에 추가:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGci...` |
| `NEXT_PUBLIC_BASE_URL` | `https://your-app.vercel.app` |

#### 3. 배포
**Deploy** 클릭

#### 4. 배포 후 설정 업데이트

배포 완료 후 Vercel URL을 확인하고:

**카카오 개발자**:
- 플랫폼 → Web → 사이트 도메인 추가: `https://your-app.vercel.app`
- 카카오 로그인 → Redirect URI는 Supabase URL이므로 변경 불필요

**Supabase**:
- Authentication → URL Configuration → Site URL: `https://your-app.vercel.app`

## 📚 API 문서

### REST API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/guestbook` | 방명록 목록 조회 (최신순) |
| POST | `/api/guestbook` | 방명록 작성 |

### POST `/api/guestbook` Request Body

```json
{
  "user_name": "홍길동",
  "profile_image": "https://k.kakaocdn.net/...",
  "content": "안녕하세요!"
}
```

---

<div align="center">
  <sub>Built with ❤️ for 조선대학교 특강</sub>
</div>

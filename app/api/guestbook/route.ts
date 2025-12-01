import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

// GET - 방명록 목록 조회 (최신순)
export async function GET() {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST - 방명록 작성
export async function POST(request: Request) {
  const body = await request.json();
  const { user_name, content } = body;

  if (!user_name || !content) {
    return NextResponse.json(
      { error: '이름과 내용을 입력해주세요.' },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from('guestbook')
    .insert({ user_name, content })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

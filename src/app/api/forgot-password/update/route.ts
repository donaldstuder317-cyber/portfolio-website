import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      message: 'Password update is disabled in this demo deployment.',
      disabled: true,
    },
    { status: 200 },
  );
}

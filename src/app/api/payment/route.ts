import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    {
      message: 'Payments are disabled in this demo deployment.',
      disabled: true,
    },
    { status: 200 },
  );
}

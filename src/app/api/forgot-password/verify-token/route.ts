import { NextResponse } from 'next/server';

export const POST = async () => {
  return NextResponse.json(
    {
      message: 'Password reset is disabled in this demo deployment.',
      disabled: true,
    },
    { status: 200 },
  );
};

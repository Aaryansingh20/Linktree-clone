import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import connectToDatabase from '../../lib/mongodb';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  await connectToDatabase();

  // Perform MongoDB operations here
  
  return NextResponse.json({ message: 'Protected data' });
}

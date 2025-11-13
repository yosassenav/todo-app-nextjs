import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export async function GET() {
    try {
        // Perform a simple query to check the connection
        await prisma.$queryRaw`SELECT 1`;
        return NextResponse.json({ status: 'Database connection successful' }, { status: 200 });
    } catch (error: any) {
        console.error('Database connection error:', error);
        return NextResponse.json({ status: 'Database connection failed', error: error.message }, { status: 500 });
    }
}
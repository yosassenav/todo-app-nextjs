import { prisma } from '@/app/lib/prisma'

export default async function Home() {
  let dbStatus = 'Checking...';
  let errorDetails = null;

  try {
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = 'Database connection successful';
  } catch (error: any) {
    dbStatus = 'Database connection failed';
    errorDetails = error.message;
    console.error('Database connection error in server component:', error);
  }

  return (
    <div>
      <h1>Database Health Check</h1>
      <p>Status: {dbStatus}</p>
      {errorDetails && <p>Error: {errorDetails}</p>}
    </div>
  );
}

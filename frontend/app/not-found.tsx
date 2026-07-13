'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ROUTES } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <Card className="w-full max-w-[420px]">
        <CardContent className="flex flex-col items-center gap-4 py-8 text-center">
          <h1 className="text-5xl font-bold text-foreground">404</h1>
          <p className="text-muted-foreground">The page you&apos;re looking for doesn&apos;t exist.</p>
          <Link href={ROUTES.HOME}>
            <Button>Go Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

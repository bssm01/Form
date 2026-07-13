'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { formatDate } from 'date-fns';
import { Edit, User as UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/hooks/use-auth';
import { ROUTES } from '@/lib/constants';
import type { User } from '@/types/user';

export default function ProfilePage() {
  const { user: authUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !authUser) {
      router.push(ROUTES.LOGIN);
    }
  }, [authUser, authLoading, router]);

  useEffect(() => {
    if (authUser) {
      setProfile(authUser);
      setLoading(false);
    }
  }, [authUser]);

  if (authLoading || loading) {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="flex w-full max-w-[700px] flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-sm)]">
          <Skeleton className="h-24 w-24 rounded-full" />
          <div className="space-y-2 text-center">
            <Skeleton className="mx-auto h-7 w-48" />
            <Skeleton className="mx-auto h-5 w-40" />
          </div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  const initials = profile.fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-[700px]">
        <CardContent className="flex flex-col items-center gap-6 py-4">
          <Avatar className="h-24 w-24">
            <AvatarFallback className="bg-muted text-2xl font-semibold text-foreground">
              {initials || <UserIcon className="h-12 w-12" />}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold text-foreground">{profile.fullName}</h1>
            <p className="text-muted-foreground">{profile.email}</p>
          </div>

          {profile.bio && (
            <p className="text-center text-sm text-muted-foreground">{profile.bio}</p>
          )}

          <p className="text-xs text-muted-foreground">
            Joined {formatDate(new Date(profile.createdAt), 'MMMM d, yyyy')}
          </p>

          <Link href={ROUTES.PROFILE_EDIT}>
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

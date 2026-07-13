import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Authentication SaaS
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          A modern, secure authentication system. Create your account and manage your profile with ease.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href={ROUTES.REGISTER}>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <Link href={ROUTES.LOGIN}>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

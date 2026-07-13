'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext, type AuthContextType } from '@/hooks/use-auth';
import { authService } from '@/services/api';
import { userService } from '@/services/user';
import type { User } from '@/types/user';
import { ApiError } from '@/lib/api';
import { ROUTES } from '@/lib/constants';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const refreshUser = useCallback(async () => {
    try {
      const response = await userService.getMe();
      setUser(response.data);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      try {
        await refreshUser();
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, [refreshUser]);

  const login = useCallback(
    async (email: string, password: string) => {
      await authService.login({ email, password });
      await refreshUser();
      router.push(ROUTES.PROFILE);
    },
    [refreshUser, router],
  );

  const register = useCallback(
    async (fullName: string, email: string, password: string) => {
      await authService.register({ fullName, email, password });
      await refreshUser();
      router.push(ROUTES.PROFILE);
    },
    [refreshUser, router],
  );

  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      router.push(ROUTES.LOGIN);
    }
  }, [router]);

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

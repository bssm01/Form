import { api } from '@/lib/api';
import type { LoginCredentials, RegisterData, AuthResponse } from '@/types/auth';

export const authService = {
  register: (data: RegisterData) => api.post<AuthResponse>('/api/auth/register', data),

  login: (data: LoginCredentials) => api.post<AuthResponse>('/api/auth/login', data),

  logout: () => api.post<{ message: string }>('/api/auth/logout'),
};

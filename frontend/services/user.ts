import { api } from '@/lib/api';
import type { User, UpdateUserData } from '@/types/user';

export const userService = {
  getMe: () => api.get<User>('/api/users/me'),

  updateProfile: (data: UpdateUserData) => api.patch<User>('/api/users/me', data),
};

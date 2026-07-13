export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
} as const;

export const JWT_COOKIE_NAME = 'access_token';

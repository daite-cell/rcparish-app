import { lazy } from 'react';
import type { AppRoute } from '../types';

const DashBoard = lazy(() => import('../features/dashboard'));
export const appRoutes: AppRoute[] = [{ path: '/dashboard', name: 'Dashboard', element: <DashBoard />, layout: true }];

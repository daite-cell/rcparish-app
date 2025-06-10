import { lazy } from 'react';
import type { AppRoute } from '../types';

const DashBoard = lazy(() => import('../features/dashboard/pages'));
const ReligiousPeople = lazy(() => import('../features/religious-people/pages'));
const Diocese = lazy(() => import('../features/diocese/pages'));
export const appRoutes: AppRoute[] = [
	{ path: '/dashboard', name: 'Dashboard', element: <DashBoard />, layout: true },
	{ path: '/religious_people', name: 'ReligiousPeople', element: <ReligiousPeople />, layout: true },
	{ path: '/diocese', name: 'Diocese', element: <Diocese />, layout: true },
];

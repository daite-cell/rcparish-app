import { lazy } from 'react';
import type { AppRoute } from '../types';

const DashBoardPage = lazy(() => import('../features/dashboard/pages/dashboard-page'));
const QueriesFormPage = lazy(() => import('../features/dashboard/pages/queries-form'));
const ReligiousPeople = lazy(() => import('../features/religious-people/pages'));
const RequestToBishop = lazy(() => import('../features/dashboard/pages/request-to-bishop'));
const Diocese = lazy(() => import('../features/diocese/pages/diocese-page'));
const PiousGroupPage = lazy(() => import('../features/pious-group/pages/pious-group-page'));
const ParishPage = lazy(() => import('../features/parish/pages/parish-page'));
const CommonPoolPage = lazy(() => import('../features/common-pool/pages/common-pool-page'));
const HousesPage = lazy(() => import('../features/houses/pages/houses-page'));
const AccountingPage = lazy(() => import('../features/accounting/pages/accounting-page'));
const PropertiesPage = lazy(() => import('../features/properties/pages/properties-page'));
const RegisterPage = lazy(() => import('../features/register/pages/register-page'));
const RuleInParishPage = lazy(() => import('../features/parish/pages/rule-in-parish-page'));

export const appRoutes: AppRoute[] = [
	{ path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, layout: true },
	{ path: '/query_from_bishop', name: 'QueriesFormBishop', element: <QueriesFormPage />, layout: true },
	{ path: '/query_from_people', name: 'QueriesFormPeople', element: <QueriesFormPage />, layout: true },
	{ path: '/request_to_bishop', name: 'RequestToBishop', element: <RequestToBishop />, layout: true },
	{ path: '/religious_people', name: 'ReligiousPeople', element: <ReligiousPeople />, layout: true },
	{ path: '/diocese/history', name: 'Diocese', element: <Diocese />, layout: true },
	{ path: '/pious_group/parish_council_members', name: 'PiousGroup', element: <PiousGroupPage />, layout: true },
	{ path: '/parish/parish_history', name: 'Parish', element: <ParishPage />, layout: true },
	{ path: 'common_pool/search_family', name: 'CommonPool', element: <CommonPoolPage />, layout: true },
	{ path: '/houses/institutions', name: 'Houses', element: <HousesPage />, layout: true },
	{ path: '/accounting/subscription', name: 'Accounting', element: <AccountingPage />, layout: true },
	{ path: '/properties/rent_details', name: 'Properties', element: <PropertiesPage />, layout: true },
	{ path: '/sacraments/chronicles', name: 'Register', element: <RegisterPage />, layout: true },
	{ path: '/parish/:rule', name: 'RuleInParish', element: <RuleInParishPage />, layout: true },
];

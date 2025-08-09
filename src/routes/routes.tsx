import { lazy } from 'react';
import type { AppRoute } from '../types';

const DashBoardPage = lazy(() => import('../features/dashboard/pages/dashboard-page'));
const QueriesFormPage = lazy(() => import('../features/dashboard/pages/queries-form'));
const ReligiousPeopleGenericPage = lazy(
	() => import('../features/religious-people/pages/religious-people-generic-page')
);
const RegisterGenericPage = lazy(() => import('../features/register/pages/register-generic-page'));
const AccountingGenericPage = lazy(() => import('../features/accounting/pages/accounting-generic-page'));
const ParishGenericPage = lazy(() => import('../features/parish/pages/parish-generic-page'));
const HousesGenericPage = lazy(() => import('../features/houses/pages/houses-generic-page'));
const CommonPoolGenericPage = lazy(() => import('../features/common-pool/pages/common-pool-generic-page'));
const PiousGroupGenericPage = lazy(() => import('../features/pious-group/pages/pious-group-generic-page'));
const PropertiesGenericPage = lazy(() => import('../features/properties/pages/properties-generic-page'));
const DioceseGenericPage = lazy(() => import('../features/diocese/pages/diocese-generic-page'));
const DioceseStatutesGenericPage = lazy(() => import('../features/diocese/pages/diocese-statutes-generic-page'));
const RulesOfParishGenericPage = lazy(() => import('../features/parish/pages/rule-of-parish-page'));
const DashboardGenericPage = lazy(() => import('../features/dashboard/pages/dashboard-generic-page'));
const HistoryPage = lazy(() => import('../features/diocese/pages/history-page'));
const Profile = lazy(() => import('../features/profile/index'));
const PriestsGenericPage = lazy(() => import('../features/diocese/pages/priests-generic-page'));

export const appRoutes: AppRoute[] = [
	{ path: '/dashboard', name: 'Dashboard', element: <DashBoardPage />, layout: true },
	{ path: '/query_from_bishop', name: 'QueriesFormBishop', element: <QueriesFormPage />, layout: true },
	{ path: '/query_from_people', name: 'QueriesFormPeople', element: <QueriesFormPage />, layout: true },
	{
		path: '/request_to_bishop',
		name: 'RequestToBishop',
		element: <DashboardGenericPage />,
		layout: true,
	},
	{
		path: '/sermon',
		name: 'sermon',
		element: <DashboardGenericPage />,
		layout: true,
	},
	{
		path: '/religious_people/:type',
		name: 'ReligiousPeopleGeneric',
		element: <ReligiousPeopleGenericPage />,
		layout: true,
	},

	{
		path: '/sacraments/:type',
		name: 'RegisterGeneric',
		element: <RegisterGenericPage />,
		layout: true,
	},
	{
		path: '/accounting/:type',
		name: 'AccountingGeneric',
		element: <AccountingGenericPage />,
		layout: true,
	},
	{
		path: '/parish/:type',
		name: 'ParishGeneric',
		element: <ParishGenericPage />,
		layout: true,
	},
	{
		path: '/houses/:type',
		name: 'HousesGeneric',
		element: <HousesGenericPage />,
		layout: true,
	},
	{
		path: '/common_pool/:type',
		name: 'CommonPoolGeneric',
		element: <CommonPoolGenericPage />,
		layout: true,
	},
	{
		path: '/pious_group/:type',
		name: 'PiousGroupGeneric',
		element: <PiousGroupGenericPage />,
		layout: true,
	},

	{
		path: '/properties/:type',
		name: 'PropertiesGeneric',
		element: <PropertiesGenericPage />,
		layout: true,
	},
	{
		path: '/diocese/history',
		name: 'History',
		element: <HistoryPage />,
		layout: true,
	},
	{
		path: '/diocese/patron_saints',
		name: 'PatronSaints',
		element: <HistoryPage />,
		layout: true,
	},
	{
		path: '/diocese/priests/:id',
		name: 'DioceseGeneric',
		element: <PriestsGenericPage />,
		layout: true,
	},

	{
		path: '/diocese/:type',
		name: 'DioceseGeneric',
		element: <DioceseGenericPage />,
		layout: true,
	},

	{
		path: '/diocese/statutes/:rule',
		name: 'DioceseStatutesGeneric',
		element: <DioceseStatutesGenericPage />,
		layout: true,
	},
	{
		path: 'parish/rules/:rule',
		name: 'RulesOfParishGeneric',
		element: <RulesOfParishGenericPage />,
		layout: true,
	},
	{
		path: '/:type',
		name: 'DashboardGeneric',
		element: <DashboardGenericPage />,
		layout: true,
	},
	{
		path: '/profile',
		name: 'Profile',
		element: <Profile />,
		layout: true,
	},
];

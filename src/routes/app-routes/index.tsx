import { Suspense, type JSX } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout';
import { appRoutes } from '../routes';
import Loading from '@/components/loading';

const AppRoutes = (): JSX.Element => {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Navigate to="/dashboard" replace />} />
				<Route element={<MainLayout />}>
					{appRoutes
						.filter((route) => route.layout)
						.map(({ path, element }, index) => (
							<Route key={index} path={path} element={element} />
						))}
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;

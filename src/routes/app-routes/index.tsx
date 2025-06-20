import { Suspense, type JSX } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../../layouts/main-layout';
import { appRoutes } from '../routes';
import Loading from '@/components/loading';
import { useAutoDocumentTitle } from '@/hooks/useAutoDocumentTitle';

const AppRoutes = (): JSX.Element => {
	useAutoDocumentTitle();
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
					<Route
						path="*"
						element={
							<div className="h-[500px] flex items-center justify-center text-2xl text-red-600">
								404 - Page Not Found
							</div>
						}
					/>
				</Route>
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;

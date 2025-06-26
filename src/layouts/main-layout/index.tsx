import { Outlet } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/app-sidebar';
import AppNavbar from '@/components/app-navbar';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const MainLayout = () => {
	return (
		<div className="flex h-screen overflow-hidden">
			<SidebarProvider>
				<AppSideBar />

				<div className=" flex-1 overflow-auto">
					<AppNavbar />
					<Outlet />
				</div>
			</SidebarProvider>
			{process.env.NODE_ENV === 'production' && <SpeedInsights />}
			{process.env.NODE_ENV === 'production' && <Analytics />}
		</div>
	);
};
export default MainLayout;

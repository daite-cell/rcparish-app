import { Outlet } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/app-sidebar';
import AppNavbar from '@/components/app-navbar';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
			<SpeedInsights />
		</div>
	);
};
export default MainLayout;

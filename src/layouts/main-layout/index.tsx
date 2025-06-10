import { Outlet } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/app-sidebar';
import AppNavbar from '@/components/app-navbar';

const MainLayout = () => {
	return (
		<div className="flex h-screen overflow-hidden">
			<SidebarProvider>
				<AppSideBar />

				<div className="flex flex-col flex-1 overflow-auto">
					<AppNavbar />
					<Outlet />
				</div>
			</SidebarProvider>
		</div>
	);
};
export default MainLayout;

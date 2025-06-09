import { Outlet } from 'react-router-dom';

import { SidebarProvider } from '@/components/ui/sidebar';
import AppSideBar from '@/components/app-sidebar';
import AppNavbar from '@/components/app-navbar';

const MainLayout = () => {
	return (
		<div className="overflow-auto flex flex-col w-full">
			<SidebarProvider>
				<AppSideBar />
				<div className="w-full">
					<AppNavbar />
					<Outlet />
				</div>
			</SidebarProvider>
		</div>
	);
};
export default MainLayout;

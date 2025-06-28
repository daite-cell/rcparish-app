import { SidebarTrigger, useSidebar } from '../ui/sidebar';
import { NavLink } from 'react-router-dom';
import navItems from '@/data/navbar-content';
import { memo } from 'react';
import AppNavHeader from '../app-nav-header';
import { usePathName } from '@/utils/getPathName';

const AppNavbar = memo(() => {
	const { state } = useSidebar();
	const pathName = usePathName();

	const getParentPathName = (pathName: string) => pathName.split('/')[1];

	const renderSidebarTrigger = (additionalClasses: string) => (
		<SidebarTrigger
			className={`absolute left-0 top-4 text-white bg-[#343148] z-50 p-2 hover:bg-[#413e52] ${additionalClasses}`}
		/>
	);

	return (
		<>
			{pathName !== '/profile' && <AppNavHeader />}

			<div className="w-full text-[13px] bg-[#343148] border border-[#413e52] overflow-auto whitespace-nowrap text-center flex justify-between hide-scrollbar">
				{pathName !== '/profile' ? (
					navItems.map((item, index) => (
						<NavLink
							key={index}
							to={item.to}
							className={({ isActive }) =>
								`inline-block text-[#d7c49e] text-center px-[15px] py-[13px] border-b-4 border-[#343148] ${
									isActive || getParentPathName(pathName) === getParentPathName(item.to)
										? 'border-[#d7c49e] bg-[#483f44]'
										: ''
								} hover:border-[#d7c49e] transition-all hover:bg-[#48453f]`
							}
						>
							{item.label}
						</NavLink>
					))
				) : (
					<div>
						{state !== 'expanded' && renderSidebarTrigger('hidden md:block')}
						{renderSidebarTrigger('md:hidden')}
						<h1 className="uppercase text-primary text-[14px] font-bold py-4 px-7">
							Initial 24 Steps and Input Flow for the Data Records :
						</h1>
					</div>
				)}
			</div>
		</>
	);
});

export default AppNavbar;

import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarTrigger } from '@/components/ui/sidebar';
import { Input } from '../ui/input';
import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathname } from '@/utils/getSectionByPathname';
import NavLinksSection from '../nav-links-section';
import { UserInfo } from '@/components';

export default function AppSideBar() {
	const { pathname: pathName } = useLocation();

	const filter_nav_links = useMemo(
		() => [getSectionByPathname(side_nav_links, pathName)].filter(Boolean).filter((item) => item !== null),
		[pathName]
	);

	const haveDashboardNavigation = useMemo(
		() => ['/dashboard', '/query_from_bishop', '/query_from_people', '/request_to_bishop'].includes(pathName),
		[pathName]
	);

	return (
		<Sidebar className=" border-secondary">
			<div className="overflow-auto hide-scrollbar ">
				<SidebarContent className="border-0 bg-secondary text-primary">
					<div className="flex items-center justify-between px-5 py-2.5">
						<Link to="/dashboard" className="text-md font-semibold ">
							RCPARISH
						</Link>
						<SidebarTrigger className="hover:bg-transparent hover:text-primary " />
					</div>
					<UserInfo userName="Fr. Gnanasekar S A" userEmail="sagsekar82@gmail.com" />

					<div className="relative w-full px-5 text-primary border-t border-b border-[#413e52] py-3">
						<Input
							className="bg-[#413e52] rounded-none focus:outline-none focus:none border-none"
							type="text"
							placeholder="Search..."
						/>
						<span className="absolute -translate-y-1/2 right-8 top-1/2 text-muted-foreground">
							<Search className="w-4 h-4 " />
						</span>
					</div>
					<div className="px-5 py-3">{haveDashboardNavigation && <h1 className="font-bold text-primary">Menu</h1>}</div>
					<NavLinksSection navData={filter_nav_links} pathName={pathName} />
				</SidebarContent>
			</div>
		</Sidebar>
	);
}

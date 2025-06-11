import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { side_nav_links } from '@/data/side-navbar-content';
import CircularProgress from '../circular-progress';
import { getSectionByPathname } from '@/utils/getSectionByPathname';
import NavLinksSection from '../navlinks-section';

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
						<Link to="/dashboard" className="text-lg font-semibold ">
							RCPARISH
						</Link>
						<SidebarTrigger className="hover:bg-transparent hover:text-primary " />
					</div>
					<div className="p-5 shadow-sm">
						<div className="flex flex-col">
							<div className="mb-5 text-sm text-[#a8926c] " id="today_date">
								June 9, Monday, 2025
							</div>

							<div className="text-sm ">
								Welcome Father, <strong>Fr. Gnanasekar S A</strong>
							</div>

							<div className="mt-1 mb-2 text-sm text-[#a8926c]">sagsekar82@gmail.com</div>
						</div>

						<div className="flex items-center justify-between mt-4">
							<div className="flex items-center ">
								<CircularProgress size={60} />
								<Link className="ml-3 text-sm animate-out hover:underline" to="/dashboard">
									View Profile
								</Link>
							</div>

							<Button
								variant="outline"
								className="text-sm bg-transparent rounded-none hover:bg-primary hover:text-white text-primary border-primary"
							>
								Logout
							</Button>
						</div>
					</div>
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

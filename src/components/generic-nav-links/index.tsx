import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar';
import { dynamic_navLinks_data } from '@/data/side-navbar-content';
import { House, Newspaper, Folder, Link as LinkIcon, BookText, CalendarDays } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import { RulesNavSection } from '@/components';
const Icons = {
	House,
	Newspaper,
	Folder,
	LinkIcon,
	BookText,
	CalendarDays,
};
const GenericNavLinks = () => {
	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}
	const location = useLocation();
	const mainPathName = location.pathname.split('/')[1];
	const navLinksData = dynamic_navLinks_data.find((link) => link.page_path_name === `${mainPathName}`);
	return (
		<>
			<h1 className="font-bold text-[14px] ml-4">{navLinksData?.label}</h1>
			{navLinksData?.page_nav_links.map((section, index) => (
				<SidebarGroup className="px-2 py-1" key={index}>
					<SidebarGroupContent>
						<SidebarMenu>
							<NavLink
								className={({ isActive }) =>
									` hover:text-primary  ${isActive ? 'text-shadow-beige !text-primary bg-[#EED9B32E]' : ''}`
								}
								to={section.path_url}
							>
								<SidebarMenuButton className="hover:bg-transparent active:bg-transparent ">
									<div className="flex hover:bg-transparent text-[#a8926c]   ">
										{isIconKey(section.icon) && (
											<span className="text-primary bg-[#413e52] p-1">
												{React.createElement(Icons[section.icon], {
													className: 'w-4 h-4 ',
												})}
											</span>
										)}

										<span className="ml-4 hover:text-primary">{section.label}</span>
									</div>
								</SidebarMenuButton>
							</NavLink>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			))}
			<RulesNavSection />
		</>
	);
};

export default GenericNavLinks;

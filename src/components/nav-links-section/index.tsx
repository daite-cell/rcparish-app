import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	useSidebar,
} from '@/components/ui/sidebar';
import { ChevronRight, Circle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { House, Newspaper, Folder, Link as LinkIcon, BookText, CalendarDays } from 'lucide-react';
import type { NavLinkProps, NavLinkSectionProps } from '@/types';
import GenericNavLinks from '@/components/generic-nav-links';

const Icons = {
	House,
	Newspaper,
	Folder,
	LinkIcon,
	BookText,
	CalendarDays,
};

const NavLinksSection = ({ navData, pathName }: { navData: NavLinkSectionProps[]; pathName: string }) => {
	const { setOpen } = useSidebar();
	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}

	const haveDashboardNavigation = useMemo(
		() => ['/dashboard', '/query_from_bishop', '/query_from_people', '/request_to_bishop'].includes(pathName),
		[pathName]
	);

	const isParish = pathName.split('/')[1] === 'parish' || pathName.split('/')[1] === 'diocese';

	return (
		<SidebarContent>
			{!haveDashboardNavigation && (
				<div className="ml-2">
					<div className="mb-3 ml-2 font-bold">Home</div>
					<div className="flex hover:bg-transparent text-[#a8926c] ml-2">
						<span className="text-primary bg-[#413e52] p-1">
							<House className="w-4 h-4" />
						</span>
						<Link className="ml-4 hover:text-primary" to="/">
							Dashboard
						</Link>
					</div>
				</div>
			)}
			{isParish ? (
				<GenericNavLinks />
			) : (
				navData.map((section: { page_path_name: string; label: string; page_nav_links: NavLinkProps[] }) => (
					<SidebarGroup key={section?.page_path_name}>
						<SidebarGroupContent>
							<SidebarMenu className="space-y-3 ">
								<>
									{section?.label && <h1 className="ml-2 font-bold text-primary">{section?.label}</h1>}
									{section?.page_nav_links.map((item) => {
										if (item.child_nav_links && item.child_nav_links.length > 0) {
											return (
												<Collapsible key={item.label} className="group/collapsible ">
													<SidebarMenuButton className="hover:!bg-transparent hover:text-primary  " asChild>
														<CollapsibleTrigger className="flex w-full  items-center text-[#a8926c] justify-between  ">
															<div className="flex items-center w-full gap-2 hover:text-primary ">
																{isIconKey(item.icon) && (
																	<span className="text-primary bg-[#413e52] p-1 hover:bg-[#413e52]">
																		{React.createElement(Icons[item.icon], {
																			className: 'w-4 h-4',
																		})}
																	</span>
																)}
																<span className="ml-3">{item.label}</span>
															</div>

															<ChevronRight className="text-[#a8926c]" />
														</CollapsibleTrigger>
													</SidebarMenuButton>

													<CollapsibleContent className="px-6">
														<SidebarMenu>
															{item.child_nav_links.map((child) => (
																<div className="flex items-center  px-4" key={child.label}>
																	<span>
																		<Circle className="w-2 h-2" />
																	</span>
																	<SidebarMenuButton className="hover:text-primary" asChild>
																		<NavLink
																			onClick={() => setOpen(false)}
																			className={() =>
																				`text-[#a8926c]  hover:text-primary hover:bg-transparent active:bg-transparent `
																			}
																			to={child.path_url}
																		>
																			{child.label}
																		</NavLink>
																	</SidebarMenuButton>
																</div>
															))}
														</SidebarMenu>
													</CollapsibleContent>
												</Collapsible>
											);
										}

										return (
											<NavLink
												key={item.label}
												to={item.path_url}
												className={({ isActive }) =>
													` hover:text-primary ${isActive ? 'text-shadow-beige !text-primary bg-[#EED9B32E]' : ''}`
												}
											>
												<SidebarMenu>
													<SidebarMenuButton className=" hover:text-primary active:bg-transparent" asChild>
														<div className="flex hover:bg-transparent text-[#a8926c]  ">
															{isIconKey(item.icon) && (
																<span className="text-primary bg-[#413e52] p-1">
																	{React.createElement(Icons[item.icon], {
																		className: 'w-4 h-4',
																	})}
																</span>
															)}

															<span className="ml-3 hover:text-primary">{item.label}</span>
														</div>
													</SidebarMenuButton>
												</SidebarMenu>
											</NavLink>
										);
									})}
								</>
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))
			)}
		</SidebarContent>
	);
};

export default NavLinksSection;

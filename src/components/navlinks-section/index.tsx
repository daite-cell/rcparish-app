import React, { useMemo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { House, Newspaper, Folder, Link as LinkIcon, BookText, CalendarDays } from 'lucide-react';
import type { NavLinkProps, NavLinkSectionProps } from '@/types';

const Icons = {
	House,
	Newspaper,
	Folder,
	LinkIcon,
	BookText,
	CalendarDays,
};

const NavLinksSection = ({ navData, pathName }: { navData: NavLinkSectionProps[]; pathName: string }) => {
	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}

	const haveDashboardNavigation = useMemo(
		() => ['/dashboard', '/query_from_bishop', '/query_from_people', '/request_to_bishop'].includes(pathName),
		[pathName]
	);

	return (
		<SidebarContent>
			{navData.map((section: { page_path_name: string; label: string; page_nav_links: NavLinkProps[] }) => (
				<SidebarGroup key={section?.page_path_name}>
					<SidebarGroupContent>
						<SidebarMenu className="space-y-3 ">
							<>
								{!haveDashboardNavigation && (
									<>
										<SidebarMenuItem className="ml-3 font-bold">Home</SidebarMenuItem>
										<SidebarMenuItem>
											<div className="flex hover:bg-transparent text-[#a8926c] ml-2">
												<span className="text-primary bg-[#413e52] p-1">
													<House className="w-4 h-4" />
												</span>
												<Link className="ml-5 hover:text-primary" to="/">
													Dashboard
												</Link>
											</div>
										</SidebarMenuItem>
									</>
								)}

								{section?.label && <h1 className="ml-2 font-bold text-primary">{section?.label}</h1>}

								{section?.page_nav_links.map((item) => {
									if (item.child_nav_links && item.child_nav_links.length > 0) {
										return (
											<Collapsible key={item.label} className="group/collapsible ">
												<SidebarMenuItem>
													<SidebarMenuButton className="hover:!bg-transparent hover:text-primary " asChild>
														<CollapsibleTrigger className="flex w-full  items-center text-[#a8926c] justify-between  ">
															<div className="flex items-center w-full gap-2">
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
												</SidebarMenuItem>
												<CollapsibleContent className="">
													<SidebarMenu>
														{item.child_nav_links.map((child) => (
															<SidebarMenuItem key={child.label}>
																<SidebarMenuButton asChild>
																	<NavLink
																		className="text-[#a8926c]  hover:text-primary hover:bg-transparent active:bg-transparent "
																		to={child.path_url}
																	>
																		{child.label}
																	</NavLink>
																</SidebarMenuButton>
															</SidebarMenuItem>
														))}
													</SidebarMenu>
												</CollapsibleContent>
											</Collapsible>
										);
									}

									return (
										<NavLink
											to={item.path_url}
											className={({ isActive }) =>
												` hover:text-primary ${isActive ? 'text-shadow-beige !text-primary bg-[#EED9B32E]' : ''}`
											}
										>
											<SidebarMenuItem key={item.label}>
												<SidebarMenuButton asChild>
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
											</SidebarMenuItem>
										</NavLink>
									);
								})}
							</>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			))}
		</SidebarContent>
	);
};

export default NavLinksSection;

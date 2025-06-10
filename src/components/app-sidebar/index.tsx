import React from 'react';
import { Link } from 'react-router-dom';
import { House, Newspaper, Folder, Search, Link as LinkIcon, BookText, CalendarDays } from 'lucide-react';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ChevronRight } from 'lucide-react';
import { side_nav_links } from '@/data/side-navbar-content';
import CircularProgress from '../circular-progress';
import { usePathname } from '@/utils/getPathname';

export default function AppSideBar() {
	const pathName = usePathname();

	const Icons = {
		House,
		Newspaper,
		Folder,
		LinkIcon,
		BookText,
		CalendarDays,
	};

	const filter_nav_links = side_nav_links.filter((val) => val.page_path_name === pathName);

	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}
	return (
		<Sidebar className=" border-secondary">
			<div className="overflow-auto hide-scrollbar ">
				<SidebarContent className="border-0 bg-secondary text-primary">
					<div className="flex items-center justify-between px-5 py-2.5">
						<a href="/dashboard" className="text-lg font-semibold ">
							RCPARISH
						</a>
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
					<div className="px-5 py-3">
						{pathName === 'dashboard' && <h1 className="font-bold text-primary">Menu</h1>}
					</div>
					<SidebarContent>
						{filter_nav_links.map((section) => (
							<SidebarGroup key={section.page_path_name}>
								<SidebarGroupContent>
									<SidebarMenu className="space-y-3 ">
										<>
											{pathName !== 'dashboard' && (
												<>
													<SidebarMenuItem className="ml-3 font-bold">Home</SidebarMenuItem>
													<SidebarMenuItem>
														<div className="flex hover:bg-transparent text-[#a8926c] ml-2  ">
															<span className="text-primary bg-[#413e52] p-1">
																<House className="w-4 h-4 " />
															</span>

															<Link className="ml-5 hover:text-primary" to={'/'}>
																Dashboard
															</Link>
														</div>
													</SidebarMenuItem>
												</>
											)}
											<h1 className="ml-2 font-bold text-primary">{section.label}</h1>

											{section.page_nav_links.map((item, index) => {
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
															<CollapsibleContent className="ml-4">
																<SidebarMenu>
																	{item.child_nav_links.map((child) => (
																		<SidebarMenuItem key={child.label}>
																			<SidebarMenuButton asChild>
																				<Link
																					className="text-[#a8926c]  hover:text-primary hover:bg-transparent active:bg-transparent "
																					to={child.path_url}
																				>
																					{child.label}
																				</Link>
																			</SidebarMenuButton>
																		</SidebarMenuItem>
																	))}
																</SidebarMenu>
															</CollapsibleContent>
														</Collapsible>
													);
												}

												return (
													<SidebarMenuItem
														className={` ${index === 0 && 'text-shadow-beige !text-primary  bg-[#EED9B32E]'}`}
														key={item.label}
													>
														<SidebarMenuButton asChild>
															<div className="flex hover:bg-transparent text-[#a8926c]  ">
																{isIconKey(item.icon) && (
																	<span className="text-primary bg-[#413e52] p-1">
																		{React.createElement(Icons[item.icon], {
																			className: 'w-4 h-4',
																		})}
																	</span>
																)}

																<Link className="ml-3 hover:text-primary" to={item.path_url}>
																	{item.label}
																</Link>
															</div>
														</SidebarMenuButton>
													</SidebarMenuItem>
												);
											})}
										</>
									</SidebarMenu>
								</SidebarGroupContent>
							</SidebarGroup>
						))}
					</SidebarContent>
				</SidebarContent>
			</div>
		</Sidebar>
	);
}

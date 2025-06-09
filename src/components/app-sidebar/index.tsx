import React from 'react';
import { Link } from 'react-router-dom';
import { House, Newspaper, Folder, Search, Link as LinkIcon } from 'lucide-react';
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

export default function AppSideBar() {
	const Icons = {
		House,
		Newspaper,
		Folder,
		LinkIcon,
	};

	function isIconKey(icon: string): icon is keyof typeof Icons {
		return icon in Icons;
	}
	return (
		<Sidebar className="border-secondary">
			<SidebarContent className="bg-secondary text-primary border-0">
				<div className="flex items-center justify-between px-5 py-2.5">
					<a href="/dashboard" className=" font-semibold text-lg">
						RCPARISH
					</a>
					<SidebarTrigger className="hover:bg-transparent hover:text-primary " />
				</div>
				<div className="p-5  shadow-sm">
					<div className="flex flex-col">
						<div className="mb-5 text-sm text-[#a8926c] " id="today_date">
							June 9, Monday, 2025
						</div>

						<div className="text-sm ">
							Welcome Father, <strong>Fr. Gnanasekar S A</strong>
						</div>

						<div className="mt-1 mb-2 text-sm text-[#a8926c]">sagsekar82@gmail.com</div>
					</div>

					<div className="flex justify-between  items-center  mt-4">
						<div className="flex items-center ">
							<CircularProgress size={60} />
							<Link className="animate-out text-sm hover:underline ml-3" to="/dashboard">
								View Profile
							</Link>
						</div>

						<Button
							variant="outline"
							className="hover:bg-primary bg-transparent text-sm hover:text-white text-primary border-primary rounded-none"
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
					<span className="absolute right-8 top-1/2 -translate-y-1/2 text-muted-foreground">
						<Search className="w-4 h-4 " />
					</span>
				</div>
				<div className="px-5 py-3">
					<h1 className="text-primary font-bold">Menu</h1>
				</div>
				<SidebarContent>
					{side_nav_links.map((section) => (
						<SidebarGroup key={section.page_path_name}>
							<SidebarGroupContent>
								<SidebarMenu className="space-y-3 ">
									{section.page_nav_links.map((item) => {
										if (item.child_nav_links && item.child_nav_links.length > 0) {
											return (
												<Collapsible key={item.label} className="group/collapsible">
													<SidebarMenuItem>
														<SidebarMenuButton className="hover:bg-transparent" asChild>
															<CollapsibleTrigger className="flex w-full items-center justify-between hover:bg-transparent">
																<div className="flex items-center gap-2 bg-secondary">
																	{isIconKey(item.icon) && (
																		<span className="text-primary bg-[#413e52] p-1">
																			{React.createElement(Icons[item.icon], {
																				className: 'w-4 h-4',
																			})}
																		</span>
																	)}
																	<span className="text-[#a8926c]  hover:text-primary ml-3">{item.label} </span>
																</div>

																<ChevronRight className="text-[#a8926c]  hover:text-primary" />
															</CollapsibleTrigger>
														</SidebarMenuButton>
													</SidebarMenuItem>
													<CollapsibleContent className="ml-4">
														<SidebarMenu>
															{item.child_nav_links.map((child) => (
																<SidebarMenuItem key={child.label}>
																	<SidebarMenuButton asChild>
																		<Link className="text-[#a8926c]  hover:text-primary " to={child.path_url}>
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
											<SidebarMenuItem key={item.label}>
												<SidebarMenuButton className="" asChild>
													<div className="flex hover:bg-transparent text-[#a8926c]  ">
														{isIconKey(item.icon) && (
															<span className="text-primary bg-[#413e52] p-1">
																{React.createElement(Icons[item.icon], {
																	className: 'w-4 h-4',
																})}
															</span>
														)}

														<Link className="hover:text-primary ml-3" to={item.path_url}>
															{item.label}
														</Link>
													</div>
												</SidebarMenuButton>
											</SidebarMenuItem>
										);
									})}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					))}
				</SidebarContent>
			</SidebarContent>
		</Sidebar>
	);
}

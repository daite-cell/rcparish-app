import { rules_sub_links } from '@/data/side-navbar-content';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { SidebarMenu, SidebarMenuButton } from '../ui/sidebar';
import { ChevronRight, Gem, Circle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const RulesNavSection = () => {
	return (
		<Collapsible className="ml-2 group/collapsible  ">
			<SidebarMenuButton className="hover:!bg-transparent hover:text-primary " asChild>
				<CollapsibleTrigger className="flex w-full  items-center text-[#a8926c] justify-between  ">
					<div className="flex items-center w-full gap-2">
						<span className="text-primary bg-[#413e52] p-1 hover:bg-[#413e52]">
							<Gem className="w-4 h-4" />
						</span>

						<span className="ml-2">Rules & Regulations</span>
					</div>

					<ChevronRight className="text-[#a8926c]" />
				</CollapsibleTrigger>
			</SidebarMenuButton>

			{rules_sub_links.map((section, index) => (
				<div key={index}>
					<CollapsibleContent className="mt-4">
						<div className="px-5 ">
							<h1 className="font-bold text-[14px]">{section.label}</h1>

							<SidebarMenu className="py-2">
								{section.nav_links.map((link, index) => (
									<NavLink
										className={({ isActive }) =>
											` hover:text-primary  ${isActive ? 'text-shadow-beige !text-primary bg-[#EED9B32E]' : ''}`
										}
										key={index}
										to={link.nav_url}
									>
										<SidebarMenuButton className="hover:bg-transparent">
											<div className="flex items-center hover:bg-transparent text-[#a8926c]   ">
												<span>
													<Circle className="w-2 h-2" />
												</span>
												<span>
													<span className="ml-2 hover:text-primary">{link.nav_link_name}</span>
												</span>
											</div>
										</SidebarMenuButton>
									</NavLink>
								))}
							</SidebarMenu>
							<hr className="my-2 border-b border-[#a8926c]" />
						</div>
					</CollapsibleContent>
				</div>
			))}
		</Collapsible>
	);
};

export default RulesNavSection;

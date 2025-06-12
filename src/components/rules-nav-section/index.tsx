import { rules_sub_links } from '@/data/side-navbar-content';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { ChevronRight, Gem, Circle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const RulesNavSection = () => {
	return (
		<Collapsible className="ml-2 group/collapsible ">
			<SidebarMenuButton className="hover:!bg-transparent hover:text-primary " asChild>
				<CollapsibleTrigger className="flex w-full  items-center text-[#a8926c] justify-between  ">
					<div className="flex items-center w-full gap-2">
						<span className="text-primary bg-[#413e52] p-1 hover:bg-[#413e52]">
							<Gem className="w-4 h-4" />
						</span>

						<span className="ml-3">Rules & Regulations</span>
					</div>

					<ChevronRight className="text-[#a8926c]" />
				</CollapsibleTrigger>
			</SidebarMenuButton>

			{rules_sub_links.map((section, index) => (
				<div key={index}>
					<CollapsibleContent className="px-6">
						<SidebarMenu className=" border-b border-[#a8926c] py-3 " key={index}>
							<h1 className="font-bold">{section.label}</h1>
							{section.nav_links.map((link, index) => (
								<SidebarMenuItem className="flex items-center " key={index}>
									<span>
										<Circle className="w-2 h-2" />
									</span>
									<SidebarMenuButton asChild>
										<NavLink
											className="text-[#a8926c]  hover:text-primary hover:bg-transparent active:bg-transparent "
											to={link.nav_url}
										>
											{link.nav_link_name}
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</CollapsibleContent>
				</div>
			))}
		</Collapsible>
	);
};

export default RulesNavSection;

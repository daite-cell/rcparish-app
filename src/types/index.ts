import type { JSX } from 'react';

export interface AppRoute {
	path: string;
	name: string;
	element: JSX.Element;
	layout?: boolean;
}

export interface NavLinkSectionProps {
	page_path_name: string;
	label: string;
	page_nav_links: NavLinkProps[];
}

export interface NavLinkProps {
	path_url: string;
	label: string;
	icon: string;
	child_nav_links?: NavLinkProps[];
}

import type { JSX, ReactNode } from 'react';

export interface AppRoute {
	path: string;
	name: string;
	element: JSX.Element;
	layout?: boolean;
}

export interface NavLinkSectionProps {
	page_path_name: string;
	nav_side_heading?: string;
	label: string;
	page_nav_links: NavLinkProps[];
}

export interface TabsProps {
	label: string;
}

export interface NavLinkProps {
	path_url: string;
	label: string;
	icon: string;
	tabs?: TabsProps[];
	child_nav_links?: NavLinkProps[];
}

export interface CircularProgressProps {
	size?: number;
	strokeWidth?: number;
	color?: string;
	speed?: number;
}

export interface FormButtonProps {
	label?: string;
	onClick?: () => void;
}

export type InfoHeadingTitleProps = { title: string; style?: string };

export interface InfoParagraphProps {
	children: ReactNode;
	style?: string;
}

export interface BulletPointListProps {
	items?: string[];
	style?: string;
	ordered?: boolean;
}

export interface ParagraphGroupWithTitleProps {
	title: string;
	paragraphs?: string[];
	style?: string;
}

export interface PriestFullInfoProps {
	name: string;
	priestFrom?: string;
	ordinationDate?: string;
	birthDate?: string;
	livingStatus?: string;
	nativePlace?: string;
	aadhaarNumber?: string;
	phoneNumber?: string;
	email?: string;
	address?: string;
}

export type TableRowData = {
	sub_station: string;
	date: string;
	timing: string;
	title: string;
	country: string;
};

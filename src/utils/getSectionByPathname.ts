import type { NavLinkSectionProps } from '@/types';

export const getSectionByPathname = (navLinks: NavLinkSectionProps[], pathname: string) => {
	for (const section of navLinks) {
		if (`/${section.page_path_name}` === pathname) {
			return section;
		}

		for (const link of section.page_nav_links) {
			if (link.path_url === pathname) {
				return section;
			}

			if (link.child_nav_links) {
				for (const child of link.child_nav_links) {
					if (child.path_url === pathname) {
						return section;
					}
				}
			}
		}
	}

	// No match
	return null;
};

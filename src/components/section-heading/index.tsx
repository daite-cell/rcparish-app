import { side_nav_links } from '@/data/side-navbar-content';
import { getSectionByPathname } from '@/utils/getSectionByPathname';
import { useLocation } from 'react-router-dom';

const SectionHeading = () => {
	const location = useLocation();

	const data = getSectionByPathname(side_nav_links, location.pathname);
	const sectionHeading = data?.page_nav_links.find((link) => link.path_url === location.pathname)?.label;
	const dashBoardHeading = ['/query_from_bishop', '/query_from_people'].includes(location.pathname);
	const getHeadingBaseFromPath = [
		{
			path_url: '/sacraments/marriage_registration',
			label: 'Marriage Register',
		},
		{
			path_url: '/sacraments/marriage_proposal',
			label: 'MARRIAGE PROPOSAL',
		},
		{
			path_url: '/accounting/auditing_income',
			label: 'FOR AUDITING - INCOME',
		},
		{
			path_url: '/accounting/auditing_expense',
			label: 'FOR AUDITING - EXPENSE',
		},
	].find((link) => link.path_url === location.pathname)?.label;

	const sectionMainHeading = (dashBoardHeading && 'OPEN Query') || getHeadingBaseFromPath || sectionHeading;

	return <h1 className="text-[16px] font-bold uppercase">{sectionMainHeading}</h1>;
};

export default SectionHeading;

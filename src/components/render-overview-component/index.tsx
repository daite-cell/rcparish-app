import {
	FamilyMembersOverviewLayout,
	ParishCouncilMemberOverview,
	ReligiousPeopleOverview,
} from '@/features/pious-group/components';
import { dummy_religious_info, parish_council_pages } from '@/features/pious-group/data';

const RenderOverViewComponent = ({ pathName }: { pathName: string | number | undefined }) => {
	const page = String(pathName);

	switch (true) {
		case parish_council_pages.includes(page):
			return <ParishCouncilMemberOverview />;

		case page === 'religious_people_parish':
			return <ReligiousPeopleOverview data={dummy_religious_info} />;

		case page === 'family_members':
			return <FamilyMembersOverviewLayout />;

		default:
			return <h1 className="text-red-600">Details page coming soon...</h1>;
	}
};

export default RenderOverViewComponent;

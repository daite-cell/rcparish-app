import {
	FamiliesOverview,
	FamilyMembersOverviewLayout,
	ParishCouncilMemberOverview,
	ParishFamilyFullDetailsOverView,
	ReligiousPeopleOverview,
} from '@/features/pious-group/components';

import {
	dummy_religious_info,
	parish_council_pages,
	priest_family_dummy_data,
	family_full_overview_data,
} from '@/features/pious-group/data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';

const componentMap = {
	families: {
		view: <FamiliesOverview data={family_full_overview_data} />,
		form: <h1>Families Form</h1>,
	},
	family_members: {
		view: <FamilyMembersOverviewLayout />,
		form: <h1>Family Members Form</h1>,
	},
	priest_nun_parish: {
		view: <ParishFamilyFullDetailsOverView data={priest_family_dummy_data} />,
		form: <h1>Priest Nun Form</h1>,
	},
	religious_people_parish: {
		view: <ReligiousPeopleOverview data={dummy_religious_info} />,
		form: <h1>Religious Form</h1>,
	},

	...Object.fromEntries(
		parish_council_pages.map((p) => [
			p,
			{
				view: <ParishCouncilMemberOverview />,
				form: <h1>Parish Council Form</h1>,
			},
		])
	),
};

const RenderPiousGroupOverviewContainer = ({ pathName }: { pathName: string | number | undefined }) => {
	return <OverviewTabsLayout pathName={pathName} componentMap={componentMap} />;
};

export default RenderPiousGroupOverviewContainer;

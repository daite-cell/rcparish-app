import {
	GenericCouncilMemberDetails,
	GenericFamilesDetailsOverview,
	GenericMembersInFamilesOverview,
} from '@/components';
import { ReligiousPeopleOverview } from '@/features/pious-group/components';

import { dummy_religious_info, parish_council_pages } from '@/features/pious-group/data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';

const componentMap = {
	families: {
		view: <GenericFamilesDetailsOverview />,
		form: <h1>Families Form</h1>,
	},
	family_members: {
		view: <GenericMembersInFamilesOverview />,
		form: <h1>Family Members Form</h1>,
	},
	priest_nun_parish: {
		view: <GenericMembersInFamilesOverview />,
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
				view: <GenericCouncilMemberDetails />,
				form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
			},
		])
	),
};

const RenderPiousGroupOverviewContainer = ({ pathName }: { pathName: string | number | undefined }) => {
	return <OverviewTabsLayout pathName={pathName} componentMap={componentMap} />;
};

export default RenderPiousGroupOverviewContainer;

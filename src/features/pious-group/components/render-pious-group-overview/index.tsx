import { GenericFamilesDetailsOverview, GenericReligiousPeopleDetailsOverview } from '@/components';
import { parish_council_pages } from '@/features/pious-group/data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';
import CouncilMemberDetailsContainer from '../generic-religious-people-details-container';
import GenericMembersInFamilesOverviewContainer from '../generic-members-in-familes-overview-container';

const componentMap = {
	families: {
		view: <GenericFamilesDetailsOverview />,
		form: <h1>Families Form</h1>,
	},
	family_members: {
		view: <GenericMembersInFamilesOverviewContainer />,
		form: <h1>Family Members Form</h1>,
	},
	priest_nun_parish: {
		view: <GenericMembersInFamilesOverviewContainer />,
		form: <h1>Priest Nun Form</h1>,
	},
	religious_people_parish: {
		view: <GenericReligiousPeopleDetailsOverview />,
		form: <h1>Religious Form</h1>,
	},

	...Object.fromEntries(
		parish_council_pages.map((p) => [
			p,
			{
				view: <CouncilMemberDetailsContainer />,
				form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
			},
		])
	),
};

const RenderPiousGroupOverviewContainer = ({ pathName }: { pathName: string | number | undefined }) => {
	return <OverviewTabsLayout pathName={pathName} componentMap={componentMap} />;
};

export default RenderPiousGroupOverviewContainer;

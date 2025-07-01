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
import TabsLayout from '../tabs-layout';
import { useState, type JSX } from 'react';
import { useStore } from '@/store/store';

const RenderOverViewComponent = ({ pathName }: { pathName: string | number | undefined }) => {
	const page = String(pathName);
	const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
	const { handleCloseRow } = useStore();

	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	let content: JSX.Element = <h1 className="text-red-600">Details page coming soon...</h1>;

	switch (true) {
		case parish_council_pages.includes(page):
			content = activeTabIndex === 0 ? <ParishCouncilMemberOverview /> : <h1>form</h1>;
			break;

		case page === 'religious_people_parish':
			content = activeTabIndex === 0 ? <ReligiousPeopleOverview data={dummy_religious_info} /> : <h1>form</h1>;
			break;
		case page === 'priest_nun_parish':
			content =
				activeTabIndex === 0 ? <ParishFamilyFullDetailsOverView data={priest_family_dummy_data} /> : <h1>form</h1>;
			break;

		case page === 'family_members':
			content = activeTabIndex === 0 ? <FamilyMembersOverviewLayout /> : <h1>form</h1>;
			break;
		case page === 'families':
			content = activeTabIndex === 0 ? <FamiliesOverview data={family_full_overview_data} /> : <h1>form</h1>;
			break;

		default:
			content = <h1 className="text-red-600">Details page coming soon...</h1>;
			break;
	}

	const handleTabChange = (index: number) => {
		if (tabs[index].label.toLowerCase() === 'back') {
			handleCloseRow();
			setActiveTabIndex(0);
		} else {
			setActiveTabIndex(index);
		}
	};

	return (
		<TabsLayout tabs={tabs} activeTabId={activeTabIndex} onTabChange={handleTabChange}>
			{content}
		</TabsLayout>
	);
};

export default RenderOverViewComponent;

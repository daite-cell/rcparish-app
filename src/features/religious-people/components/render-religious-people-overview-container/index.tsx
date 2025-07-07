import { GenericMemberPersonalInfo } from '@/components';
import { religious_people_pages } from '../../data';
import OverviewTabsLayout from '@/layouts/overview-tabs-layout';

const RenderReligiousPeopleOverviewContainer = ({ pathName }: { pathName: string | number | undefined }) => {
	const tabs = [{ label: 'profile' }, { label: 'back' }];

	const componentMap = {
		...Object.fromEntries(
			religious_people_pages.map((p) => [
				p,
				{
					view: <GenericMemberPersonalInfo />,
				},
			])
		),
	};

	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderReligiousPeopleOverviewContainer;

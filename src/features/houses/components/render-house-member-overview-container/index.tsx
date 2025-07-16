import { useRouteName } from '@/utils/getRouteName';
import { OverviewTabsLayout } from '@/layouts';
import RenderHouseOverview from '../render-house-overview';

const RenderHouseMemberOverviewContainer = () => {
	const pathName = useRouteName('type');
	const houses_pages = ['institutions', 'vocational_institutions', 'communities'];
	const componentMap = {
		...Object.fromEntries(
			houses_pages.map((p) => [
				p,
				{
					view: <RenderHouseOverview />,
					form: <h1 className="text-red-600">Parish Council Forms will be added soon .........</h1>,
				},
			])
		),
	};
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];
	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderHouseMemberOverviewContainer;

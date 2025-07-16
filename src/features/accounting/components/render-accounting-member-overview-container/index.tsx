import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import GenericAccountingDetailsContainer from '../generic-accounting-details-container';
import { accounting_pages } from '../../data';

const RenderAccountingMemberOverviewContainer = () => {
	const pathName = useRouteName('type');
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	const componentMap = {
		...Object.fromEntries(
			accounting_pages.map((p) => [
				p,
				{
					view: <GenericAccountingDetailsContainer />,
					edit: <h1 className="text-red-600">Edit {p} Form will be added soon .........</h1>,
				},
			])
		),
	};
	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderAccountingMemberOverviewContainer;

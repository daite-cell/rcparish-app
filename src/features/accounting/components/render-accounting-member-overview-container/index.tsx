import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import GenericAccountingDetailsContainer from '../generic-accounting-details-container';
import { accounting_pages } from '../../data';

const RenderAccountingMemberOverviewContainer = () => {
	const pathName = useRouteName('type');
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	if (!pathName || !accounting_pages.includes(pathName as string)) {
		return <div className="text-center mt-10 text-gray-500">Invalid page type</div>;
	}

	const componentMap = {
		...Object.fromEntries(
			accounting_pages.map((p) => [
				p,
				{
					view: <GenericAccountingDetailsContainer />,
					edit: <h1 className="text-red-600">Edit {p} Form will be coming soon</h1>,
				},
			])
		),
	};
	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderAccountingMemberOverviewContainer;

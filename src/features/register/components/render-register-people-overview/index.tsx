import { OverviewTabsLayout } from '@/layouts';
import { member_overview_pages_with_tables } from '../../data';
import { useStore } from '@/store/store';
import GenericRegisterPeopleDetailsContainer from '../generic-register-people-details-container';

const RenderRegisterPeopleOverview = ({ pathName }: { pathName: string | number | undefined }) => {
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];
	const { selectRow } = useStore();
	console.warn(selectRow);

	const componentMap = {
		...Object.fromEntries(
			member_overview_pages_with_tables.map((p) => [
				p,
				{
					view: <GenericRegisterPeopleDetailsContainer />,
					edit: <h1 className="text-red-600">Edit {p} Form will be added soon .........</h1>,
				},
			])
		),
	};
	return <OverviewTabsLayout tabs={tabs} pathName={pathName} componentMap={componentMap} />;
};

export default RenderRegisterPeopleOverview;

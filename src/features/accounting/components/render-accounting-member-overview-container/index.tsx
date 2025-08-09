import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import GenericAccountingDetailsContainer from '../generic-accounting-details-container';
import { accounting_pages } from '../../data';
import { useStore } from '@/store/store';
import { EmployersSalaryForm, SubscriptionForm, WorkersForm } from '../../forms';

const RenderAccountingMemberOverviewContainer = () => {
	const { editRow } = useStore();
	const pathName = useRouteName('type');

	const componentMap = {
		workers: {
			view: <GenericAccountingDetailsContainer />,
			form: <WorkersForm />,
		},
		subscription: {
			view: <GenericAccountingDetailsContainer />,
			form: <SubscriptionForm />,
		},
		employers_salary: {
			view: <GenericAccountingDetailsContainer />,
			form: <EmployersSalaryForm />,
		},

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
	return (
		<OverviewTabsLayout
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderAccountingMemberOverviewContainer;

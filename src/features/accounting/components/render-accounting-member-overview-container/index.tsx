import { OverviewTabsLayout } from '@/layouts';
import { useRouteName } from '@/utils/getRouteName';
import GenericAccountingDetailsContainer from '../generic-accounting-details-container';
import { useStore } from '@/store/store';
import { EmployersSalaryForm, SubscriptionForm, WorkersForm } from '../../forms';
import { memo } from 'react';

const RenderAccountingMemberOverviewContainer = memo(() => {
	const { editRow } = useStore();
	const pathName = useRouteName('type');
	const withoutEditPages = ['donations', 'church_collections'].includes(pathName as string);

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
		donations: {
			view: <GenericAccountingDetailsContainer />,
		},
		church_collections: {
			view: <GenericAccountingDetailsContainer />,
		},
		rent_shop: {
			view: <GenericAccountingDetailsContainer />,
			edit: <h1 className="text-red-600">Edit Rent Shop Form will be coming soon</h1>,
		},
		day_book: {
			view: <GenericAccountingDetailsContainer />,
			edit: <h1 className="text-red-600">Edit Day Book Form will be coming soon</h1>,
		},
	};
	return (
		<OverviewTabsLayout
			tabs={
				withoutEditPages
					? [{ label: 'profile' }, { label: 'back' }]
					: [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }]
			}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={withoutEditPages ? 'profile' : editRow ? 'edit' : 'profile'}
		/>
	);
});

export default RenderAccountingMemberOverviewContainer;

import { useRouteName } from '@/utils/getRouteName';
import {
	AuditingExpenseForm,
	AuditingIncomeForm,
	ChurchCollectionForm,
	DayBookForm,
	DonationsForm,
	WorkersForm,
} from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'donations',
			component: <DonationsForm />,
		},
		{
			pageName: 'workers',
			component: <WorkersForm />,
		},

		{
			pageName: 'day_book',
			component: <DayBookForm />,
		},
		{
			pageName: 'auditing_income',
			component: <AuditingIncomeForm />,
		},
		{
			pageName: 'auditing_expense',
			component: <AuditingExpenseForm />,
		},
		{
			pageName: 'church_collections',
			component: <ChurchCollectionForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

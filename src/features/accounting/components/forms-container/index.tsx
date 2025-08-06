import { useRouteName } from '@/utils/getRouteName';
import { DayBookForm, DonationsForm, WorkersForm } from '../../forms';

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
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

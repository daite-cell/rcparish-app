import { HistoryForm } from '@/components';
import { useRouteName } from '@/utils/getRouteName';
import { FormerParishPriestForm, FormNotificationsForm } from '../../form';

const FormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'parish_history',
			component: <HistoryForm />,
		},
		{
			pageName: 'patron_saint',
			component: <HistoryForm />,
		},

		{
			pageName: 'former_parish_priest',
			component: <FormerParishPriestForm />,
		},
		{
			pageName: 'forms_notifications',
			component: <FormNotificationsForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default FormsContainer;

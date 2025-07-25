import { useRouteName } from '@/utils/getRouteName';
import { CemeteryForm, ChurchInventoryForm, OtherInventoryForm, RentDetailsForm } from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'rent_details',
			component: <RentDetailsForm />,
		},
		{
			pageName: 'cemetery',
			component: <CemeteryForm />,
		},
		{
			pageName: 'church_inventory',
			component: <ChurchInventoryForm />,
		},
		{
			pageName: 'other_inventory',
			component: <OtherInventoryForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

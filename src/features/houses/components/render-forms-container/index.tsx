import { useRouteName } from '@/utils/getRouteName';
import { CommunitiesForm, InstitutionsForm, VocationalInstitutionsForm } from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'institutions',
			component: <InstitutionsForm />,
		},
		{
			pageName: 'vocational_institutions',
			component: <VocationalInstitutionsForm />,
		},
		{
			pageName: 'communities',
			component: <CommunitiesForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

import { useRouteName } from '@/utils/getRouteName';
import {
	CommissionsForm,
	CommitteesForm,
	HousesListForm,
	InstitutionsListForm,
	PriestsForm,
	SocialServiceSocietyForm,
	VocationalListForm,
} from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'commissions',
			component: <CommissionsForm />,
		},
		{
			pageName: 'committees',
			component: <CommitteesForm />,
		},
		{
			pageName: 'vsss',
			component: <SocialServiceSocietyForm />,
		},
		{
			pageName: 'houses_list',
			component: <HousesListForm />,
		},
		{
			pageName: 'institutions_list',
			component: <InstitutionsListForm />,
		},
		{
			pageName: 'vocational_list',
			component: <VocationalListForm />,
		},
		{
			pageName: 'priests',
			component: <PriestsForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

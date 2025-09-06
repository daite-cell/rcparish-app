import { useRouteName } from '@/utils/getRouteName';
import {
	BishopForm,
	CommissionsForm,
	CommitteesForm,
	HousesListForm,
	InstitutionsListForm,
	ParishesForm,
	PriestsForm,
	PropertiesForm,
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
		{
			pageName: 'properties',
			component: <PropertiesForm />,
		},
		{
			pageName: 'bishop',
			component: <BishopForm />,
		},
		{ pageName: 'parishes', component: <ParishesForm /> },
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

import { useRouteName } from '@/utils/getRouteName';
import {
	AnbiamInchargeForm,
	AnbiamsForm,
	AssociationsClubForm,
	AssociationsInchargeForm,
	FamiliesForm,
	ParishCouncilMembersForm,
	PriestNunParishForm,
	ReligiousParishCouncilMembersForm,
} from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{
			pageName: 'parish_council_members',
			component: <ParishCouncilMembersForm />,
		},
		{
			pageName: 'religious_people_parish',
			component: <ReligiousParishCouncilMembersForm />,
		},
		{
			pageName: 'priest_nun_parish',
			component: <PriestNunParishForm />,
		},
		{
			pageName: 'family_members',
			component: <h1>Family Members Form will be added</h1>,
		},
		{
			pageName: 'families',
			component: <FamiliesForm />,
		},
		{
			pageName: 'anbiams',
			component: <AnbiamsForm />,
		},
		{
			pageName: 'associations_club',
			component: <AssociationsClubForm />,
		},
		{
			pageName: 'anbiam_incharge',
			component: <AnbiamInchargeForm />,
		},
		{
			pageName: 'associations_incharge',
			component: <AssociationsInchargeForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

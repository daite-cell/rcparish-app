import { useRouteName } from '@/utils/getRouteName';
import {
	BaptismForm,
	ChroniclesForm,
	ConfirmationsForm,
	DeathRegisterForm,
	HolyCommunionForm,
	MarriageProposalForm,
	MarriageRegistrationForm,
} from '../../forms';

const RenderFormsContainer = () => {
	const type = useRouteName('type');

	const renderForms = [
		{ pageName: 'chronicles', component: <ChroniclesForm /> },
		{ pageName: 'baptism', component: <BaptismForm /> },
		{ pageName: 'holy_communion', component: <HolyCommunionForm /> },
		{ pageName: 'confirmations', component: <ConfirmationsForm /> },
		{ pageName: 'death_register', component: <DeathRegisterForm /> },
		{
			pageName: 'marriage_proposal',
			component: <MarriageProposalForm />,
		},
		{
			pageName: 'marriage_registration',
			component: <MarriageRegistrationForm />,
		},
	];
	return renderForms.find((form) => form.pageName === type)?.component || <h1>forms will be added</h1>;
};

export default RenderFormsContainer;

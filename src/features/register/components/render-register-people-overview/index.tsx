import { OverviewTabsLayout } from '@/layouts';
import GenericRegisterPeopleDetailsContainer from '../generic-register-people-details-container';
import { useStore } from '@/store/store';
import {
	BaptismEditForm,
	ChroniclesForm,
	ConfirmationsEditForm,
	DeathRegisterForm,
	HolyCommunionEditForm,
	MarriageProposalForm,
	MarriageRegistrationForm,
} from '../../forms';

const RenderRegisterPeopleOverview = ({ pathName }: { pathName: string | number | undefined }) => {
	const { editRow } = useStore();
	const tabs = [{ label: 'profile' }, { label: 'edit' }, { label: 'back' }];

	const componentMap = {
		baptism: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <BaptismEditForm />,
		},
		holy_communion: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <HolyCommunionEditForm />,
		},
		confirmations: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <ConfirmationsEditForm />,
		},
		chronicles: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <ChroniclesForm />,
		},
		marriage_registration: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <MarriageRegistrationForm />,
		},
		marriage_proposal: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <MarriageProposalForm />,
		},
		death_register: {
			view: <GenericRegisterPeopleDetailsContainer />,
			form: <DeathRegisterForm />,
		},
	};
	return (
		<OverviewTabsLayout
			tabs={tabs}
			pathName={pathName}
			componentMap={componentMap}
			defaultTabLabel={editRow ? 'edit' : 'profile'}
		/>
	);
};

export default RenderRegisterPeopleOverview;
